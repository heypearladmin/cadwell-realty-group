import type { ReactNode } from "react";

type Section = { heading: string; body: ReactNode };

type LegalShellProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  effectiveDate: string;
  sections: Section[];
};

/**
 * Editorial shell for legal pages (/terms, /policies).
 * Uses existing tokens: section-wrap, display-xl, dek, eyebrow, tick, hairline.
 * Server Component — no client interactivity required.
 */
export function LegalShell({
  eyebrow,
  title,
  description,
  effectiveDate,
  sections,
}: LegalShellProps) {
  return (
    <main id="main" className="bg-paper">
      <section className="section-wrap pb-section-y-md pt-40 md:pt-48 md:pb-section-y-lg">
        <div className="grid gap-12 md:grid-cols-12">
          <header className="md:col-span-12">
            <div className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">{eyebrow}</p>
            </div>
            <h1 className="display-xl mt-7 text-ink">{title}</h1>
            {description && <p className="dek mt-7">{description}</p>}
            <p className="caption mt-8">Effective {effectiveDate}</p>
            <div className="hairline mt-10" />
          </header>

          <article className="md:col-span-12 lg:col-span-9">
            <div className="flex flex-col gap-12">
              {sections.map((s) => (
                <section key={s.heading} className="flex flex-col gap-4">
                  <h2 className="display-md text-ink">{s.heading}</h2>
                  <div className="body-prose flex flex-col gap-4">
                    {s.body}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
