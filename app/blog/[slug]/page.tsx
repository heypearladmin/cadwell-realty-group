import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findBlogArticle, getAllBlogSlugs } from "@/lib/home-content";
import { findBlogPost } from "@/lib/blog-posts";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPostingSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { getFaqsForPost, getNonFaqSections } from "@/lib/faq-utils";
import { estimateReadingTime, headingToId, getRelatedPosts } from "@/lib/blog-utils";
import { QuickAnswer } from "@/components/blog/QuickAnswer";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ArticleFaqCards } from "@/components/blog/ArticleFaqCards";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleCta } from "@/components/blog/ArticleCta";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = findBlogArticle(slug);
  if (!article) return {};
  const canonicalUrl = `${site.websiteUrl}/blog/${slug}`;
  return {
    title: article.title,
    description: article.dek,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: article.title,
      description: article.dek,
      type: "article",
      url: canonicalUrl,
      images: [{ url: article.imageSrc, alt: article.imageAlt }],
    },
    twitter: { site: "@cadwellrealty", images: [article.imageSrc] },
  };
}

const PLACEHOLDER_BODY = [
  {
    eyebrow: "Quick read",
    title: "What this guide covers",
    body: "A short, honest take. The parts locals talk about and the parts visitors miss. We update this as Albany changes.",
  },
  {
    eyebrow: "The shortlist",
    title: "Where to start",
    body: "Three places worth your first trip, with the times of day that show each one at its best. Walking distance to coffee in every case.",
  },
  {
    eyebrow: "Worth knowing",
    title: "Field notes",
    body: "The seasonality, the parking math, the timing. Small details that turn a good outing into a memorable one.",
  },
];

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = findBlogArticle(slug);
  if (!article) notFound();

  const post = findBlogPost(slug);
  const pageUrl = `${site.websiteUrl}/blog/${slug}`;

  const faqs = post ? getFaqsForPost(slug) : [];
  const contentSections = post ? getNonFaqSections(post.sections) : [];
  const readingTime = post ? estimateReadingTime(post.sections) : null;
  const tocItems = contentSections.map((s) => ({
    id: headingToId(s.heading),
    heading: s.heading,
  }));
  const relatedPosts = post ? getRelatedPosts(slug, post.category ?? article.category) : [];

  return (
    <main id="main" className="bg-paper">
      <JsonLd
        schema={[
          blogPostingSchema({
            title: article.title,
            description: article.dek,
            url: pageUrl,
            image: article.imageSrc,
            keywords: [article.category, "Albany Oregon", "Albany real estate"],
            ...(post?.publishedAt ? { datePublished: post.publishedAt } : {}),
          }),
          breadcrumbSchema([
            { name: "Home", url: site.websiteUrl },
            { name: "Journal", url: `${site.websiteUrl}/blog` },
            { name: article.title, url: pageUrl },
          ]),
          ...(faqs.length > 0
            ? [faqSchema(faqs.map((f) => ({ q: f.question, a: f.answer })))]
            : []),
        ]}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0 -z-10">
          <Image
            src={article.imageSrc}
            alt={article.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/15" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1/3 bg-gradient-to-b from-ink/55 to-transparent" />

        <div className="section-wrap relative py-24 pt-32 md:py-32 md:pt-40 lg:py-40 lg:pt-48">
          <div className="flex items-center gap-3">
            <Link href={site.blogPath} className="caption !text-paper/65 transition-colors duration-cinema ease-cinema hover:!text-paper">
              Journal
            </Link>
            <span aria-hidden className="h-px w-6 bg-paper/40" />
            <span className="caption !text-paper/65">{article.category}</span>
          </div>
          <h1 className="display-xl mt-6 max-w-4xl !text-paper">{article.title}</h1>
          <p className="dek mt-8 max-w-2xl !text-paper/80">{article.dek}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.875rem] text-paper/65">
            <span>By {site.agentName}</span>
            <span aria-hidden className="text-paper/30">·</span>
            <span>{article.category}</span>
            <span aria-hidden className="text-paper/30">·</span>
            <span>{post?.publishedAt ?? "Updated regularly"}</span>
            {readingTime && (
              <>
                <span aria-hidden className="text-paper/30">·</span>
                <span>{readingTime} min read</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section-wrap py-20 md:py-28 lg:py-32">
        {post ? (
          <>
            {/* Quick Answer */}
            <div className="mb-12 max-w-[52rem]">
              <QuickAnswer dek={article.dek} />
            </div>

            {/* Mobile TOC */}
            {tocItems.length > 0 && (
              <div className="mb-10 max-w-[52rem] lg:hidden">
                <TableOfContents items={tocItems} />
              </div>
            )}

            {/* Two-column layout: content + sticky TOC */}
            <div className="flex gap-16 xl:gap-20">
              {/* Main content */}
              <div className="min-w-0 flex-1">
                <div className="prose-spaced space-y-14">
                  {contentSections.map((section) => (
                    <section
                      key={section.heading}
                      id={headingToId(section.heading)}
                      className="border-t border-ink/[0.08] pt-10 scroll-mt-24"
                    >
                      <h2 className="display-md text-ink">{section.heading}</h2>
                      <div className="mt-5 space-y-4">
                        {section.paragraphs.map((p, i) => (
                          <p key={i} className="text-[1.0625rem] leading-[1.78] text-ink/75">{p}</p>
                        ))}
                      </div>
                    </section>
                  ))}

                  {/* FAQ cards */}
                  {faqs.length > 0 && (
                    <div className="pt-4">
                      <ArticleFaqCards faqs={faqs} />
                    </div>
                  )}

                  {/* Related Articles */}
                  {relatedPosts.length > 0 && (
                    <RelatedArticles posts={relatedPosts} />
                  )}

                  {/* CTA */}
                  <ArticleCta />
                </div>
              </div>

              {/* Sticky TOC sidebar — desktop only */}
              {tocItems.length > 0 && (
                <aside className="hidden lg:block w-[240px] shrink-0">
                  <div className="sticky top-28">
                    <TableOfContents items={tocItems} />
                  </div>
                </aside>
              )}
            </div>
          </>
        ) : (
          /* Placeholder for legacy articles without blog-posts data */
          <div className="prose-spaced space-y-14 max-w-[52rem]">
            <p className="text-[1.125rem] leading-[1.8] text-ink/80 md:text-[1.1875rem]">
              A short, honest take. The parts locals talk about and the parts visitors miss. We update this as Albany changes.
            </p>
            {PLACEHOLDER_BODY.map((block) => (
              <section key={block.title} className="border-t border-ink/[0.08] pt-10">
                <p className="caption !text-ink/50">{block.eyebrow}</p>
                <h2 className="display-md mt-4 text-ink">{block.title}</h2>
                <p className="mt-5 text-[1.0625rem] leading-[1.78] text-ink/75">{block.body}</p>
              </section>
            ))}
            <ArticleCta />
          </div>
        )}
      </section>
    </main>
  );
}
