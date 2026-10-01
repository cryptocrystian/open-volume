import type { Experience, Story } from "@/lib/content-models";
import { launchExperienceConcepts, launchStoryConcepts } from "@/lib/launch-content";

export interface ContentRepository {
  listStories(): Promise<Story[]>;
  getStory(slug: string): Promise<Story | null>;
  listExperiences(): Promise<Experience[]>;
  getExperience(slug: string): Promise<Experience | null>;
}

/**
 * Repository-native provider used during pre-launch.
 *
 * The site imports content through this interface instead of directly from a
 * future CMS SDK. When an external CMS is selected, implement the same
 * repository contract and swap the exported provider.
 */
class LocalContentRepository implements ContentRepository {
  async listStories() {
    return launchStoryConcepts;
  }

  async getStory(slug: string) {
    return launchStoryConcepts.find((story) => story.slug === slug) ?? null;
  }

  async listExperiences() {
    return launchExperienceConcepts;
  }

  async getExperience(slug: string) {
    return launchExperienceConcepts.find((experience) => experience.slug === slug) ?? null;
  }
}

export const contentRepository: ContentRepository = new LocalContentRepository();
