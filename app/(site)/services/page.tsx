import type { Metadata } from "next";
import { Button, CTABand, CheckList, Container, PageHero, Section } from "@/components/ui";
import { ServiceIcon } from "@/components/ServiceIcon";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Products & Services",
  description: "Custom software, websites, e-commerce, learning management systems, automation, UI/UX design, integrations and support from Letacom (Pty) Ltd.",
  alternates: { canonical: "/services" },
};

const workflow = ["Browse services", "Select a service", "Request a quote", "Receive quotation", "Accept terms", "Receive invoice", "Payment", "Service delivery"];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & services"
        title="Digital services priced by written quotation"
        intro="Every custom service is scoped and quoted individually in South African Rand. Choose a service below and request a quote; we respond within one business day."
        image="/media/data-code.jpg"
      >
        <Button href="/contact">Request a Quote</Button>
      </PageHero>

      <section className="border-b border-line">
        <Container className="py-10">
          <p className="mb-4 text-sm font-semibold text-ink">How purchasing a service works</p>
          <ol className="flex flex-wrap gap-2 text-sm">
            {workflow.map((w, i) => (
              <li key={w} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-ink-muted">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-soft text-xs font-bold text-brand">{i + 1}</span>
                {w}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Section>
        <div className="space-y-6">
          {services.map((s) => (
            <article key={s.slug} id={s.slug} className="scroll-mt-24 grid gap-8 rounded-3xl border border-line p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <ServiceIcon name={s.icon} size={24} />
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-ink">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-muted">{s.description}</p>
                <p className="mt-4 text-sm text-ink-subtle">Pricing: by written quotation (ZAR)</p>
                <Button href={`/contact?service=${encodeURIComponent(s.title)}`} className="mt-6">Request a Quote</Button>
              </div>
              <div className="rounded-2xl bg-surface p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">Deliverables</h3>
                <CheckList items={s.deliverables} />
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
