"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/lib/services";
import { company } from "@/lib/site";

type Status = { type: "idle" | "sending" | "success" | "error"; message?: string };
type Errors = Partial<Record<"name" | "email" | "phone" | "service" | "message" | "consent", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^[+\d][\d\s()-]{6,19}$/;

export function ContactForm() {
  const params = useSearchParams();
  const preset = params.get("service") ?? "";
  const initialService = services.some((s) => s.title === preset) || preset === "Digital product enquiry" ? preset : "";
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [errors, setErrors] = useState<Errors>({});
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.type === "sending") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const errs: Errors = {};
    if (!data.name || data.name.trim().length < 2) errs.name = "Please enter your full name.";
    if (!emailRe.test(data.email ?? "")) errs.email = "Please enter a valid email address.";
    if (data.phone && !phoneRe.test(data.phone.trim())) errs.phone = "Please enter a valid telephone number.";
    if (!data.service) errs.service = "Please select a service.";
    if (!data.message || data.message.trim().length < 10) errs.message = "Please describe your enquiry (at least 10 characters).";
    if (!data.consent) errs.consent = "Please confirm consent so we can respond to you.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus({ type: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, elapsed: Date.now() - startedAt.current }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      form.reset();
      setStatus({ type: "success", message: `Thank you. Your enquiry has been received and we will respond ${company.responseTime}.` });
    } catch (err) {
      setStatus({
        type: "error",
        message: `${err instanceof Error ? err.message : "Something went wrong."} Please try again, or email ${company.email}.`,
      });
    }
  }

  if (status.type === "success") {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 size={40} className="mx-auto text-emerald-600" aria-hidden />
        <h3 className="mt-4 text-xl font-bold text-ink">Enquiry sent</h3>
        <p className="mt-2 text-ink-muted">{status.message}</p>
        <button type="button" onClick={() => { startedAt.current = Date.now(); setStatus({ type: "idle" }); }} className="mt-6 text-sm font-semibold text-brand hover:text-brand-deep">
          Send another enquiry
        </button>
      </div>
    );
  }

  const field = "mt-1.5 block w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";
  const label = "text-sm font-semibold text-ink";
  const err = (k: keyof Errors) => errors[k] && <p id={`${k}-error`} className="mt-1 text-sm text-red-600">{errors[k]}</p>;
  const aria = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot: hidden from people, filled by bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Full name *</label>
          <input id="name" name="name" autoComplete="name" maxLength={100} className={field} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className={label}>Email address *</label>
          <input id="email" name="email" type="email" autoComplete="email" maxLength={150} className={field} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="phone" className={label}>Telephone <span className="font-normal text-ink-subtle">(optional)</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={20} className={field} {...aria("phone")} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="service" className={label}>Service *</label>
          <select id="service" name="service" defaultValue={initialService} className={field} {...aria("service")}>
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Digital product enquiry">Digital product enquiry</option>
            <option value="General enquiry">General enquiry</option>
          </select>
          {err("service")}
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>Your enquiry *</label>
        <textarea id="message" name="message" rows={6} maxLength={5000} placeholder="Briefly describe your project, goals and timeline." className={field} {...aria("message")} />
        {err("message")}
      </div>
      <div>
        <label className="flex gap-3 text-sm text-ink-muted">
          <input type="checkbox" name="consent" value="yes" className="mt-0.5 h-4 w-4 shrink-0 accent-brand" {...aria("consent")} />
          <span>
            I consent to Letacom (Pty) Ltd processing my details to respond to this enquiry, as described in the{" "}
            <a href="/privacy-policy" className="font-semibold text-brand underline-offset-2 hover:underline">Privacy Policy</a>.
          </span>
        </label>
        {err("consent")}
      </div>
      {status.type === "error" && (
        <p role="alert" className="flex gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle size={18} className="shrink-0" aria-hidden />
          {status.message}
        </p>
      )}
      <button
        type="submit"
        disabled={status.type === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-semibold text-white transition-colors hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status.type === "sending" ? <Loader2 size={18} className="animate-spin" aria-hidden /> : <Send size={18} aria-hidden />}
        {status.type === "sending" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
