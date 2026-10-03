import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Experience, Story } from "@/lib/content-models";
import { launchExperienceConcepts, launchStoryConcepts } from "@/lib/launch-content";
import { parseStoryMarkdown } from "@/lib/content/markdown";

export interface ContentRepository {
  listStories(): Promise<Story[]>;
  getStory(slug: string): Promise<Story | null>;
  listExperiences(): Promise<Experience[]>;
  getExperience(slug: string): Promise<Experience | null>;
}

async function readRepositoryStory(slug: string): Promise<Story | null> {
  try {
    const source = await readFile(
      path.join(process.cwd(), "content", "stories", `${slug}.md`),
      "utf8",
    );
    return parseStoryMarkdown(source, slug);
  } catch {
    return null;
  }
}

/**
 * Repository-native provider used during pre-launch.
 *
 * Approved editorial lives in /content/stories as Markdown. Draft cards may
 * remain lightweight fixtures until they become real editorial. A future CMS
 * provider can preserve the same contract without rewriting page components.
 */
class LocalContentRepository implements ContentRepository {
  async listStories() {
    const stories = await Promise.all(
      launchStoryConcepts.map(async (story) => {
        if (story.isDraft) return story;
        return (await readRepositoryStory(story.slug)) ?? story;
      }),
    );

    return stories;
  }

  async getStory(slug: string) {
    const indexed = launchStoryConcepts.find((story) => story.slug === slug);
    if (!indexed) return null;

    if (!indexed.isDraft) {
      return (await readRepositoryStory(slug)) ?? indexed;
    }

    return indexed;
  }

  async listExperiences() {
    return launchExperienceConcepts;
  }

  async getExperience(slug: string) {
    return launchExperienceConcepts.find((experience) => experience.slug === slug) ?? null;
  }
}

export const contentRepository: ContentRepository = new LocalContentRepository();
