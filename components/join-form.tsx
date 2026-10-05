"use client";

import { FormEvent, useState } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics-client";

type JoinFormProps = {
  source: "homepage" | "join-page";
};

type FormState = "idle" | "submitting" | "success" | "error";

export function JoinForm({ source }: JoinFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const payload = {
      email: String(form.get("email") ?? "").trim(),
      company: String(form.get("company") ?? "").trim(),
      source,
    };

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "We could not add you right now.");
      }

      event.currentTarget.reset();
      setState("success");
      setMessage("You’re in. We’ll share something when it is worth sharing.");
      void trackAnalyticsEvent("join_success", { source });
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "We could not add you right now.");
    }
  }

  return (
    <div className="join-form-wrap">
      <form className="signup-form" onSubmit={handleSubmit} noValidate>
        <label className="sr-only" htmlFor={`join-email-${source}`}>Email address</label>
        <input
          id={`join-email-${source}`}
          type="email"
          name="email"
          placeholder="Email address"
          autoComplete="email"
          inputMode="email"
          required
          disabled={state === "submitting"}
        />
        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor={`join-company-${source}`}>Company</label>
          <input
            id={`join-company-${source}`}
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <button type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? "Joining…" : "Join Open Volume ↗"}
        </button>
      </form>
      <p className="form-note">Open Volume announcements and editorial. No constant noise.</p>
      <p className={`form-status form-status--${state}`} role="status" aria-live="polite">
        {message}
      </p>
    </div>
  );
}
