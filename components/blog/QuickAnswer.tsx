type Props = { dek: string };

export function QuickAnswer({ dek }: Props) {
  return (
    <aside
      aria-label="Quick answer"
      className="rounded-2xl border border-ink/[0.08] bg-paper-deep px-7 py-6"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="tick" aria-hidden />
        <p className="eyebrow">Quick Answer</p>
      </div>
      <p className="text-[1.0625rem] leading-[1.72] text-ink/85">{dek}</p>
    </aside>
  );
}
