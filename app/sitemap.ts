import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
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

  return paths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
