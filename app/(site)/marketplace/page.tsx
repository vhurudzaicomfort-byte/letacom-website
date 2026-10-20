import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Braces, FileSpreadsheet, ShieldCheck } from "lucide-react";
import { Button, CTABand, Container, Section, SectionHeading } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MarketplaceBrowser } from "@/components/MarketplaceBrowser";
import { CatalogueNote, CategoryIcon, ListingCard, PaymentsNotice } from "@/components/marketplace";
import { apiListings, categories, listings } from "@/lib/catalogue";

export const metadata: Metadata = {
  title: "Digital Marketplace | Software, APIs, Tools & Templates",
  description: "Browse Letacom's catalogue of software, APIs, digital tools, templates, developer resources and technology services for South African businesses. Request a quote on any listing.",
  alternates: { canonical: "/marketplace" },
};

export default function MarketplacePage() {
  const featured = listings.filter((l) => l.featured).slice(0, 6);
  const tools = listings.filter((l) => l.category === "digital-tools" || l.category === "developer-resources");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Letacom Digital Marketplace",
    url: "https://letacom.co.za/marketplace",
    mainEntity: { "@type": "ItemList", itemListElement: listings.map((l, i) => ({ "@type": "ListItem", position: i + 1, url: `https://letacom.co.za/marketplace/${l.slug}`, name: l.name })) },
  };

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <Image src="/media/professionals-digital-solutions.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/40" />
        <Container className="relative py-16 sm:py-24">
          <Breadcrumbs items={[{ href: "/marketplace", label: "Marketplace" }]} dark />
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#7fa8ff]">Letacom Digital Marketplace</p>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">Discover Digital Solutions Built for Business.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Explore software, APIs, digital tools, templates and professional technology services designed to help businesses build, automate and grow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#browse">Explore Marketplace</Button>
            <Button href="/contact" variant="light">Request a Quote</Button>
          </div>
        </Container>
      </section>

      <Container className="pt-10">
        <PaymentsNotice />
      </Container>

      <Section className="!pb-12">
        <SectionHeading eyebrow="Categories" title="Browse by category" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((c) => (
            <Link key={c.slug} href={`/marketplace/category/${c.slug}`} data-reveal className="group rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-navy-900/5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <CategoryIcon name={c.icon} size={20} />
              </span>
              <h2 className="mt-4 text-sm font-bold text-ink">{c.name}</h2>
              <p className="mt-1 text-xs leading-relaxed text-ink-muted">{c.offerings}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Featured" title="Featured products and services" />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((l) => <ListingCard key={l.slug} listing={l} />)}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { icon: Braces, title: "API marketplace", text: "REST APIs and developer documentation for integrating South African business data and calculations.", href: "/marketplace/apis", cta: "Explore APIs" },
            { icon: FileSpreadsheet, title: "Templates & resources", text: "Business documents, spreadsheets, UI kits and developer starter kits.", href: "/marketplace/templates", cta: "Browse templates" },
            { icon: ShieldCheck, title: "Sold and supported by Letacom", text: "Every listing is a Letacom product or service, backed by our published policies.", href: "/terms-and-conditions", cta: "Read our terms" },
          ].map(({ icon: Icon, title, text, href, cta }) => (
            <Link key={href} href={href} data-reveal className="group rounded-2xl border border-line p-6 transition-all duration-300 hover:border-brand/40 hover:shadow-lg hover:shadow-navy-900/5">
              <Icon size={24} className="text-brand transition-transform duration-300 group-hover:scale-110" aria-hidden />
              <h2 className="mt-4 text-lg font-bold text-ink">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">{cta} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden /></span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Digital tools & developer resources" title="Tools in development" intro="Planned Letacom tools and developer resources. Register your interest and we will notify you at release." />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {tools.map((l) => <ListingCard key={l.slug} listing={l} />)}
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {apiListings.map((l) => <ListingCard key={l.slug} listing={l} />)}
        </div>
      </Section>

      <Section id="browse" className="scroll-mt-16">
        <SectionHeading eyebrow="All listings" title="Search the marketplace" />
        <MarketplaceBrowser listings={listings} categories={categories} />
        <div className="mt-10"><CatalogueNote /></div>
      </Section>

      <CTABand title="Need something not listed?" text="Most of our work is custom. Tell us what you need and we will send a written quotation in South African Rand." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
