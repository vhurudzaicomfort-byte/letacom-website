"use client";

import { useState, FormEvent } from "react";
import { images } from "@/lib/images";
import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  WhatsAppIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@/components/icons";

const PHONE_E164 = "+27630769938";
const WA_NUMBER = "27630769938";
const ADDRESS_TEXT =
  "47 Meadow Avenue, Equestria 0184, Pretoria, South Africa";
const ADDRESS_QUERY =
  "47+Meadow+Avenue,+Equestria+0184,+Pretoria,+South+Africa";

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Letacom South Africa",
  image:
    (process.env.NEXT_PUBLIC_SITE_URL || "https://letacom.co.za") +
    "/og-logo.png",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://letacom.co.za",
  telephone: PHONE_E164,
  email: "hello@letacom.co.za",
  address: {
    "@type": "PostalAddress",
    streetAddress: "47 Meadow Avenue",
    addressLocality: "Equestria",
    addressRegion: "Pretoria",
    postalCode: "0184",
    addressCountry: "ZA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "13:00",
    },
  ],
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (form.website) return; // honeypot
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "", website: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LOCAL_BUSINESS_JSONLD),
        }}
      />

      <Hero
        variant="inner"
        eyebrow="Get in Touch"
        title="Talk to our team"
        subtitle="Whether you're scoping a procurement project, planning a new system rollout, or looking for a long-term supply partner — we're ready to help."
        backgroundImage={images.heroContact}
      />

      {/* Contact Section — two columns */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-[5fr_6fr] gap-10 lg:gap-12">
            {/* Left — Contact details */}
            <div>
              <SectionHeader
                eyebrow="Contact Information"
                title="Reach us directly"
                subtitle="One number, multiple inboxes. Reach us by phone, WhatsApp, or email — whichever fits how you work."
              />

              <ul className="space-y-6">
                <ContactBlock
                  icon={<LocationIcon size={20} />}
                  label="Visit us"
                >
                  <p className="text-sm text-graphite-700">{ADDRESS_TEXT}</p>
                </ContactBlock>

                <ContactBlock icon={<PhoneIcon size={20} />} label="Call us">
                  <a
                    href={`tel:${PHONE_E164}`}
                    className="text-sm text-primary-700 hover:text-primary-500 font-medium"
                  >
                    +27 63 076 9938
                  </a>
                </ContactBlock>

                <ContactBlock
                  icon={<WhatsAppIcon size={20} />}
                  label="WhatsApp / SMS"
                >
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                      "Hi Letacom, I'd like to discuss..."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-700 hover:text-primary-500 font-medium"
                  >
                    +27 63 076 9938
                  </a>
                </ContactBlock>

                <ContactBlock icon={<EmailIcon size={20} />} label="Email us">
                  <a
                    href="mailto:hello@letacom.co.za"
                    className="text-sm text-primary-700 hover:text-primary-500 font-medium"
                  >
                    hello@letacom.co.za
                  </a>
                  <ul className="mt-2 space-y-1 text-xs text-graphite-500">
                    <li>
                      <a href="mailto:sales@letacom.co.za" className="hover:text-primary-700">
                        sales@letacom.co.za
                      </a>{" "}
                      — sales / RFQs
                    </li>
                    <li>
                      <a href="mailto:support@letacom.co.za" className="hover:text-primary-700">
                        support@letacom.co.za
                      </a>{" "}
                      — technical & after-sales
                    </li>
                    <li>
                      <a href="mailto:info@letacom.co.za" className="hover:text-primary-700">
                        info@letacom.co.za
                      </a>{" "}
                      — general
                    </li>
                  </ul>
                </ContactBlock>

                <ContactBlock
                  icon={<ClockIcon size={20} />}
                  label="Business hours"
                >
                  <ul className="text-sm text-graphite-700 space-y-1">
                    <li>Monday – Friday: 08:00 – 17:00 SAST</li>
                    <li>Saturday: 09:00 – 13:00</li>
                    <li>Sunday &amp; Public Holidays: Closed</li>
                  </ul>
                </ContactBlock>
              </ul>

              {/* Three primary CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${PHONE_E164}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border border-graphite-300 text-graphite-900 font-heading font-medium rounded hover:border-primary-500 hover:text-primary-700 transition-colors"
                >
                  <PhoneIcon size={18} />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                    "Hi Letacom, I'd like to discuss..."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border border-graphite-300 text-graphite-900 font-heading font-medium rounded hover:border-primary-500 hover:text-primary-700 transition-colors"
                >
                  <WhatsAppIcon size={18} />
                  WhatsApp Us
                </a>
                <a
                  href="/request-quote"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent-500 text-white font-heading font-medium rounded hover:bg-accent-600 transition-colors"
                >
                  Send Inquiry
                  <ArrowRightIcon size={16} />
                </a>
              </div>
            </div>

            {/* Right — Map */}
            <div>
              <div className="rounded overflow-hidden border border-graphite-300/40">
                <iframe
                  src={`https://www.google.com/maps?q=${ADDRESS_QUERY}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "480px", display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Letacom South Africa — 47 Meadow Avenue, Equestria, Pretoria"
                  aria-label="Map showing Letacom office at 47 Meadow Avenue, Equestria, Pretoria"
                />
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${ADDRESS_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary-700 hover:text-primary-500"
              >
                Get Directions
                <ArrowRightIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* General Contact Form */}
      <section className="section-padding bg-graphite-100">
        <div className="container-site max-w-2xl">
          <SectionHeader
            eyebrow="Send Us a Message"
            title="Quick general enquiry"
            subtitle="For procurement requirements with specifications and timelines, please use the Request a Quote form. For general questions, this is the fastest way to reach our team."
            centered
          />

          {status === "sent" && (
            <div className="mb-6 p-4 bg-success/10 border border-success/30 rounded text-sm text-success">
              Thank you for your message. Our team will respond within one
              business day. For urgent enquiries, call or WhatsApp us on +27 63
              076 9938.
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 p-4 bg-danger/10 border border-danger/30 rounded text-sm text-danger">
              Something went wrong. Please try again, or email us directly at{" "}
              <a href="mailto:hello@letacom.co.za" className="underline">
                hello@letacom.co.za
              </a>
              .
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 lg:p-8 border border-graphite-300/40 rounded">
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-graphite-700 mb-1.5"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-sm border border-graphite-300 rounded text-graphite-900 placeholder:text-graphite-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-graphite-700 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-sm border border-graphite-300 rounded text-graphite-900 placeholder:text-graphite-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-graphite-700 mb-1.5"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                className="w-full px-3 py-2.5 text-sm border border-graphite-300 rounded text-graphite-900 placeholder:text-graphite-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-graphite-700 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-3 py-2.5 text-sm border border-graphite-300 rounded text-graphite-900 placeholder:text-graphite-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 resize-y"
                placeholder="Tell us a little about what you need."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 text-white font-heading font-medium rounded hover:bg-accent-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              {status !== "sending" && <ArrowRightIcon size={16} />}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function ContactBlock({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded bg-primary-900/5 text-primary-700 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-heading font-medium text-graphite-900 mb-1">
          {label}
        </h3>
        {children}
      </div>
    </li>
  );
}
