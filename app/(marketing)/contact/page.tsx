"use client";

import { useState, FormEvent } from "react";
import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  WhatsAppIcon,
  ClockIcon,
} from "@/components/icons";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Get in Touch"
        title="Contact Letacom"
      />

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Contact Info */}
            <div>
              <SectionHeader
                eyebrow="Contact Information"
                title="Let's Start a Conversation"
                subtitle="Reach out to our team for enquiries, quotes, or partnership opportunities."
              />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-primary-50 text-primary-600 flex items-center justify-center">
                    <LocationIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-graphite-900">
                      Address
                    </h3>
                    <p className="text-sm text-graphite-500 mt-1">
                      47 Meadow Avenue
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-primary-50 text-primary-600 flex items-center justify-center">
                    <EmailIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-graphite-900">
                      Email
                    </h3>
                    <a
                      href="mailto:info@letacom.co.za"
                      className="text-sm text-primary-500 hover:text-primary-700 mt-1 inline-block"
                    >
                      info@letacom.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-primary-50 text-primary-600 flex items-center justify-center">
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-graphite-900">
                      Phone
                    </h3>
                    <p className="text-sm text-graphite-500 mt-1">
                      [PHONE_NUMBER_PLACEHOLDER]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-primary-50 text-primary-600 flex items-center justify-center">
                    <ClockIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-graphite-900">
                      Business Hours
                    </h3>
                    <p className="text-sm text-graphite-500 mt-1">
                      Mon–Fri 08:00–17:00 SAST
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 w-full h-56 bg-graphite-100 rounded flex items-center justify-center">
                <span className="text-sm text-graphite-400">
                  [Google Maps Embed Placeholder]
                </span>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-graphite-900 mb-6">
                Send Us a Message
              </h2>

              {status === "sent" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded text-sm text-green-800">
                  Thank you for your message. Our team will respond within one
                  business day.
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded text-sm text-red-800">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-graphite-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-graphite-300 rounded text-sm text-graphite-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-graphite-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-graphite-300 rounded text-sm text-graphite-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-graphite-700 mb-1"
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
                    className="w-full px-4 py-2.5 border border-graphite-300 rounded text-sm text-graphite-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-graphite-700 mb-1"
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
                    className="w-full px-4 py-2.5 border border-graphite-300 rounded text-sm text-graphite-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-6 py-3 bg-accent-500 text-white font-heading font-medium rounded hover:bg-accent-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section className="section-padding bg-graphite-50">
        <div className="container-site text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600 mb-4">
            <WhatsAppIcon size={28} />
          </div>
          <h2 className="font-heading font-bold text-2xl text-graphite-900">
            Prefer WhatsApp?
          </h2>
          <p className="mt-3 text-graphite-500 max-w-md mx-auto">
            Send us a message on WhatsApp for quick enquiries, quote requests,
            or to share technical specifications directly with our team.
          </p>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-green-500 text-white font-heading font-medium rounded hover:bg-green-600 transition-colors"
          >
            <WhatsAppIcon size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
