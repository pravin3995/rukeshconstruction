import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

// Update when content changes meaningfully.
const LAST_UPDATED = "2026-10-09";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/projects", priority: 0.9 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy-policy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];

  return [
    ...pages.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: p.priority,
    })),
    ...projects.map((p) => ({
      url: `${site.url}/projects/${p.slug}`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: [`${site.url}${p.cover}`],
    })),
  ];
}
