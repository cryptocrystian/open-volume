import type { ReactNode } from "react";

export function Section({
  eyebrow,
  children,
  tone = "dark",
  id,
}: {
  eyebrow?: string;
  children: ReactNode;
  tone?: "dark" | "light" | "mineral";
  id?: string;
}) {
  return (
    <section id={id} className={`section section--${tone}`}>
      <div className="section-inner">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {children}
      </div>
    </section>
  );
}

export function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className="arrow-link">
      {children}<span aria-hidden="true">↗</span>
    </a>
  );
}

export function MediaPlaceholder({
  label,
  variant = "wide",
}: {
  label: string;
  variant?: "wide" | "portrait" | "square";
}) {
  return (
    <div className={`media-placeholder media-placeholder--${variant}`} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
