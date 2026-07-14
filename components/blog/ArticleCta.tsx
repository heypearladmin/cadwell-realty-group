import Link from "next/link";
import { site } from "@/lib/site";

export function ArticleCta() {
  return (
    <aside
      aria-label="Contact Jason Cadwell"
      className="rounded-2xl border border-ink/[0.08] bg-paper-deep px-7 py-8"
    >
      <p className="caption !text-ink/50 mb-3">Need guidance?</p>
      <h2 className="font-display text-[1.5rem] font-medium leading-tight text-ink">
        Have a specific question?
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-[1.72] text-ink/70">
        The honest answer is usually faster than a long article. Send a note and
        I&apos;ll reply within a business day.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Link href={site.contactPath} className="btn-primary">
          Send a note
          <span aria-hidden>→</span>
        </Link>
        <Link href={site.blogPath} className="editorial-link text-sm font-medium">
          More field notes
        </Link>
      </div>
    </aside>
  );
}
