import type { MetadataRoute } from "next";
import { contentRepository } from "@/lib/content/repository";
import { siteConfig } from "@/lib/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paths = [
    "",
    "/experiences",
    "/stories",
    "/about",
    "/partners",
    "/join",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const staticEntries: MetadataRoute.Sitemap = paths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const stories = await contentRepository.listStories();
  const storyEntries: MetadataRoute.Sitemap = stories
    .filter((story) => !story.isDraft)
    .map((story) => ({
      url: `${siteConfig.url}/stories/${story.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [...staticEntries, ...storyEntries];
}
