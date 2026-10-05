import { NextResponse } from "next/server";

const ALLOWED_EVENTS = new Set(["cta_click", "join_success"]);
const ALLOWED_SOURCES = new Set(["homepage", "join-page"]);
const MAX_FIELD_LENGTH = 180;

function clean(value: unknown) {
  if (typeof value !== "string") return undefined;
  const normalized = value.trim();
  if (!normalized || normalized.length > MAX_FIELD_LENGTH) return undefined;
  return normalized;
}

export async function POST(request: Request) {
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
    type: "ov_analytics",
    event,
    path: clean(body.path),
    label: clean(body.label),
    href: clean(body.href),
    source: source && ALLOWED_SOURCES.has(source) ? source : undefined,
    occurredAt: new Date().toISOString(),
  };

  console.info(JSON.stringify(record));

  return new NextResponse(null, {
    status: 204,
    headers: { "Cache-Control": "no-store" },
  });
}
