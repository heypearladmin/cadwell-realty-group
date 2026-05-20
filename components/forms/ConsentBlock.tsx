"use client";

import Link from "next/link";

/**
 * A2P 10DLC / Twilio / GoHighLevel compliant consent block.
 *
 * Renders the verbatim SMS + AI calling consent disclosure and an unchecked,
 * required consent checkbox. Used inside ContactForm. Reusable for any future
 * lead-capture form so the legal language is centralized.
 *
 * The disclosure language is intentionally verbatim. Do not paraphrase without
 * legal review — registrars (Twilio, GHL) check for exact phrasing.
 */

type ConsentBlockProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  /** Optional id override (useful when multiple forms share a page). */
  id?: string;
  className?: string;
  /** Brand name interpolated into the disclosure. */
  companyName?: string;
};

export function ConsentBlock({
  checked,
  onChange,
  id = "consent",
  className,
  companyName = "Cadwell Group",
}: ConsentBlockProps) {
  return (
    <div
      className={`rounded-2xl border border-ink/[0.08] bg-paper-deep/60 p-5 sm:p-6 ${className ?? ""}`}
    >
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3">
        <input
          id={id}
          name={id}
          type="checkbox"
          required
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-describedby={`${id}-description`}
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-ink/30 text-cadwell focus:ring-2 focus:ring-cadwell focus:ring-offset-2 focus:ring-offset-paper"
        />
        <span
          id={`${id}-description`}
          className="text-[0.875rem] leading-relaxed text-charcoal"
        >
          I agree to receive text messages and phone calls from {companyName}{" "}
          at the phone number provided. Message frequency varies. Message &amp;
          data rates may apply. Reply STOP to unsubscribe. Reply HELP for help.
          By submitting this form, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-2 transition-colors hover:text-cadwell"
          >
            Terms &amp; Conditions
          </Link>{" "}
          and{" "}
          <Link
            href="/policies"
            className="underline underline-offset-2 transition-colors hover:text-cadwell"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      <p className="mt-4 pl-7 text-[0.78rem] leading-relaxed text-muted">
        By providing your phone number, you consent to receive calls and text
        messages, including automated calls and AI-assisted communications,
        from {companyName}.
      </p>
    </div>
  );
}
