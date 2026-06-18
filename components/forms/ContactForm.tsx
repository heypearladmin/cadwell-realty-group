"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ConsentBlock } from "@/components/forms/ConsentBlock";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

type Status =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success" }
  | { type: "error"; message: string };

const initial: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  topic: "selling",
  message: "",
};

/**
 * A2P 10DLC compliant contact form for Cadwell Realty Group.
 *
 * Required: First name, Last name, Email, Phone, Message, Consent checkbox.
 * Submit disabled until consent is checked. Posts JSON to /api/contact, which
 * re-validates consent server-side and delivers via Resend.
 */
export function ContactForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [consentTransactional, setConsentTransactional] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const submitting = status.type === "submitting";

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, consentTransactional, consentMarketing }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        throw new Error(
          data.error || "Something went wrong. Please try again.",
        );
      }

      setStatus({ type: "success" });
      setValues(initial);
      setConsentTransactional(false);
      setConsentMarketing(false);
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.",
      });
    }
  }

  if (status.type === "success") {
    return (
      <div
        role="status"
        className="rounded-3xl border border-ink/[0.08] bg-paper-deep/60 p-8 md:p-10"
      >
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Note received</p>
        </div>
        <p className="display-md mt-6 text-ink">
          Thank you. I&rsquo;ll be in touch.
        </p>
        <p className="dek mt-5">
          Your note reached Jason directly. Expect a reply within one business
          day. For urgent matters, you can call any time.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-6 rounded-3xl border border-ink/[0.08] bg-paper-deep/60 p-8 md:p-10"
      aria-labelledby="contact-form-heading"
    >
      <h2 id="contact-form-heading" className="sr-only">
        Send Jason a note
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="firstName"
          label="First name"
          autoComplete="given-name"
          value={values.firstName}
          onChange={(v) => update("firstName", v)}
          required
        />
        <Field
          id="lastName"
          label="Last name"
          autoComplete="family-name"
          value={values.lastName}
          onChange={(v) => update("lastName", v)}
          required
        />
      </div>

      <Field
        id="email"
        label="Email"
        type="email"
        autoComplete="email"
        inputMode="email"
        value={values.email}
        onChange={(v) => update("email", v)}
        required
      />

      <Field
        id="phone"
        label="Phone number"
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        placeholder="(555) 123-4567"
        value={values.phone}
        onChange={(v) => update("phone", v)}
        required
      />

      <div className="grid gap-2">
        <label htmlFor="topic" className="caption">
          I&apos;d like to talk about
        </label>
        <select
          id="topic"
          name="topic"
          value={values.topic}
          onChange={(e) => update("topic", e.target.value)}
          className="rounded-xl border border-ink/15 bg-paper px-4 py-3 text-[0.95rem] text-ink shadow-inset-frame focus:border-cadwell focus:outline-none"
        >
          <option value="selling">Selling my home</option>
          <option value="buying">Buying in Albany</option>
          <option value="new-construction">New construction</option>
          <option value="valuation">A free home valuation</option>
          <option value="general">Something else</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="caption">
          Message <span className="text-cadwell">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className="rounded-xl border border-ink/15 bg-paper px-4 py-3 text-[0.95rem] text-ink shadow-inset-frame focus:border-cadwell focus:outline-none"
        />
      </div>

      <ConsentBlock
        consentTransactional={consentTransactional}
        onTransactionalChange={setConsentTransactional}
        consentMarketing={consentMarketing}
        onMarketingChange={setConsentMarketing}
      />

      {status.type === "error" && (
        <div
          role="alert"
          className="rounded-2xl border border-cadwell/30 bg-cadwell/[0.06] px-4 py-3 text-[0.875rem] text-cadwell-deep"
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        aria-disabled={submitting}
        className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-cadwell"
      >
        {submitting ? "Sending…" : "Send note"}
      </button>

      <p className="text-center text-[0.8rem] text-muted">
        <Link href="/policies" className="underline underline-offset-2 transition-colors hover:text-cadwell">
          Privacy Policy
        </Link>
        {" | "}
        <Link href="/terms" className="underline underline-offset-2 transition-colors hover:text-cadwell">
          Terms and Conditions
        </Link>
      </p>
    </form>
  );
}

/* ----------------------------- Field primitive ---------------------------- */

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "numeric" | "search" | "url";
};

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
  autoComplete,
  inputMode,
}: FieldProps) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="caption">
        {label} {required && <span className="text-cadwell">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-ink/15 bg-paper px-4 py-3 text-[0.95rem] text-ink shadow-inset-frame focus:border-cadwell focus:outline-none"
      />
    </div>
  );
}
