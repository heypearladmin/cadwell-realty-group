import Link from "next/link";
import type { FaqEntry } from "@/lib/faq-utils";

type Props = { faqs: FaqEntry[] };

export function ArticleFaqCards({ faqs }: Props) {
  if (faqs.length === 0) return null;

  return (
    <section aria-labelledby="faq-section-heading" className="border-t border-ink/[0.08] pt-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="tick" aria-hidden />
        <p className="eyebrow">Frequently Asked</p>
      </div>
      <h2 id="faq-section-heading" className="display-md text-ink">
        Questions &amp; Answers
      </h2>
      <ul className="mt-8 space-y-3" role="list">
        {faqs.map((faq) => (
          <li key={faq.slug}>
            <Link
              href={`/faq/${faq.slug}`}
              className="group flex items-center justify-between gap-6 rounded-2xl border border-ink/[0.08] bg-paper-deep px-6 py-4 transition-all duration-cinema ease-cinema hover:border-cadwell/25 hover:bg-paper hover:shadow-surface"
            >
              <span className="text-[0.9375rem] font-medium leading-snug text-ink transition-colors duration-cinema ease-cinema group-hover:text-cadwell">
                {faq.question}
              </span>
              <span
                aria-hidden
                className="shrink-0 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-cadwell opacity-70 transition-opacity group-hover:opacity-100"
              >
                Read →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
