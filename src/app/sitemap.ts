import type { MetadataRoute } from "next";
import { siteUrl, serviceCategories } from "@/lib/site-data";

const routes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/systems", changeFrequency: "monthly" as const, priority: 0.9 },
  ...serviceCategories.map((cat) => ({
    path: `/systems/${cat.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
  { path: "/process", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/case-studies", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/career", changeFrequency: "monthly" as const, priority: 0.5 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly" as const, priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly" as const, priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
