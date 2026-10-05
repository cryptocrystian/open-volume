import type { Experience, Story } from "@/lib/content-models";
import { perspective01Body } from "@/lib/content/perspective-01";

/**
 * Launch content currently available to the public site.
 * Draft concepts remain explicitly marked and must not imply unannounced artists,
 * venues, worlds, partners, dates, or capabilities.
 */
export const launchStoryConcepts: Story[] = [
  {
    slug: "what-makes-a-music-experience-worth-remembering",
    title: "What makes a music experience worth remembering?",
    category: "perspective",
    excerpt:
      "Beyond scale and spectacle: presence, intention, place and the details that give a performance weight after it ends.",
    heroAlt: "Open Volume Perspective editorial feature",
    body: perspective01Body,
    isDraft: false,
  },
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
