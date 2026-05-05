import { NextResponse } from "next/server";

// Simple in-memory rate limiting
const submissions = new Map<string, number[]>();
const RATE_LIMIT = 5; // max submissions
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = submissions.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_WINDOW);
  submissions.set(ip, recent);
  return recent.length >= RATE_LIMIT;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ success: true }); // Silent fail for bots
    }

    // Basic validation
    if (!body.email || !body.contactName || !body.industry || !body.itemDescription) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Record submission for rate limiting
    const timestamps = submissions.get(ip) || [];
    timestamps.push(Date.now());
    submissions.set(ip, timestamps);

    // Try sending via Resend if configured
    if (process.env.RESEND_API_KEY && process.env.RFQ_INBOX_EMAIL) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Letacom RFQ <onboarding@resend.dev>",
        to: process.env.RFQ_INBOX_EMAIL,
        subject: `New RFQ: ${body.companyName || "Unknown Company"} — ${body.industry}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1E5A96;">New Request for Quotation</h2>
            <hr style="border: 1px solid #E5E7EB;" />

            <h3 style="color: #2A2F36;">Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 4px 8px; font-weight: bold;">Name:</td><td style="padding: 4px 8px;">${body.contactName}</td></tr>
              <tr><td style="padding: 4px 8px; font-weight: bold;">Company:</td><td style="padding: 4px 8px;">${body.companyName}</td></tr>
              <tr><td style="padding: 4px 8px; font-weight: bold;">Email:</td><td style="padding: 4px 8px;">${body.email}</td></tr>
              <tr><td style="padding: 4px 8px; font-weight: bold;">Phone:</td><td style="padding: 4px 8px;">${body.phone}</td></tr>
              <tr><td style="padding: 4px 8px; font-weight: bold;">Country:</td><td style="padding: 4px 8px;">${body.country}</td></tr>
              <tr><td style="padding: 4px 8px; font-weight: bold;">Industry:</td><td style="padding: 4px 8px;">${body.industry}</td></tr>
            </table>

            <h3 style="color: #2A2F36;">Requirement</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 4px 8px; font-weight: bold;">Category:</td><td style="padding: 4px 8px;">${body.productCategory}</td></tr>
              <tr><td style="padding: 4px 8px; font-weight: bold;">Description:</td><td style="padding: 4px 8px;">${body.itemDescription}</td></tr>
              <tr><td style="padding: 4px 8px; font-weight: bold;">Quantity:</td><td style="padding: 4px 8px;">${body.estimatedQuantity || "Not specified"}</td></tr>
              <tr><td style="padding: 4px 8px; font-weight: bold;">Timeline:</td><td style="padding: 4px 8px;">${body.timeline}</td></tr>
              <tr><td style="padding: 4px 8px; font-weight: bold;">Budget:</td><td style="padding: 4px 8px;">${body.budgetRange || "Not specified"}</td></tr>
            </table>

            ${
              Array.isArray(body.serviceTypes) && body.serviceTypes.length > 0
                ? `<h3 style="color: #2A2F36;">Service Type</h3><ul style="color: #5A6470; padding-left: 20px;">${body.serviceTypes
                    .map((s: string) => `<li>${s}</li>`)
                    .join("")}</ul>`
                : ""
            }

            ${body.additionalNotes ? `<h3 style="color: #2A2F36;">Additional Notes</h3><p style="color: #5A6470;">${body.additionalNotes}</p>` : ""}

            <hr style="border: 1px solid #E5E7EB;" />
            <p style="color: #5A6470; font-size: 12px;">Submitted via Letacom website RFQ form</p>
          </div>
        `,
      });
    } else {
      // Log to console when email is not configured
      console.log("=== NEW RFQ SUBMISSION ===");
      console.log(JSON.stringify(body, null, 2));
      console.log("=== END RFQ ===");
      console.log(
        "Note: Set RESEND_API_KEY and RFQ_INBOX_EMAIL env vars to enable email delivery."
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("RFQ submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
