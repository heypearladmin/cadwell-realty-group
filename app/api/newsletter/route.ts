import { NextResponse, type NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  email?: unknown;
};

export async function POST(req: NextRequest) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const { email } = body;

  if (
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const ghlApiKey = process.env.GHL_API_KEY;
  const ghlLocationId = process.env.GHL_LOCATION_ID;

  if (!ghlApiKey || !ghlLocationId) {
    console.warn("[newsletter] GHL env vars not set — logging submission.", { email: email.trim() });
    return NextResponse.json({ ok: true });
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
        email: email.trim(),
        locationId: ghlLocationId,
        source: "Website Newsletter Signup",
        tags: ["newsletter"],
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[newsletter] GHL error:", res.status, text);
      return NextResponse.json(
        { ok: false, error: "Could not save your email. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Could not save your email. Please try again." },
      { status: 502 },
    );
  }
}
