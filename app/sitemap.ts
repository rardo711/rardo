import type { MetadataRoute } from "next";
import { pageDates, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(pageDates).map(([path, date]) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(date),
  }));
}
