import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { site } from "@/lib/site";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Cadwell Realty Group Terms & Conditions",
  description:
    "Terms governing the use of the Cadwell Realty Group website, services, SMS messaging, and AI-assisted communications.",
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", url: site.websiteUrl },
            { name: "Terms & Conditions", url: `${site.websiteUrl}/terms` },
          ]),
          webPageSchema({
            name: "Cadwell Realty Group Terms & Conditions",
            url: `${site.websiteUrl}/terms`,
            description: "Terms governing the use of the Cadwell Realty Group website, services, SMS messaging, and AI-assisted communications.",
          }),
        ]}
      />
      <LegalShell
      eyebrow="Legal"
      title="Cadwell Realty Group Terms & Conditions"
      description="The terms governing the use of the Cadwell Realty Group website, services, SMS messaging, and AI-assisted communications."
      effectiveDate="January 2026"
      sections={[
        {
          heading: "Acceptance of Terms",
          body: (
            <p>
              By accessing or using the Cadwell Realty Group website and services, you
              agree to be bound by these Terms &amp; Conditions. If you do not
              agree, please do not use the site or services.
            </p>
          ),
        },
        {
          heading: "Agreement to Terms & Conditions",
          body: (
            <p>
              Cadwell Realty Group provides real estate brokerage services in Albany,
              Oregon and the surrounding Linn &amp; Benton County area through
              Jason Cadwell, a licensed real estate agent powered by Jason
              Mitchell Group. Specific services, timelines, and fees are
              governed by the agreement signed at engagement.
            </p>
          ),
        },
        {
          heading: "SMS Communications",
          body: (
            <>
              <p>
                If you provide your mobile number and check the consent box on
                our contact form, you expressly consent to receive recurring
                text messages from Cadwell Realty Group at the phone number you
                provided. Messages may include appointment reminders, listing
                updates, market notifications, follow-ups, and marketing
                communications related to your inquiry or engagement.
              </p>
              <p>
                Message frequency varies. Message and data rates may apply
                depending on your carrier and plan.
              </p>
            </>
          ),
        },
        {
          heading: "AI-Assisted Calling",
          body: (
            <>
              <p>
                By providing your phone number, you also consent to receive
                phone calls from Cadwell Realty Group, including automated and
                AI-assisted calls, at the phone number you provided. These
                calls may be used to follow up on form submissions, schedule
                showings or consultations, share market updates, or provide
                other communications related to your inquiry.
              </p>
              <p>
                Where required by applicable law, AI-assisted calls will
                disclose that the caller is an automated or AI agent and
                offer the option to be transferred to a human representative
                or to opt out of further calls.
              </p>
            </>
          ),
        },
        {
          heading: "Opt-Out and Help (STOP / HELP)",
          body: (
            <>
              <p>
                You can opt out of SMS messages at any time by replying{" "}
                <strong>STOP</strong> to any text message we send. After
                replying STOP, you will receive one final confirmation
                message and no further SMS messages will be sent. To resume
                messaging, reply <strong>START</strong>.
              </p>
              <p>
                Reply <strong>HELP</strong> to any text message for help, or
                contact us at {site.email} or {site.phone}. You may opt out
                of phone calls at any time by telling our agent that you no
                longer wish to be called or by emailing us at {site.email}.
              </p>
            </>
          ),
        },
        {
          heading: "Message & Data Rates",
          body: (
            <>
              <p>
                Message and data rates may apply to any SMS messages
                exchanged with Cadwell Realty Group. Standard messaging rates from
                your wireless carrier apply. Cadwell Realty Group is not responsible
                for any charges incurred from your wireless carrier.
              </p>
              <p>
                Supported carriers include all major U.S. carriers. Carriers
                are not liable for delayed or undelivered messages.
              </p>
            </>
          ),
        },
        {
          heading: "Age Restriction",
          body: (
            <p>
              You must be 18 years or older to participate in our SMS
              program. By opting in to receive SMS messages from Cadwell
              Realty Group, you represent and warrant that you are at least
              18 years of age. If you are under 18, you may not opt in to or
              use our SMS program.
            </p>
          ),
        },
        {
          heading: "Acceptable Use",
          body: (
            <p>
              You agree not to use the website or services for any unlawful
              purpose, to attempt to disrupt the platform, to misuse access
              provided to you, or to submit false contact information or
              non-consensual third-party contact information through any
              Cadwell Realty Group form.
            </p>
          ),
        },
        {
          heading: "Intellectual Property",
          body: (
            <p>
              All Cadwell Realty Group branding, copy, photography, designs, and
              content are the property of Cadwell Realty Group or its licensors.
              Listings and MLS data are provided under the terms of the
              applicable multiple listing service.
            </p>
          ),
        },
        {
          heading: "Disclaimers",
          body: (
            <p>
              Cadwell Realty Group services and the website are provided on an as-is
              basis. Market commentary, neighborhood guides, and home
              valuations are informational and do not constitute legal,
              financial, or investment advice. Real estate outcomes depend on
              many factors beyond our control.
            </p>
          ),
        },
        {
          heading: "Limitation of Liability",
          body: (
            <p>
              To the fullest extent permitted by law, Cadwell Realty Group is not
              liable for any indirect, incidental, or consequential damages
              arising from use of the website or services, including any SMS
              or AI-assisted communications.
            </p>
          ),
        },
        {
          heading: "Privacy",
          body: (
            <p>
              Your use of Cadwell Realty Group services is also governed by our{" "}
              <a
                href="/policies"
                className="underline underline-offset-2 hover:text-cadwell"
              >
                Privacy Policy
              </a>
              , which describes how we collect, use, and protect information
              including SMS opt-in data.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about these terms can be sent to {site.email}, called
              to {site.phone}, or directed to {site.brokerage.fullName},{" "}
              {site.brokerage.address}.
            </p>
          ),
        },
      ]}
    />
    </>
  );
}
