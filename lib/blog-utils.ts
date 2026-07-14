import { blogPosts, type BlogPost, type BlogSection } from "./blog-posts";

export function estimateReadingTime(sections: BlogSection[]): number {
  const text = sections.flatMap((s) => [s.heading, ...s.paragraphs]).join(" ");
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 220));
}

export function headingToId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  max = 4
): BlogPost[] {
  return blogPosts
    .filter(
      (p) =>
        p.slug !== currentSlug &&
        p.category === category &&
        p.publishedAt
    )
    .slice(0, max);
}
