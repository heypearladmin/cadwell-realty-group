import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllNeighborhoodSlugs, getAllBlogSlugs } from "@/lib/home-content";
import { getAllFaqs } from "@/lib/faq-utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.websiteUrl.replace(/\/$/, "");
  const now = new Date();

  type Entry = {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  };

  const staticPages: Entry[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/albany-real-estate", priority: 0.95, changeFrequency: "monthly" },
    { path: "/sell", priority: 0.9, changeFrequency: "monthly" },
    { path: "/new-construction", priority: 0.9, changeFrequency: "monthly" },
    { path: "/neighborhoods", priority: 0.9, changeFrequency: "weekly" },
    { path: "/explore", priority: 0.85, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.75, changeFrequency: "weekly" },
    { path: "/policies", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  const neighborhoodEntries: MetadataRoute.Sitemap = getAllNeighborhoodSlugs().map(
    (slug) => ({
      url: `${base}/neighborhoods/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  const blogEntries: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const staticEntries: MetadataRoute.Sitemap = staticPages.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })
  );

  const faqEntries: MetadataRoute.Sitemap = getAllFaqs().map((faq) => ({
    url: `${base}/faq/${faq.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...neighborhoodEntries, ...blogEntries, ...faqEntries];
}
