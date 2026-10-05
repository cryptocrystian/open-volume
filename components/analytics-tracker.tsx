"use client";

import { useEffect } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics-client";

export function AnalyticsTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const tracked = target.closest<HTMLElement>("[data-analytics-event]");
      if (!tracked) return;

      const eventName = tracked.dataset.analyticsEvent;
      if (eventName !== "cta_click") return;

      void trackAnalyticsEvent("cta_click", {
        label: tracked.dataset.analyticsLabel || "cta",
        href: tracked instanceof HTMLAnchorElement ? tracked.getAttribute("href") || undefined : undefined,
      });
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
