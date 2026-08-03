"use client";

import { useState, type FormEvent } from "react";

type MagnetId =
  | "buyer-checklist"
  | "seller-prep-guide"
  | "neighborhood-comparison"
  | "market-report-2026";

type Props = {
  magnet: MagnetId;
  title: string;
  description: string;
  ctaLabel?: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export function LeadMagnetForm({
  magnet,
  title,
  description,
  ctaLabel = "Get the free guide",
}: Props) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, magnet }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        file?: string;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      // Trigger download
      if (data.file) {
        const a = document.createElement("a");
        a.href = data.file;
        a.download = "";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-cadwell/30 bg-cadwell/[0.04] px-7 py-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">On its way</p>
        </div>
        <p className="font-display text-[1.25rem] font-medium text-ink leading-snug">
          Your download is starting now.
        </p>
        <p className="mt-3 text-[0.9rem] text-ink/60 leading-relaxed">
          If it doesn&apos;t start automatically, check that your browser allows downloads from this site.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-ink/[0.08] bg-paper-deep px-7 py-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="tick" aria-hidden />
        <p className="eyebrow">Free download</p>
      </div>
      <p className="font-display text-[1.25rem] font-medium text-ink leading-snug mb-2">
        {title}
      </p>
      <p className="text-[0.9rem] text-ink/60 leading-relaxed mb-6">{description}</p>

      <form onSubmit={onSubmit} noValidate className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor={`lm-name-${magnet}`} className="caption">
            First name <span className="text-cadwell">*</span>
          </label>
          <input
            id={`lm-name-${magnet}`}
            type="text"
            autoComplete="given-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Your first name"
            className="rounded-xl border border-ink/15 bg-paper px-4 py-3 text-[0.95rem] text-ink focus:border-cadwell focus:outline-none"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor={`lm-email-${magnet}`} className="caption">
            Email address <span className="text-cadwell">*</span>
          </label>
          <input
            id={`lm-email-${magnet}`}
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="rounded-xl border border-ink/15 bg-paper px-4 py-3 text-[0.95rem] text-ink focus:border-cadwell focus:outline-none"
          />
        </div>

        {status === "error" && (
          <p role="alert" className="text-[0.85rem] text-cadwell">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Preparing download…" : ctaLabel}
        </button>

        <p className="text-[0.75rem] text-ink/40 text-center leading-relaxed">
          Free — no spam. Jason may follow up about your Albany real estate questions.
        </p>
      </form>
    </div>
  );
}
