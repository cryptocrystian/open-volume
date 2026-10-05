"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section section--dark">
      <div className="section-inner error-state">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="display display--small">The experience hit an unexpected break.</h1>
        <p className="body-large">
          Try again. If the issue continues, return home and come back shortly.
        </p>
        <div className="error-actions">
          <button type="button" className="arrow-link button-link" onClick={reset}>
            Try Again <span aria-hidden="true">↗</span>
          </button>
          <a className="arrow-link" href="/">
            Return Home <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
