import Link from "next/link";
import type { Story } from "@/lib/content-models";
import { MediaFrame } from "@/components/media-frame";

type StoryCardProps = {
  story: Story;
  featured?: boolean;
};

export function StoryCard({ story, featured = false }: StoryCardProps) {
  const href = story.isDraft ? "/join" : `/stories/${story.slug}`;

  return (
    <article className={`story-card${featured ? " story-card--featured" : ""}`}>
      <Link href={href} className="story-card-media" aria-label={story.title}>
        <MediaFrame
          src={story.heroMedia}
          alt={story.heroAlt ?? story.title}
          ratio={featured ? "cinematic" : "wide"}
          label={story.isDraft ? "Editorial concept / imagery pending" : undefined}
        />
      </Link>
      <div className="content-card-copy">
        <p className="content-meta">
          <span>{story.category}</span>
          {story.publishedAt ? <span>{story.publishedAt}</span> : null}
          {story.isDraft ? <span>In development</span> : null}
        </p>
        <h2><Link href={href}>{story.title}</Link></h2>
        <p>{story.excerpt}</p>
        <Link className="text-link" href={href}>
          {story.isDraft ? "Stay close" : "Read story"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
