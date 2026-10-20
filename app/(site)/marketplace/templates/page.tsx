import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { CTABand, Container, PageHero, Section, SectionHeading } from "@/components/ui";
import { CatalogueNote, PaymentsNotice, StatusBadge } from "@/components/marketplace";
import { templateListings } from "@/lib/catalogue";

export const metadata: Metadata = {
  title: { absolute: "Business Templates & Digital Resources | Letacom" },
  description: "Business document templates, Excel spreadsheets, CV templates, UI kits and developer starter kits from Letacom (Pty) Ltd, South Africa.",
  alternates: { canonical: "/marketplace/templates" },
};

const groups = ["Business documents", "Financial spreadsheets", "Project management templates", "Proposals and quotations", "Contracts and agreements", "CV and résumé templates", "Presentations", "UI/UX templates", "Developer starter kits", "Educational resources"];

export default function TemplatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Templates & resources"
        title="Digital documents and templates"
        intro="Professionally designed business documents, spreadsheets, design kits and developer starter kits. Templates are delivered electronically by download link. Products in development are marked Coming Soon."
        image="/media/ux-wireframes.jpg"
        crumbs={[{ href: "/marketplace", label: "Marketplace" }, { href: "/marketplace/templates", label: "Templates" }]}
      />
      <Container className="pt-10"><PaymentsNotice compact /></Container>

      <Section className="!pt-12">
        <SectionHeading eyebrow="Resource categories" title="What we are building" />
        <ul className="flex flex-wrap gap-2">
          {groups.map((g) => <li key={g} className="rounded-full bg-surface px-3.5 py-2 text-sm text-ink-muted ring-1 ring-line">{g}</li>)}
        </ul>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Catalogue" title="Templates and resources" />
        <div className="space-y-5">
          {templateListings.map((l) => (
            <article key={l.slug} data-reveal className="group grid gap-6 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:border-brand/40 hover:shadow-lg hover:shadow-navy-900/5 sm:grid-cols-[200px_1fr_auto] sm:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={l.image} alt="" fill sizes="200px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div>
                <div className="flex flex-wrap gap-2"><StatusBadge status={l.status} /><span className="inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-1 text-xs font-semibold text-ink-muted ring-1 ring-line"><FileText size={12} aria-hidden />{l.format}</span></div>
                <h3 className="mt-3 text-lg font-bold text-ink"><Link href={`/marketplace/${l.slug}`} className="hover:text-brand">{l.name}</Link></h3>
                <p className="mt-1 text-sm text-ink-muted">{l.summary}</p>
                <dl className="mt-3 grid gap-x-6 gap-y-1 text-xs text-ink-muted sm:grid-cols-2">
                  <div><dt className="inline font-semibold text-ink">Intended use: </dt><dd className="inline">{l.intendedUse}</dd></div>
                  <div><dt className="inline font-semibold text-ink">Licence: </dt><dd className="inline">{l.licence}</dd></div>
                  <div className="sm:col-span-2"><dt className="inline font-semibold text-ink">Delivery: </dt><dd className="inline">{l.delivery}</dd></div>
                </dl>
              </div>
              <Link href={`/contact?product=${l.slug}`} className="inline-flex justify-center rounded-lg bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand">Enquire for Access</Link>
            </article>
          ))}
        </div>
        <div className="mt-8"><CatalogueNote /></div>
      </Section>
      <CTABand title="Need a custom template?" text="We design bespoke business documents, spreadsheets and design kits. Request a quote." />
    </>
  );
}
