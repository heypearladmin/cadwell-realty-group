"use client";

/**
 * A2P 10DLC compliant two-checkbox consent block.
 *
 * Checkbox 1 — non-marketing (transactional): property inquiries, valuations,
 *   consultation follow-ups. Optional but required to receive transactional SMS.
 * Checkbox 2 — marketing/promotional: listings, market updates, open houses.
 *   Optional; only shown if the business sends promotional messages.
 *
 * Privacy Policy / Terms links are rendered below the Submit button in
 * ContactForm, not here, per the carrier-compliant layout template.
 */

type ConsentBlockProps = {
  consentTransactional: boolean;
  onTransactionalChange: (value: boolean) => void;
  consentMarketing: boolean;
  onMarketingChange: (value: boolean) => void;
  idPrefix?: string;
  companyName?: string;
};

export function ConsentBlock({
  consentTransactional,
  onTransactionalChange,
  consentMarketing,
  onMarketingChange,
  idPrefix = "consent",
  companyName = "Cadwell Realty Group",
}: ConsentBlockProps) {
  return (
    <div className="grid gap-4">
      {/* Checkbox 1 — non-marketing / transactional */}
      <label
        htmlFor={`${idPrefix}-transactional`}
        className="flex cursor-pointer items-start gap-3"
      >
        <input
          id={`${idPrefix}-transactional`}
          name={`${idPrefix}-transactional`}
          type="checkbox"
          checked={consentTransactional}
          onChange={(e) => onTransactionalChange(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-ink/30 text-cadwell focus:ring-2 focus:ring-cadwell focus:ring-offset-2 focus:ring-offset-paper"
        />
        <span className="text-[0.875rem] leading-relaxed text-charcoal">
          I consent to receive non-marketing text messages from{" "}
          <strong>{companyName}</strong> regarding{" "}
          <strong>
            property inquiries, home valuations, and real estate consultations
          </strong>
          . Message frequency varies, message &amp; data rates may apply. Reply
          HELP for assistance, reply STOP to opt out.
        </span>
      </label>

      {/* Checkbox 2 — marketing / promotional */}
      <label
        htmlFor={`${idPrefix}-marketing`}
        className="flex cursor-pointer items-start gap-3"
      >
        <input
          id={`${idPrefix}-marketing`}
          name={`${idPrefix}-marketing`}
          type="checkbox"
          checked={consentMarketing}
          onChange={(e) => onMarketingChange(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-ink/30 text-cadwell focus:ring-2 focus:ring-cadwell focus:ring-offset-2 focus:ring-offset-paper"
        />
        <span className="text-[0.875rem] leading-relaxed text-charcoal">
          I consent to receive marketing text messages from{" "}
          <strong>{companyName}</strong> regarding{" "}
          <strong>
            new listings, market updates, and open house announcements
          </strong>
          . Message frequency varies, message &amp; data rates may apply. Reply
          HELP for assistance, reply STOP to opt out.
        </span>
      </label>
    </div>
  );
}
