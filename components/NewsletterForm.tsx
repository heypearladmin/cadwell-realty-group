"use client";

import { useState } from "react";
import { newsletterCopy } from "@/lib/home-content";

type Status = "idle" | "submitting" | "ok" | "error";
type Tone = "light" | "dark";

/**
 * NewsletterForm
 * Pure client component. Submits to /api/newsletter when wired up.
 * No backend yet, so we resolve optimistically and surface a polite success state.
 */
export function NewsletterForm({
  variant = "footer",
  tone = "light",
}: {
  variant?: "footer" | "inline";
  tone?: Tone;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }
    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setStatus("ok");
      setMessage("You are on the list. Thanks for signing up.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const isDark = tone === "dark";

  return (
    <form onSubmit={onSubmit} noValidate className="w-full max-w-md">
      <label htmlFor={`newsletter-email-${variant}`} className="sr-only">
        Email address
      </label>
      <div
        className={`flex items-center gap-2 rounded-full p-1.5 transition-shadow duration-cinema ease-cinema ${
          isDark
            ? "bg-paper/[0.06] ring-1 ring-paper/15 focus-within:ring-cadwell/60"
            : "bg-paper ring-1 ring-ink/10 focus-within:ring-cadwell/40"
        }`}
      >
        <input
          id={`newsletter-email-${variant}`}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={newsletterCopy.placeholder}
          aria-label="Email address"
          className={`min-w-0 flex-1 bg-transparent px-4 py-2.5 text-[0.9375rem] focus:outline-none ${
            isDark
              ? "text-paper placeholder:text-paper/40"
              : "text-ink placeholder:text-ink/40"
          }`}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-cadwell px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-paper transition-[background-color,opacity] duration-cinema ease-cinema hover:bg-cadwell-deep disabled:opacity-60"
        >
          {status === "submitting" ? "Sending" : newsletterCopy.cta}
        </button>
      </div>
      <p
        className={`mt-3 text-[0.78rem] ${
          isDark ? "text-paper/55" : "text-ink/55"
        } ${status === "error" ? "!text-cadwell" : ""}`}
        role={status === "error" ? "alert" : undefined}
      >
        {status === "ok"
          ? message
          : status === "error"
          ? message
          : newsletterCopy.consentLine}
      </p>
    </form>
  );
}
