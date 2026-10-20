import type { Metadata } from "next";
import { Suspense } from "react";
import { Building2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Container, PageHero } from "@/components/ui";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Letacom (Pty) Ltd for quotations and support. Email hello@letacom.co.za or call +27 63 076 9938.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const items = [
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: Phone, label: "Telephone", value: company.phone, href: company.phoneHref },
    { icon: Clock, label: "Business hours", value: company.hours },
  ];
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Request a quote or speak to our team"
        intro="Send us your enquiry and we will respond within one business day. For custom services, we confirm your requirements and then issue a written quotation."
      />
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.5fr_1fr]">
        <div className="relative rounded-3xl border border-line p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-ink">Enquiry form</h2>
          <p className="mb-8 mt-2 text-sm text-ink-muted">Fields marked * are required.</p>
          <Suspense>
            <ContactForm />
          </Suspense>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl bg-navy-900 p-8 text-white">
            <h2 className="mb-6 text-lg font-bold">Contact details</h2>
            <ul className="space-y-5">
              {items.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <Icon size={20} className="mt-0.5 shrink-0 text-[#7fa8ff]" aria-hidden />
                  <span>
                    <span className="block text-sm text-white/55">{label}</span>
                    {href ? <a href={href} className="font-semibold hover:text-[#7fa8ff]">{value}</a> : <span className="font-semibold">{value}</span>}
                  </span>
                </li>
              ))}
              <li className="flex gap-4">
                <MapPin size={20} className="mt-0.5 shrink-0 text-[#7fa8ff]" aria-hidden />
                <span>
                  <span className="block text-sm text-white/55">Registered office</span>
                  <address className="font-semibold not-italic">
                    {company.address.lines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </address>
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-line p-8">
            <div className="mb-4 flex items-center gap-3">
              <Building2 size={20} className="text-brand" aria-hidden />
              <h2 className="font-bold text-ink">Company details</h2>
            </div>
            <dl className="space-y-3 text-sm">
              <div><dt className="text-ink-subtle">Registered name</dt><dd className="font-semibold text-ink">{company.legalName}</dd></div>
              <div><dt className="text-ink-subtle">Registration number</dt><dd className="font-semibold text-ink">{company.registration}</dd></div>
              <div><dt className="text-ink-subtle">Country</dt><dd className="font-semibold text-ink">South Africa</dd></div>
            </dl>
          </div>
        </div>
      </Container>
    </>
  );
}
