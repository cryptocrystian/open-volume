import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_SOURCES = new Set(["homepage", "join-page"]);

type JoinPayload = {
  email?: unknown;
  company?: unknown;
  source?: unknown;
};

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

  const webhookUrl = process.env.OPEN_VOLUME_JOIN_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      {
        ok: false,
        message: "Audience capture is not connected yet. Please check back shortly.",
      },
      { status: 503 },
    );
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.OPEN_VOLUME_JOIN_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.OPEN_VOLUME_JOIN_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        email,
        source,
        subscribedAt: new Date().toISOString(),
        consent: "Open Volume announcements and editorial",
      }),
      cache: "no-store",
    });

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
  }
}
