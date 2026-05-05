import { NextResponse } from "next/server";

const submissions = new Map<string, number[]>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000;

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
        { error: "Too many requests." },
        { status: 429 }
      );
    }

    const body = await request.json();

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const timestamps = submissions.get(ip) || [];
    timestamps.push(Date.now());
    submissions.set(ip, timestamps);

    const inboxEmail =
      process.env.CONTACT_INBOX_EMAIL || process.env.RFQ_INBOX_EMAIL;

    if (process.env.RESEND_API_KEY && inboxEmail) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Letacom Contact <onboarding@resend.dev>",
        to: inboxEmail,
        subject: `Contact: ${body.subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1E5A96;">New Contact Message</h2>
            <hr style="border: 1px solid #E5E7EB;" />
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Subject:</strong> ${body.subject}</p>
            <h3 style="color: #2A2F36;">Message</h3>
            <p style="color: #5A6470; white-space: pre-wrap;">${body.message}</p>
            <hr style="border: 1px solid #E5E7EB;" />
            <p style="color: #5A6470; font-size: 12px;">Submitted via Letacom website contact form</p>
          </div>
        `,
      });
    } else {
      console.log("=== NEW CONTACT MESSAGE ===");
      console.log(JSON.stringify(body, null, 2));
      console.log("=== END CONTACT ===");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
