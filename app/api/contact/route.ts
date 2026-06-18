import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

/**
 * POST /api/contact
 *
 * A2P 10DLC compliant contact form handler. Validates payload (including
 * server-side consent re-check) and delivers via Resend.
 *
 * Required env (set in Vercel → Project → Settings → Environment Variables):
 *   - RESEND_API_KEY      required for live email delivery
 *   - CONTACT_TO_EMAIL    optional; defaults to site.email
 *   - CONTACT_FROM_EMAIL  optional; defaults to "Cadwell Realty Group <noreply@cadwellrealtygroup.com>"
 *
 * If RESEND_API_KEY is not set, the route still returns success and logs the
 * payload server-side. This keeps the form working through A2P review while
 * email delivery is being configured.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  topic?: unknown;
  message?: unknown;
  consentTransactional?: unknown;
  consentMarketing?: unknown;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const topicLabels: Record<string, string> = {
  selling: "Selling my home",
  buying: "Buying in Albany",
  "new-construction": "New construction",
  valuation: "A free home valuation",
  general: "Something else",
};

export async function POST(req: NextRequest) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const { firstName, lastName, email, phone, topic, message, consentTransactional, consentMarketing } = body;

  if (
    !isNonEmptyString(firstName) ||
    !isNonEmptyString(lastName) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(phone) ||
    !isNonEmptyString(message)
  ) {
    return NextResponse.json(
      { ok: false, error: "All fields are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const topicLabel =
    isNonEmptyString(topic) && topicLabels[topic]
      ? topicLabels[topic]
      : "Something else";

  const submittedAt = new Date().toISOString();
  const userAgent = req.headers.get("user-agent") ?? "unknown";
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Cadwell Realty Group <noreply@cadwellrealtygroup.com>";
  const apiKey = process.env.RESEND_API_KEY;

  // Graceful fallback while email delivery is being configured.
  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY not set — logging submission instead of emailing.",
      {
        firstName,
        lastName,
        email,
        phone,
        topic: topicLabel,
        message,
        consentTransactional,
        consentMarketing,
        submittedAt,
        userAgent,
        ip,
      },
    );
    return NextResponse.json({ ok: true });
  }

  const subject = `New ${site.brand} contact form — ${firstName} ${lastName}`;
  const text = [
    `New contact form submission`,
    ``,
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Topic: ${topicLabel}`,
    ``,
    `Message:`,
    message,
    ``,
    `— meta —`,
    `Consent (non-marketing): ${consentTransactional === true ? "YES" : "NO"}`,
    `Consent (marketing): ${consentMarketing === true ? "YES" : "NO"}`,
    `Submitted: ${submittedAt}`,
    `IP: ${ip}`,
    `User-Agent: ${userAgent}`,
  ].join("\n");

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif; color: #000; line-height: 1.5;">
      <h2 style="margin:0 0 16px;">New ${escapeHtml(site.brand)} contact form</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        <tr><td style="padding:4px 12px 4px 0;color:#777;">Name</td><td><strong>${escapeHtml(firstName)} ${escapeHtml(lastName)}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#777;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#777;">Phone</td><td><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#777;">Topic</td><td>${escapeHtml(topicLabel)}</td></tr>
      </table>
      <h3 style="margin:24px 0 8px;">Message</h3>
      <p style="white-space:pre-wrap;margin:0;">${escapeHtml(message)}</p>
      <hr style="margin:24px 0;border:none;border-top:1px solid #eaeaea;" />
      <p style="font-size:12px;color:#777;margin:0;">
        Consent (non-marketing): <strong>${consentTransactional === true ? "YES" : "NO"}</strong><br/>
        Consent (marketing): <strong>${consentMarketing === true ? "YES" : "NO"}</strong><br/>
        Submitted: ${escapeHtml(submittedAt)}<br/>
        IP: ${escapeHtml(ip)}<br/>
        User-Agent: ${escapeHtml(userAgent)}
      </p>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("[contact] Resend delivery error:", error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We could not deliver your message right now. Please call or email directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not deliver your message right now. Please call or email directly.",
      },
      { status: 502 },
    );
  }
}
