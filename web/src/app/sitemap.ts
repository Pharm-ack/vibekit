import type { MetadataRoute } from "next";
import { SITE } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
