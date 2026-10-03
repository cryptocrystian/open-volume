import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StoryBody } from "@/components/story-body";
import { contentRepository } from "@/lib/content/repository";

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
    <article className="story-article">
      <header className="story-article-header">
        <p className="eyebrow">Open Volume / {story.category}</p>
        <h1 className="display display--medium">{story.title}</h1>
        <p className="story-deck">{story.excerpt}</p>
      </header>

      <div className="story-article-layout">
        <aside className="story-rail" aria-label="Story information">
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
