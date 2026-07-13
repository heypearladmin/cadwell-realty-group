import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Message Received · Cadwell Group",
  description: "Your message has been received. Jason Cadwell will be in touch within one business day.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main id="main" className="bg-paper">
      <section className="section-wrap flex min-h-[70vh] flex-col items-center justify-center py-40 text-center">
        <div className="flex items-center gap-3">
          <span className="tick" aria-hidden />
          <p className="eyebrow">Message received</p>
        </div>
        <h1 className="display-xl mt-7 max-w-2xl text-ink">
          Thank you.
          <span className="italic-serif"> I&rsquo;ll be in touch.</span>
        </h1>
        <p className="dek mt-7 max-w-xl">
          Your note reached Jason directly. Expect a reply within one business day.
          For urgent matters, call any time.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href={site.phoneHref} className="btn-primary">
            Call {site.phone}
          </Link>
          <Link href={site.trackingPhoneHref} className="btn-ghost">
            {site.trackingPhone}
          </Link>
          <Link href="/" className="btn-ghost">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
