"use client";

import { useState, useEffect } from "react";
import { images } from "@/lib/images";
import { Hero } from "@/components/sections/Hero";
import { CheckIcon, ArrowRightIcon, WhatsAppIcon } from "@/components/icons";

type FormData = {
  // Step 1
  industry: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  country: string;
  // Step 2
  productCategory: string;
  itemDescription: string;
  estimatedQuantity: string;
  timeline: string;
  budgetRange: string;
  serviceTypes: string[];
  // Step 3
  additionalNotes: string;
  consent: boolean;
  // Honeypot
  website: string;
};

const initialFormData: FormData = {
  industry: "",
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  country: "",
  productCategory: "",
  itemDescription: "",
  estimatedQuantity: "",
  timeline: "",
  budgetRange: "",
  serviceTypes: [],
  additionalNotes: "",
  consent: false,
  website: "",
};

const VALID_CATEGORIES = new Set([
  "equipment",
  "accessories",
  "spare-parts",
  "tools",
  "systems",
  "it-hardware-software",
  "branded-consumables",
]);

const serviceTypeOptions = [
  { value: "sourcing-only", label: "Sourcing only" },
  { value: "sourcing-local-manufacturing", label: "Sourcing + local manufacturing" },
  { value: "custom-design", label: "Custom design" },
  { value: "installation-training", label: "Installation & training" },
  { value: "ongoing-support", label: "Ongoing support" },
];

const industryOptions = [
  "Breweries & Beverage",
  "Manufacturing & Processing",
  "Transport & Logistics",
  "Sales & Distribution",
  "Other",
];

const categoryOptions = [
  { value: "equipment", label: "Industrial Equipment" },
  { value: "accessories", label: "Accessories" },
  { value: "spare-parts", label: "Spare Parts" },
  { value: "tools", label: "Tools & Workshop" },
  { value: "systems", label: "Systems" },
  { value: "it-hardware-software", label: "IT Hardware & Software" },
  { value: "branded-consumables", label: "Branded Consumables" },
];

const timelineOptions = [
  { value: "urgent", label: "Urgent (< 30 days)" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "planning", label: "Planning phase" },
];

const budgetOptions = [
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-50k", label: "$10,000 – $50,000" },
  { value: "50k-200k", label: "$50,000 – $200,000" },
  { value: "200k-plus", label: "$200,000+" },
  { value: "not-specified", label: "Prefer not to say" },
];

const steps = ["Industry & Contact", "Requirement Details", "Additional Notes"];

export default function RequestQuotePage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Pre-fill product category from ?category= query param
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat && VALID_CATEGORIES.has(cat)) {
      setFormData((prev) =>
        prev.productCategory ? prev : { ...prev, productCategory: cat }
      );
    }
  }, []);

  function update(field: keyof FormData, value: string | boolean | string[]) {
    setFormData((prev) => ({ ...prev, [field]: value } as FormData));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function toggleServiceType(value: string) {
    setFormData((prev) => ({
      ...prev,
      serviceTypes: prev.serviceTypes.includes(value)
        ? prev.serviceTypes.filter((v) => v !== value)
        : [...prev.serviceTypes, value],
    }));
  }

  function validateStep(): boolean {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (step === 0) {
      if (!formData.industry) errs.industry = "Select an industry";
      if (!formData.companyName.trim()) errs.companyName = "Required";
      if (!formData.contactName.trim()) errs.contactName = "Required";
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        errs.email = "Valid email required";
      if (!formData.phone.trim()) errs.phone = "Required";
      if (!formData.country.trim()) errs.country = "Required";
    } else if (step === 1) {
      if (!formData.productCategory) errs.productCategory = "Select a category";
      if (!formData.itemDescription.trim()) errs.itemDescription = "Describe your requirement";
      if (!formData.timeline) errs.timeline = "Select a timeline";
    } else if (step === 2) {
      if (!formData.consent) errs.consent = "You must consent to proceed";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function nextStep() {
    if (validateStep()) setStep((s) => Math.min(s + 1, 2));
  }

  function prevStep() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit() {
    if (!validateStep()) return;
    if (formData.website) return; // honeypot

    setSubmitting(true);
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or contact us directly.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <>
        <Hero
          variant="inner"
          eyebrow="Request a Quote"
          title="Request Received"
          backgroundImage={images.heroRFQ}
        />
        <section className="section-padding">
          <div className="container-site max-w-xl text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-success/10 rounded-full text-success mb-6">
              <CheckIcon size={32} />
            </div>
            <h2 className="font-heading font-bold text-2xl text-graphite-900 mb-3">
              Thank You for Your Inquiry
            </h2>
            <p className="text-graphite-500 leading-relaxed mb-8">
              We&apos;ve received your request for quotation. Our procurement team
              will review your requirements and respond within one business day.
            </p>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "27000000000"}?text=${encodeURIComponent("Hi Letacom, I just submitted an RFQ and wanted to follow up.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-heading font-medium rounded hover:bg-[#20BD5A] transition-colors"
            >
              <WhatsAppIcon size={20} />
              Quick Contact via WhatsApp
            </a>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Get Started"
        title="Request a Quote"
        subtitle="Tell us what you need. Our team will source it, price it, and get back to you within one business day."
        backgroundImage={images.heroRFQ}
      />

      <section className="pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-12 lg:pb-14">
        <div className="container-site max-w-2xl">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-10">
            {steps.map((label, i) => (
              <div key={label} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-heading font-medium ${
                    i <= step
                      ? "bg-primary-500 text-white"
                      : "bg-graphite-100 text-graphite-500"
                  }`}
                >
                  {i < step ? <CheckIcon size={16} /> : i + 1}
                </div>
                <span
                  className={`hidden sm:block text-xs font-medium ${
                    i <= step ? "text-primary-700" : "text-graphite-500"
                  }`}
                >
                  {label}
                </span>
                {i < steps.length - 1 && (
                  <div
                    className={`flex-1 h-px ${
                      i < step ? "bg-primary-500" : "bg-graphite-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Honeypot */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={(e) => update("website", e.target.value)}
            />
          </div>

          {/* Step 1 */}
          {step === 0 && (
            <div className="space-y-5">
              <h2 className="font-heading font-bold text-xl text-graphite-900">
                Industry & Contact Details
              </h2>

              <FormSelect
                label="Industry"
                value={formData.industry}
                onChange={(v) => update("industry", v)}
                options={industryOptions.map((o) => ({ value: o, label: o }))}
                error={errors.industry}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  label="Company Name"
                  value={formData.companyName}
                  onChange={(v) => update("companyName", v)}
                  error={errors.companyName}
                />
                <FormInput
                  label="Contact Name"
                  value={formData.contactName}
                  onChange={(v) => update("contactName", v)}
                  error={errors.contactName}
                />
              </div>

              <FormInput
                label="Email"
                type="email"
                value={formData.email}
                onChange={(v) => update("email", v)}
                error={errors.email}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  label="Phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(v) => update("phone", v)}
                  error={errors.phone}
                />
                <FormInput
                  label="Country"
                  value={formData.country}
                  onChange={(v) => update("country", v)}
                  error={errors.country}
                  placeholder="e.g. South Africa, Zimbabwe"
                />
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="font-heading font-bold text-xl text-graphite-900">
                Requirement Details
              </h2>

              <FormSelect
                label="Product / Solution Category"
                value={formData.productCategory}
                onChange={(v) => update("productCategory", v)}
                options={categoryOptions}
                error={errors.productCategory}
              />

              <FormTextarea
                label="Item Description"
                value={formData.itemDescription}
                onChange={(v) => update("itemDescription", v)}
                error={errors.itemDescription}
                placeholder="Describe the products or equipment you need. Include specifications, models, or reference numbers if available."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  label="Estimated Quantity"
                  value={formData.estimatedQuantity}
                  onChange={(v) => update("estimatedQuantity", v)}
                  placeholder="e.g. 50 units, 1 system"
                />
                <FormSelect
                  label="Target Timeline"
                  value={formData.timeline}
                  onChange={(v) => update("timeline", v)}
                  options={timelineOptions}
                  error={errors.timeline}
                />
              </div>

              <FormSelect
                label="Budget Range (Optional)"
                value={formData.budgetRange}
                onChange={(v) => update("budgetRange", v)}
                options={budgetOptions}
              />

              <fieldset>
                <legend className="block text-sm font-medium text-graphite-700 mb-2">
                  Service Type{" "}
                  <span className="text-graphite-500 font-normal">
                    (select all that apply)
                  </span>
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {serviceTypeOptions.map((opt) => {
                    const checked = formData.serviceTypes.includes(opt.value);
                    return (
                      <label
                        key={opt.value}
                        className={`flex items-center gap-3 px-4 py-3 border rounded cursor-pointer transition-colors ${
                          checked
                            ? "border-primary-500 bg-primary-500/5"
                            : "border-graphite-300 hover:border-graphite-500"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleServiceType(opt.value)}
                          className="w-4 h-4 rounded border-graphite-300 text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-sm text-graphite-900">
                          {opt.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            </div>
          )}

          {/* Step 3 */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="font-heading font-bold text-xl text-graphite-900">
                Additional Notes
              </h2>

              <FormTextarea
                label="Additional Notes (Optional)"
                value={formData.additionalNotes}
                onChange={(v) => update("additionalNotes", v)}
                placeholder="Any additional context, specifications, or requirements."
              />

              <p className="text-xs text-graphite-500">
                File uploads for specifications and drawings can be sent via email
                after submission, or shared via WhatsApp.
              </p>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-graphite-300 text-primary-500 focus:ring-primary-500"
                />
                <span className="text-sm text-graphite-700 leading-relaxed">
                  I consent to Letacom processing my information for the purpose
                  of responding to this procurement inquiry. We will not share
                  your details with third parties.
                </span>
              </label>
              {errors.consent && (
                <p className="text-xs text-danger">{errors.consent}</p>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-graphite-300/30">
            {step > 0 ? (
              <button
                onClick={prevStep}
                className="px-5 py-2.5 text-sm font-heading font-medium text-graphite-700 hover:text-graphite-900 transition-colors"
              >
                Back
              </button>
            ) : (
              <div />
            )}
            {step < 2 ? (
              <button
                onClick={nextStep}
                className="hover-lift inline-flex items-center gap-2 px-6 py-2.5 bg-brand-blue text-white font-heading font-medium rounded shadow-[0_4px_18px_-6px_rgba(26,107,255,0.5)] hover:bg-brand-blue-deep hover:shadow-[0_8px_22px_-6px_rgba(26,107,255,0.7)] transition-colors"
              >
                Continue
                <ArrowRightIcon size={16} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent-500 text-white font-heading font-medium rounded hover:bg-accent-600 transition-colors disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit Request"}
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

/* ---- Form field components ---- */

function FormInput({
  label,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-graphite-700 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-3 py-2.5 text-sm border rounded bg-white text-graphite-900 placeholder:text-graphite-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-colors ${
          error ? "border-danger" : "border-graphite-300"
        }`}
      />
      {error && <p className="mt-1 text-xs text-danger">{error}</p>}
    </div>
  );
}

function FormSelect({
  label,
  value,
  onChange,
  options,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-graphite-700 mb-1.5">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-3 py-2.5 text-sm border rounded bg-white text-graphite-900 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-colors ${
          error ? "border-danger" : "border-graphite-300"
        }`}
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-danger">{error}</p>}
    </div>
  );
}

function FormTextarea({
  label,
  value,
  onChange,
  error,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-graphite-700 mb-1.5">
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className={`w-full px-3 py-2.5 text-sm border rounded bg-white text-graphite-900 placeholder:text-graphite-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-colors resize-y ${
          error ? "border-danger" : "border-graphite-300"
        }`}
      />
      {error && <p className="mt-1 text-xs text-danger">{error}</p>}
    </div>
  );
}
