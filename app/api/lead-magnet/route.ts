import { NextResponse, type NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const MAGNETS: Record<string, { label: string; tag: string; file: string }> = {
  "buyer-checklist": {
    label: "Albany Home Buyer's Checklist",
    tag: "lead-magnet-buyer-checklist",
    file: "/downloads/albany-home-buyer-checklist.pdf",
  },
  "seller-prep-guide": {
    label: "Albany Seller's Prep Guide",
    tag: "lead-magnet-seller-prep",
    file: "/downloads/albany-seller-prep-guide.pdf",
  },
  "neighborhood-comparison": {
    label: "Albany Neighborhood Comparison Guide",
    tag: "lead-magnet-neighborhood",
    file: "/downloads/albany-neighborhood-comparison.pdf",
  },
  "market-report-2026": {
    label: "Albany Market Report 2026",
    tag: "lead-magnet-market-report",
    file: "/downloads/albany-market-report-2026.pdf",
  },
};

type Payload = {
  firstName?: unknown;
  email?: unknown;
  magnet?: unknown;
};

export async function POST(req: NextRequest) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { firstName, email, magnet } = body;

  if (typeof firstName !== "string" || firstName.trim().length === 0) {
    return NextResponse.json({ ok: false, error: "First name is required." }, { status: 400 });
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }
  if (typeof magnet !== "string" || !MAGNETS[magnet]) {
    return NextResponse.json({ ok: false, error: "Invalid resource." }, { status: 400 });
  }

  const { label, tag, file } = MAGNETS[magnet];
  const ghlApiKey = process.env.GHL_API_KEY;
  const ghlLocationId = process.env.GHL_LOCATION_ID;

  if (!ghlApiKey || !ghlLocationId) {
    console.warn("[lead-magnet] GHL env vars not set — logging submission.", {
      firstName: firstName.trim(), email: email.trim(), magnet,
    });
    return NextResponse.json({ ok: true, file });
  }

  try {
    const res = await fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ghlApiKey}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName.trim(),
        email: email.trim(),
        locationId: ghlLocationId,
        source: `Lead Magnet — ${label}`,
        tags: [tag, "lead-magnet"],
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[lead-magnet] GHL error:", res.status, text);
      // Still return the file — don't punish the user for a GHL error
    }
  } catch (err) {
    console.error("[lead-magnet] GHL unexpected error:", err);
  }

  return NextResponse.json({ ok: true, file });
}
