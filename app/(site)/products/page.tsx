import type { Metadata } from "next";
import Link from "next/link";
import { Clock, FileDown, Info, LayoutTemplate, MonitorSmartphone, GraduationCap } from "lucide-react";
import { Button, CTABand, Container, PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Digital Products",
  description: "Letacom digital products: website templates, business templates, online tools and learning resources, delivered electronically.",
  alternates: { canonical: "/products" },
};

const categories = [
  { icon: LayoutTemplate, title: "Website & landing page templates", text: "Professionally designed, responsive templates for businesses and organisations." },
  { icon: FileDown, title: "Business document templates", text: "Editable templates for proposals, quotations, project plans and policies." },
  { icon: MonitorSmartphone, title: "Online tools", text: "Web-based utilities for specific business tasks, accessed through a browser." },
  { icon: GraduationCap, title: "Learning resources", text: "Course templates and learning content for training providers using an LMS." },
];

const journey = ["Browse products", "View product details", "Review price and terms", "Checkout (when enabled)", "Payment", "Digital delivery by email"];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital products"
        title="Ready-made digital products, delivered electronically"
        intro="Templates, online tools and learning resources built by Letacom. Digital products are delivered by download link or account access. No physical goods are shipped."
        image="/media/ux-wireframes.jpg"
      />

      <section className="border-b border-line bg-brand-soft/60">
        <Container className="flex gap-3 py-6 text-sm text-ink">
          <Info size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden />
          <p>
            <strong>Catalogue in preparation.</strong> No digital products are currently offered for online purchase. Each product will be listed with its price in South African Rand, licence terms and delivery method only once it is complete and ready for immediate delivery. You are welcome to{" "}
            <Link href="/contact?service=Digital%20product%20enquiry" className="font-semibold text-brand underline underline-offset-2">enquire about a product</Link>.
          </p>
        </Container>
      </section>

      <Section>
        <SectionHeading eyebrow="Product categories" title="What our catalogue will include" />
        <div className="grid gap-5 sm:grid-cols-2">
          {categories.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-5 rounded-2xl border border-line p-6">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon size={24} aria-hidden />
              </span>
              <div>
                <h3 className="font-bold text-ink">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{text}</p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-ink-subtle">
                  <Clock size={14} aria-hidden /> Not yet available for purchase
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="How buying works" title="Purchasing a digital product" intro="Once products are available, the purchase journey will be:" />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {journey.map((j, i) => (
            <li key={j} className="flex items-center gap-4 rounded-xl border border-line bg-white p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">{i + 1}</span>
              <span className="font-semibold text-ink">{j}</span>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-sm text-ink-muted">
          Purchases are governed by our <Link href="/terms-and-conditions" className="text-brand underline">Terms & Conditions</Link>,{" "}
          <Link href="/delivery-policy" className="text-brand underline">Delivery & Fulfilment Policy</Link> and{" "}
          <Link href="/refund-policy" className="text-brand underline">Refund & Cancellation Policy</Link>.
        </p>
        <Button href="/contact?service=Digital%20product%20enquiry" className="mt-6">Enquire about a product</Button>
      </Section>
      <CTABand />
    </>
  );
}
