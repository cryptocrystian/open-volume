import { createHash, randomUUID } from "node:crypto";
import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_SOURCES = new Set(["homepage", "join-page"]);
const WEBHOOK_TIMEOUT_MS = 8000;

type JoinPayload = {
  email?: unknown;
  company?: unknown;
  source?: unknown;
};

function getWebhookUrl() {
  const raw = process.env.OPEN_VOLUME_JOIN_WEBHOOK_URL?.trim();
  if (!raw) return null;

  try {
    const url = new URL(raw);
    if (process.env.NODE_ENV === "production" && url.protocol !== "https:") {
      return null;
    }
    return url.toString();
  } catch {
    return null;
  }
}

function buildSubscriberKey(email: string) {
  return createHash("sha256").update(email).digest("hex");
}

export async function POST(request: Request) {
  let body: JoinPayload;

  try {
    body = (await request.json()) as JoinPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const source = typeof body.source === "string" && ALLOWED_SOURCES.has(body.source)
    ? body.source
    : "website";

  // Silent success for bot submissions caught by the honeypot.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const webhookUrl = getWebhookUrl();

  if (!webhookUrl) {
    return NextResponse.json(
      {
        ok: false,
        message: "Audience capture is not connected yet. Please check back shortly.",
      },
      { status: 503 },
    );
  }

  const requestId = randomUUID();
  const subscriberKey = buildSubscriberKey(email);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "open-volume-website/1.0",
        "X-Open-Volume-Request-Id": requestId,
        "X-Open-Volume-Subscriber-Key": subscriberKey,
        ...(process.env.OPEN_VOLUME_JOIN_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.OPEN_VOLUME_JOIN_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        email,
        source,
        subscribedAt: new Date().toISOString(),
        consent: "Open Volume announcements and editorial",
        subscriberKey,
        requestId,
      }),
      cache: "no-store",
      signal: controller.signal,
    });

    // Treat an upstream duplicate as success. The user is already subscribed.
    if (upstream.status === 409) {
      return NextResponse.json({ ok: true, alreadySubscribed: true });
    }

    if (!upstream.ok) {
      return NextResponse.json(
        { ok: false, message: "We could not add you right now. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "We could not add you right now. Please try again." },
      { status: 502 },
    );
  } finally {
    clearTimeout(timeout);
  }
}
