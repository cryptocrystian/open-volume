import type { Experience, Story } from "@/lib/content-models";

/**
 * Editorial concepts used to validate the launch-site system.
 * They are not represented as published reporting and do not assert unannounced
 * artists, venues, worlds, partners, dates, or capabilities.
 */
export const launchStoryConcepts: Story[] = [
  {
    slug: "light-as-part-of-the-performance",
    title: "Light as part of the performance",
    category: "process",
    excerpt:
      "A study of how authored light can shape attention, atmosphere and the way a musical moment is remembered.",
    heroAlt: "Production lighting study placeholder",
    isDraft: true,
  },
  {
    slug: "what-makes-an-experience-worth-remembering",
    title: "What makes a music experience worth remembering?",
    category: "perspective",
    excerpt:
      "Beyond scale and spectacle: presence, intention, place, music and the details that make a performance stay with people.",
    heroAlt: "Audience and performance editorial placeholder",
    isDraft: true,
  },
  {
    slug: "when-place-becomes-part-of-the-set",
    title: "When place becomes part of the set",
    category: "places",
    excerpt:
      "How architecture, environment and context can change the emotional weight of a performance without becoming the headline themselves.",
    heroAlt: "Place-led music experience placeholder",
    isDraft: true,
  },
];

export const launchExperienceConcepts: Experience[] = [
  {
    slug: "first-open-volume-experience",
    title: "The first Open Volume experience",
    artists: [],
    format: "Original performance",
    status: "development",
    summary:
      "The initial Open Volume slate is in development. Artist, place and format will be revealed when the creative premise and production plan are ready.",
    heroAlt: "Controlled Open Volume production fragment placeholder",
  },
];
