"use client";

import { useState, useEffect } from "react";

export type TocItem = {
  id: string;
  heading: string;
};

type Props = { items: TocItem[] };

export function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-15% 0% -70% 0%" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents">
      {/* Mobile — collapsible */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          className="flex w-full items-center justify-between rounded-xl border border-ink/[0.08] bg-paper-deep px-5 py-3.5 text-left transition-colors hover:border-ink/20"
        >
          <span className="text-[0.875rem] font-medium text-ink">On this page</span>
          <span
            aria-hidden
            className={`text-ink/50 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          >
            ▾
          </span>
        </button>
        {open && (
          <ul className="mt-1.5 rounded-xl border border-ink/[0.08] bg-paper-deep px-5 py-4 space-y-3">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block text-[0.875rem] leading-snug text-ink/60 transition-colors hover:text-cadwell"
                >
                  {item.heading}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop — sticky sidebar */}
      <div className="hidden lg:block">
        <p className="caption !text-ink/50 mb-4">On this page</p>
        <ul className="space-y-3 border-l border-ink/[0.08] pl-4">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block text-[0.8125rem] leading-snug transition-colors duration-cinema ease-cinema ${
                  activeId === item.id
                    ? "text-cadwell font-medium"
                    : "text-ink/50 hover:text-ink"
                }`}
              >
                {item.heading}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
