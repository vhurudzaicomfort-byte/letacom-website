import { NextResponse } from "next/server";
import { getListing } from "@/lib/catalogue";

// Recipient and provider keys come from environment variables only (never shipped to the browser).
// RESEND_API_KEY + RESEND_FROM -> Resend; otherwise falls back to FormSubmit (no key required).

const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000;
const DUPLICATE_WINDOW = 10 * 60 * 1000;
const hits = new Map<string, number[]>();
const recent = new Map<string, number>();

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^[+\d][\d\s()-]{6,19}$/;

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW);
  if (list.length >= RATE_LIMIT) {
    return NextResponse.json({ error: "Too many enquiries from this connection." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Spam checks: honeypot filled, or form submitted implausibly fast. Respond as success so bots learn nothing.
  if (clean(body.company_website, 200) || Number(body.elapsed) < 3000) {
    return NextResponse.json({ success: true });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 150);
  const phone = clean(body.phone, 20);
  const service = clean(body.service, 100);
  const message = clean(body.message, 5000);
  const companyName = clean(body.company, 120);
  const quantity = clean(body.quantity, 120);
  const contactMethod = ["Email", "Phone call", "WhatsApp"].includes(String(body.contactMethod)) ? String(body.contactMethod) : "Email";
  const product = getListing(clean(body.product, 80));

  if (name.length < 2 || !emailRe.test(email) || !phoneRe.test(phone) || !service || message.length < 10 || body.consent !== "yes") {
    return NextResponse.json({ error: "Please complete all required fields correctly." }, { status: 400 });
  }

  for (const [k, t] of recent) if (now - t > DUPLICATE_WINDOW) recent.delete(k);
  const fingerprint = `${email.toLowerCase()}|${product?.slug ?? service}|${message.slice(0, 200)}`;
  if (recent.has(fingerprint)) {
    return NextResponse.json({ success: true, duplicate: true });
  }

  const to = process.env.CONTACT_INBOX_EMAIL;
  if (!to) {
    console.error("CONTACT_INBOX_EMAIL is not configured");
    return NextResponse.json({ error: "Our enquiry system is temporarily unavailable." }, { status: 503 });
  }

  const submittedAt = new Intl.DateTimeFormat("en-ZA", { dateStyle: "full", timeStyle: "long", timeZone: "Africa/Johannesburg" }).format(now);
  const subject = product ? `Quote request: ${product.name} (${product.ref}) - ${name}` : `Website enquiry: ${service} - ${name}`;
  const rows: [string, string][] = [
    ["Full name", name],
    ["Company", companyName || "Not supplied"],
    ["Email", email],
    ["Contact number", phone],
    ["Preferred contact", contactMethod],
    ["Product / service", product ? `${product.name} (Ref. ${product.ref})` : service],
    ["Quantity / licence", quantity || "Not specified"],
    ["Submitted", `${submittedAt} (SAST)`],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMessage:\n${message}\n`;
  const html = `<div style="font-family:Arial,sans-serif;max-width:640px;color:#0a1628">
<h2 style="color:#1a6bff;margin:0 0 16px">New website enquiry</h2>
<table style="border-collapse:collapse;width:100%">${rows
    .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#4a5568;width:120px;vertical-align:top">${k}</td><td style="padding:6px 0;font-weight:600">${esc(v)}</td></tr>`)
    .join("")}</table>
<h3 style="margin:24px 0 8px">Message</h3>
<p style="white-space:pre-wrap;line-height:1.6;background:#f6f8fb;padding:16px;border-radius:8px">${esc(message)}</p>
<p style="color:#8896a6;font-size:12px">Sent from the enquiry form at letacom.co.za. Reply to this email to respond to the customer directly.</p></div>`;

  try {
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: process.env.RESEND_FROM || "Letacom Website <onboarding@resend.dev>",
        to,
        replyTo: email,
        subject,
        html,
        text,
      });
      if (error) throw new Error(error.message);
    } else {
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json", Referer: "https://letacom.co.za/contact", Origin: "https://letacom.co.za" },
        body: JSON.stringify({
          _subject: subject,
          _replyto: email,
          _template: "table",
          _captcha: "false",
          ...Object.fromEntries(rows),
          Message: message,
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
      if (!res.ok || String(json.success) !== "true") throw new Error(json.message || `FormSubmit ${res.status}`);
    }
  } catch (err) {
    console.error("Enquiry delivery failed:", err);
    return NextResponse.json({ error: "We could not send your enquiry right now." }, { status: 502 });
  }

  list.push(now);
  hits.set(ip, list);
  recent.set(fingerprint, now);
  return NextResponse.json({ success: true });
}
