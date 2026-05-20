import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Cadwell Group Privacy Policy — how we collect, use, and protect your information, including SMS opt-in data.",
  alternates: { canonical: "/policies" },
  robots: { index: true, follow: true },
};

export default function PoliciesPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Privacy Policy"
      description="A clear, plain-language summary of how Cadwell Group collects, uses, and protects information — including SMS opt-in data for A2P 10DLC compliance."
      effectiveDate="January 2026"
      sections={[
        {
          heading: "Overview",
          body: (
            <>
              <p>
                Cadwell Group (&ldquo;Cadwell Group,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a real estate
                brokerage serving Albany, Oregon and the surrounding Linn
                &amp; Benton County area, led by Jason Cadwell and powered
                by Jason Mitchell Group. This Privacy Policy describes how
                we collect and use information across our website at{" "}
                {site.websiteUrl}, our communications, and our client
                engagements.
              </p>
              <p>
                We aim to collect the least information necessary to deliver
                our services, and we never sell personal information.
              </p>
            </>
          ),
        },
        {
          heading: "Information We Collect",
          body: (
            <>
              <p>
                We collect information you provide directly, such as your
                first name, last name, email address, phone number, the
                topic you select on our contact form, and the contents of
                your message when you submit a form, request a home
                valuation, or become a client.
              </p>
              <p>
                We also collect limited technical information automatically,
                such as device, browser, IP address, and usage data, to
                improve site performance and security.
              </p>
            </>
          ),
        },
        {
          heading: "How We Use Information",
          body: (
            <>
              <p>
                We use the information you provide to respond to your
                inquiries, deliver real estate services, send transactional
                communications (showings, listings, document updates), and —
                when you have given consent — to send marketing
                communications by email, SMS, or phone, including
                AI-assisted calls.
              </p>
              <p>We do not sell personal information to third parties.</p>
            </>
          ),
        },
        {
          heading: "SMS & Phone Communications",
          body: (
            <>
              <p>
                By providing your phone number and checking the consent box
                on our contact form, you expressly consent to receive
                recurring text messages and phone calls from Cadwell Group,
                including automated calls and AI-assisted communications,
                at the phone number you provided.
              </p>
              <p>
                Message frequency varies. Message and data rates may apply.
                You can opt out of SMS at any time by replying{" "}
                <strong>STOP</strong> to any text message. Reply{" "}
                <strong>HELP</strong> for help, or contact us at{" "}
                {site.email}.
              </p>
              <p>
                <strong>
                  No mobile information will be shared with third
                  parties/affiliates for marketing/promotional purposes. All
                  other categories exclude text messaging originator opt-in
                  data and consent; this information will not be shared with
                  any third parties.
                </strong>
              </p>
            </>
          ),
        },
        {
          heading: "Cookies and Analytics",
          body: (
            <p>
              Our website uses essential cookies and privacy-respecting
              analytics to understand site performance. You can configure
              your browser to refuse cookies, though this may affect site
              functionality.
            </p>
          ),
        },
        {
          heading: "How We Protect Information",
          body: (
            <p>
              We use industry-standard administrative, technical, and
              physical safeguards to protect personal information. No method
              of transmission or storage is 100% secure, but we continually
              work to maintain reasonable safeguards.
            </p>
          ),
        },
        {
          heading: "Your Rights",
          body: (
            <p>
              You may request access to, correction of, or deletion of your
              personal information at any time. To opt out of SMS, reply
              STOP to any text message. To opt out of marketing email, use
              the unsubscribe link in any marketing message. For any other
              request, contact us at {site.email} and we will respond
              promptly.
            </p>
          ),
        },
        {
          heading: "Children's Privacy",
          body: (
            <p>
              Cadwell Group&rsquo;s services are not directed to children
              under 13, and we do not knowingly collect personal information
              from children under 13.
            </p>
          ),
        },
        {
          heading: "Changes to This Policy",
          body: (
            <p>
              We may update this Privacy Policy from time to time. Material
              changes will be reflected by updating the &ldquo;Effective&rdquo;
              date above and, where appropriate, by additional notice.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about this Privacy Policy can be sent to{" "}
              {site.email}, called to {site.phone}, or mailed to{" "}
              {site.brokerage.fullName}, {site.brokerage.address}.
            </p>
          ),
        },
      ]}
    />
  );
}
