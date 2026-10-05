import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";

const ALLOWED_EVENTS = new Set(["cta_click", "join_success"]);
const ALLOWED_SOURCES = new Set(["homepage", "join-page"]);
const MAX_FIELD_LENGTH = 180;

type AnalyticsEngineBinding = {
  writeDataPoint(data: {
    indexes?: string[];
    blobs?: string[];
    doubles?: number[];
  }): void;
};

function clean(value: unknown) {
  if (typeof value !== "string") return undefined;
  const normalized = value.trim();
  if (!normalized || normalized.length > MAX_FIELD_LENGTH) return undefined;
  return normalized;
}

function cleanHref(value: unknown) {
  const href = clean(value);
  if (!href || !href.startsWith("/")) return undefined;

  try {
    return new URL(href, "https://openvolume.world").pathname;
  } catch {
    return undefined;
  }
}

function writeAnalyticsPoint(record: {
  event: string;
  path?: string;
  label?: string;
  href?: string;
  source?: string;
}) {
  try {
    const { env } = getCloudflareContext();
    const analytics = (
      env as unknown as { OPEN_VOLUME_ANALYTICS?: AnalyticsEngineBinding }
    ).OPEN_VOLUME_ANALYTICS;

    analytics?.writeDataPoint({
      indexes: [record.event],
      blobs: [
        record.path ?? "",
        record.label ?? "",
        record.href ?? "",
        record.source ?? "",
      ],
      doubles: [Date.now()],
    });
  } catch {
    // Local Next.js runs without Cloudflare context should not fail analytics requests.
  }
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");

  if (origin) {
    try {
      if (new URL(origin).origin !== new URL(request.url).origin) {
        return new NextResponse(null, { status: 204 });
      }
    } catch {
      return new NextResponse(null, { status: 204 });
    }
  }

  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  const event = clean(body.event);
  if (!event || !ALLOWED_EVENTS.has(event)) {
    return new NextResponse(null, { status: 204 });
  }

  const source = clean(body.source);
  const record = {
    event,
    path: clean(body.path),
    label: clean(body.label),
    href: cleanHref(body.href),
    source: source && ALLOWED_SOURCES.has(source) ? source : undefined,
  };

  writeAnalyticsPoint(record);

  return new NextResponse(null, {
    status: 204,
    headers: { "Cache-Control": "no-store" },
  });
}
