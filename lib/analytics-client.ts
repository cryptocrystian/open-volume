export type AnalyticsEventName = "cta_click" | "join_success";

type AnalyticsPayload = {
  label?: string;
  href?: string;
  source?: "homepage" | "join-page";
};

export async function trackAnalyticsEvent(
  event: AnalyticsEventName,
  payload: AnalyticsPayload = {},
) {
  if (typeof window === "undefined") return;

  const body = JSON.stringify({
    event,
    path: window.location.pathname,
    ...payload,
  });

  try {
    if ("sendBeacon" in navigator) {
      const queued = navigator.sendBeacon(
        "/api/event",
        new Blob([body], { type: "application/json" }),
      );
      if (queued) return;
    }

    await fetch("/api/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
      cache: "no-store",
    });
  } catch {
    // Analytics must never interrupt navigation or signup.
  }
}
