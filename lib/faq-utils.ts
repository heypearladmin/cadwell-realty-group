import { blogPosts, type BlogPost, type BlogSection } from "./blog-posts";

export type FaqEntry = {
  slug: string;
  question: string;
  answer: string;
  sourceArticleTitle: string;
  sourceArticleSlug: string;
};

export type FaqSource = {
  label: string;
  url: string;
};

// Authoritative external sources per blog post slug
const SOURCES_BY_SLUG: Record<string, FaqSource[]> = {
  "relocating-to-albany-oregon-2026": [
    { label: "Greater Albany Public Schools", url: "https://www.albany.k12.or.us" },
    { label: "Linn County Oregon", url: "https://www.co.linn.or.us" },
    { label: "Amtrak Cascades — Albany Station", url: "https://www.amtrak.com/stations/any" },
    { label: "City of Albany, Oregon", url: "https://www.cityofalbany.net" },
  ],
  "albany-oregon-home-valuation-guide": [
    { label: "Oregon Real Estate Agency", url: "https://www.oregon.gov/rea" },
    { label: "Linn County Assessor's Office", url: "https://www.co.linn.or.us/assessor" },
    { label: "National Association of Realtors — CMA Guide", url: "https://www.nar.realtor" },
  ],
  "your-ultimate-guide-to-buy-albany-oregon-homes": [
    { label: "Oregon Real Estate Agency — Buyer Resources", url: "https://www.oregon.gov/rea" },
    { label: "Consumer Financial Protection Bureau — Homebuying", url: "https://www.consumerfinance.gov/owning-a-home" },
    { label: "Linn County Oregon", url: "https://www.co.linn.or.us" },
  ],
  "sell-your-north-albany-home-with-local-expertise": [
    { label: "Oregon Real Estate Agency", url: "https://www.oregon.gov/rea" },
    { label: "City of Albany — Development Services", url: "https://www.cityofalbany.net/departments/community-development" },
  ],
  "sell-your-home-in-albany-oregon": [
    { label: "Oregon Real Estate Agency", url: "https://www.oregon.gov/rea" },
    { label: "National Association of Realtors", url: "https://www.nar.realtor" },
  ],
  "sell-your-historic-downtown-albany-home": [
    { label: "City of Albany — Historic Preservation", url: "https://www.cityofalbany.net/departments/community-development/historic-preservation" },
    { label: "Oregon State Historic Preservation Office", url: "https://www.oregon.gov/oprd/OH" },
  ],
  "discover-north-albany-2026-guide": [
    { label: "City of Albany, Oregon", url: "https://www.cityofalbany.net" },
    { label: "Benton County Oregon", url: "https://www.co.benton.or.us" },
  ],
  "buy-in-south-albany": [
    { label: "City of Albany — Community Development", url: "https://www.cityofalbany.net/departments/community-development" },
    { label: "Linn County Oregon", url: "https://www.co.linn.or.us" },
  ],
  "2026-interest-rates-albany-home-buyers": [
    { label: "Federal Reserve — Interest Rate Data", url: "https://www.federalreserve.gov/releases/h15" },
    { label: "Consumer Financial Protection Bureau — Mortgages", url: "https://www.consumerfinance.gov/consumer-tools/mortgages" },
    { label: "Freddie Mac Primary Mortgage Market Survey", url: "https://www.freddiemac.com/pmms" },
  ],
  "2026-albany-home-buying-guide-new-vs-existing": [
    { label: "Oregon Real Estate Agency", url: "https://www.oregon.gov/rea" },
    { label: "National Association of Home Builders", url: "https://www.nahb.org" },
    { label: "Consumer Financial Protection Bureau — Homebuying", url: "https://www.consumerfinance.gov/owning-a-home" },
  ],
  "what-makes-a-home-sell-faster-in-albany": [
    { label: "National Association of Realtors — Research", url: "https://www.nar.realtor/research-and-statistics" },
    { label: "Oregon Real Estate Agency", url: "https://www.oregon.gov/rea" },
  ],
  "first-time-buyer-guide-albany-oregon": [
    { label: "Oregon Housing and Community Services", url: "https://www.oregon.gov/ohcs" },
    { label: "Consumer Financial Protection Bureau — First-Time Buyers", url: "https://www.consumerfinance.gov/owning-a-home" },
    { label: "HUD — Oregon Homeownership", url: "https://www.hud.gov/states/oregon/homeownership" },
  ],
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

/** Other FAQs from the same source article, excluding the current one. */
export function getRelatedFaqs(currentSlug: string, sourceArticleSlug: string): FaqEntry[] {
  return getAllFaqs().filter(
    (f) => f.sourceArticleSlug === sourceArticleSlug && f.slug !== currentSlug
  );
}

/** Key takeaways derived from the source post's non-FAQ section headings. */
export function getTakeawaysForPost(post: BlogPost): string[] {
  return post.sections
    .filter((s) => !isFaqSection(s.heading))
    .map((s) => s.heading)
    .slice(0, 6);
}

/** Non-FAQ sections from a post (for the expanded article body). */
export function getNonFaqSections(sections: BlogSection[]): BlogSection[] {
  return sections.filter((s) => !isFaqSection(s.heading));
}

/** External authoritative sources for a given post slug. */
export function getSourcesForPost(postSlug: string): FaqSource[] {
  return SOURCES_BY_SLUG[postSlug] ?? [];
}

/** Returns the full BlogPost that a FaqEntry was derived from. */
export function getPostForFaq(faq: FaqEntry): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === faq.sourceArticleSlug);
}
