import { blogPosts, type BlogSection } from "./blog-posts";

export type FaqEntry = {
  slug: string;
  question: string;
  answer: string;
  sourceArticleTitle: string;
  sourceArticleSlug: string;
};

function isFaqSection(heading: string): boolean {
  return /^frequently asked/i.test(heading);
}

function parseFaqParagraph(text: string): { question: string; answer: string } | null {
  const idx = text.indexOf("?");
  if (idx === -1) return null;
  const question = text.slice(0, idx + 1).trim();
  const answer = text.slice(idx + 1).trim();
  if (!question || !answer) return null;
  return { question, answer };
}

export function questionToSlug(question: string): string {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

export function getAllFaqs(): FaqEntry[] {
  const entries: FaqEntry[] = [];
  for (const post of blogPosts) {
    for (const section of post.sections) {
      if (!isFaqSection(section.heading)) continue;
      for (const paragraph of section.paragraphs) {
        const parsed = parseFaqParagraph(paragraph);
        if (!parsed) continue;
        entries.push({
          slug: questionToSlug(parsed.question),
          question: parsed.question,
          answer: parsed.answer,
          sourceArticleTitle: post.title,
          sourceArticleSlug: post.slug,
        });
      }
    }
  }
  return entries;
}

export function findFaq(slug: string): FaqEntry | null {
  return getAllFaqs().find((f) => f.slug === slug) ?? null;
}

export function getFaqsForPost(postSlug: string): FaqEntry[] {
  return getAllFaqs().filter((f) => f.sourceArticleSlug === postSlug);
}

export function getNonFaqSections(sections: BlogSection[]): BlogSection[] {
  return sections.filter((s) => !isFaqSection(s.heading));
}
