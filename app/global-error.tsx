"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#1A1A18", color: "#F8F5ED", fontFamily: "system-ui, sans-serif" }}>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem" }}>
          <div style={{ maxWidth: "720px" }}>
            <p style={{ textTransform: "uppercase", letterSpacing: ".18em", fontSize: ".75rem" }}>Open Volume</p>
            <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", lineHeight: .95, fontWeight: 400 }}>
              Something interrupted the page.
            </h1>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.5 }}>
              Try loading it again. If the issue continues, return to openvolume.world shortly.
            </p>
            <button
              type="button"
              onClick={reset}
              style={{ marginTop: "1rem", border: 0, borderBottom: "1px solid currentColor", padding: "0 0 .4rem", background: "transparent", color: "inherit", cursor: "pointer" }}
            >
              Try again ↗
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
