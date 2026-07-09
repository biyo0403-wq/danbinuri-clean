import type { MetadataRoute } from "next";
import { subServicePages } from "@/lib/data";

const baseUrl = "https://www.danbiservice.co.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/inquiry`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/reserve`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/cases`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/qna`, changeFrequency: "daily", priority: 0.6 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = subServicePages.map((s) => ({
    url: `${baseUrl}/services/${s.category}/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
