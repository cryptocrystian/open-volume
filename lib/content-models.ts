export type ExperienceStatus = "development" | "announced" | "premiere" | "archive";

export interface Experience {
  slug: string;
  title: string;
  artists: string[];
  format: string;
  location?: string;
  date?: string;
  status: ExperienceStatus;
  summary: string;
  heroMedia?: string;
  heroAlt?: string;
  story?: string;
  credits?: string[];
  partners?: string[];
  relatedStories?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export type StoryCategory = "artists" | "places" | "process" | "perspective" | "discovery";

export interface Story {
  slug: string;
  title: string;
  category: StoryCategory;
  author?: string;
  publishedAt?: string;
  excerpt: string;
  heroMedia?: string;
  heroAlt?: string;
  body?: string;
  artists?: string[];
  relatedExperience?: string;
  isDraft?: boolean;
}
