import type { MetadataRoute } from "next";
import { siteUrl, serviceCategories } from "@/lib/site-data";
import { blogPosts } from "@/lib/blog-data";

const routes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
  ...serviceCategories.map((cat) => ({
    path: `/services/${cat.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
  { path: "/process", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/case-studies", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly" as const, priority: 0.7 },
  ...blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  })),
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
