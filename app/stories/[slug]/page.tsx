import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StoryBody } from "@/components/story-body";
import { contentRepository } from "@/lib/content/repository";
import { launchMedia } from "@/lib/launch-media";
import styles from "./story.module.css";

export async function generateStaticParams() {
  const stories = await contentRepository.listStories();
  return stories
    .filter((story) => !story.isDraft)
    .map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = await contentRepository.getStory(slug);

  if (!story || story.isDraft) {
    return { title: "Story" };
  }

  return {
    title: story.title,
    description: story.excerpt,
    openGraph: {
      title: `${story.title} — Open Volume`,
      description: story.excerpt,
      type: "article",
    },
  };
}

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = await contentRepository.getStory(slug);

  if (!story || story.isDraft || !story.body) {
    notFound();
  }

  return (
    <article className={styles.article}>
      <section className="v3-subhero">
        <div className="v3-subhero-media" aria-hidden="true"><img className="v3-image" src={launchMedia.club} alt="" fetchPriority="high" /></div>
        <div className="v3-wrap v3-subhero-content">
          <p className="v3-kicker">Open Volume / {story.category}</p>
          <h1 className="v3-display v3-subhero-title">{story.title}</h1>
          <p className="v3-copy v3-subhero-copy">{story.excerpt}</p>
        </div>
      </section>

      <div className={styles.layout}>
        <aside className={styles.rail} aria-label="Story information">
          <p>Open Volume / {story.category}</p>
          <Link href="/stories" className="text-link">
            All Stories <span aria-hidden="true">↗</span>
          </Link>
        </aside>

        <StoryBody body={story.body} />
      </div>
    </article>
  );
}
