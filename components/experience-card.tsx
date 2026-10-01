import Link from "next/link";
import type { Experience } from "@/lib/content-models";
import { MediaFrame } from "@/components/media-frame";

export function ExperienceCard({ experience }: { experience: Experience }) {
  const href = experience.status === "development"
    ? "/join"
    : `/experiences/${experience.slug}`;

  return (
    <article className="experience-card">
      <Link href={href} aria-label={experience.title}>
        <MediaFrame
          src={experience.heroMedia}
          alt={experience.heroAlt ?? experience.title}
          ratio="cinematic"
          label={experience.status === "development" ? "Experience in development / imagery pending" : undefined}
        />
      </Link>
      <div className="experience-card-copy">
        <p className="content-meta">
          <span>{experience.status}</span>
          <span>{experience.format}</span>
          {experience.location ? <span>{experience.location}</span> : null}
        </p>
        <h2><Link href={href}>{experience.title}</Link></h2>
        <p>{experience.summary}</p>
        <Link className="text-link" href={href}>
          {experience.status === "development" ? "Be first to know" : (experience.ctaLabel ?? "View experience")} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
