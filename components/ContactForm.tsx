"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Package, Send } from "lucide-react";
import { services } from "@/lib/services";
import { getListing } from "@/lib/catalogue";
import { allSolutions } from "@/lib/solutions";
import { company } from "@/lib/site";

type Status = { type: "idle" | "sending" | "success" | "error"; message?: string };
type Field = "name" | "email" | "phone" | "service" | "message" | "consent";
type Errors = Partial<Record<Field, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^[+\d][\d\s()-]{6,19}$/;
const MARKETPLACE = "Marketplace product or service";

export function ContactForm() {
  const params = useSearchParams();
  const product = getListing(params.get("product") ?? "");
  const preset = params.get("service") ?? "";
  const initialService = product ? MARKETPLACE : services.some((s) => s.title === preset) || allSolutions.some((s) => s.title === preset) || preset === "Digital product enquiry" ? preset : "";
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
    if (!data.phone || !phoneRe.test(data.phone.trim())) errs.phone = "Please enter a valid contact number.";
    if (!data.service) errs.service = "Please select a product or service.";
    if (!data.message || data.message.trim().length < 10) errs.message = "Please describe your requirements (at least 10 characters).";
    if (!data.consent) errs.consent = "Please confirm consent so we can respond to you.";
    setErrors(errs);
    if (Object.keys(errs).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }

    setStatus({ type: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, product: product?.slug ?? "", elapsed: Date.now() - startedAt.current }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      if (json.relay) {
        const relay = await fetch(json.relay.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(json.relay.payload),
        });
        const r = await relay.json().catch(() => ({}));
        if (!relay.ok || String(r.success) !== "true") throw new Error("We could not send your enquiry right now.");
      }
      form.reset();
      setStatus({ type: "success", message: `Thank you. Your enquiry${product ? ` about ${product.name} (Ref. ${product.ref})` : ""} has been received and we will respond ${company.responseTime}.` });
    } catch (err) {
      setStatus({ type: "error", message: `${err instanceof Error ? err.message : "Something went wrong."} Please try again, or email ${company.email}.` });
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

  const field = "mt-1.5 block w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-ink placeholder:text-ink-subtle transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";
  const label = "text-sm font-semibold text-ink";
  const optional = <span className="font-normal text-ink-subtle">(optional)</span>;
  const err = (k: Field) => errors[k] && <p id={`${k}-error`} className="mt-1 text-sm text-red-600">{errors[k]}</p>;
  const aria = (k: Field) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot: hidden from people, filled by bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {product && (
        <div className="flex gap-3 rounded-xl border border-brand/20 bg-brand-soft/60 p-4">
          <Package size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden />
          <div className="text-sm">
            <p className="font-semibold text-ink">Selected: {product.name}</p>
            <p className="text-ink-muted">Reference {product.ref}. This will be included in your enquiry.</p>
          </div>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Full name *</label>
          <input id="name" name="name" autoComplete="name" maxLength={100} className={field} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="company" className={label}>Company name {optional}</label>
          <input id="company" name="company" autoComplete="organization" maxLength={120} className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email address *</label>
          <input id="email" name="email" type="email" autoComplete="email" maxLength={150} className={field} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="phone" className={label}>Contact number *</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={20} className={field} {...aria("phone")} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="service" className={label}>Product or service *</label>
          <select id="service" name="service" defaultValue={initialService} className={field} {...aria("service")}>
            <option value="" disabled>Select an option</option>
            {product && <option value={MARKETPLACE}>{product.name} ({product.ref})</option>}
            <optgroup label="Services">
              {services.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
            </optgroup>
            <optgroup label="Solutions">
              {allSolutions.filter((s) => !services.some((x) => x.title === s.title)).map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
            </optgroup>
            <option value="Digital product enquiry">Digital product enquiry</option>
            <option value="General enquiry">General enquiry</option>
          </select>
          {err("service")}
        </div>
        <div>
          <label htmlFor="quantity" className={label}>Quantity or licence requirements {optional}</label>
          <input id="quantity" name="quantity" maxLength={120} placeholder="e.g. 5 users, 1 business licence" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>Project requirements or message *</label>
        <textarea id="message" name="message" rows={6} maxLength={5000} placeholder="Briefly describe your requirements, goals and timeline." className={field} {...aria("message")} />
        {err("message")}
      </div>
      <fieldset>
        <legend className={label}>Preferred contact method</legend>
        <div className="mt-2 flex flex-wrap gap-4 text-sm text-ink-muted">
          {["Email", "Phone call", "WhatsApp"].map((m, i) => (
            <label key={m} className="flex items-center gap-2">
              <input type="radio" name="contactMethod" value={m} defaultChecked={i === 0} className="h-4 w-4 accent-brand" />
              {m}
            </label>
          ))}
        </div>
      </fieldset>
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
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-semibold text-white transition-all hover:bg-brand-deep hover:shadow-md hover:shadow-brand/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status.type === "sending" ? <Loader2 size={18} className="animate-spin" aria-hidden /> : <Send size={18} aria-hidden />}
        {status.type === "sending" ? "Sending..." : product ? "Request a Quote" : "Send Enquiry"}
      </button>
    </form>
  );
}
