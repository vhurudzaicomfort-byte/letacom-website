import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, FileText, LifeBuoy, Monitor, Package, Scale, Truck } from "lucide-react";
import { Button, CheckList, Container, Section } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CatalogueNote, ListingCard, PaymentsNotice, StatusBadge, quoteHref } from "@/components/marketplace";
import { getCategory, getListing, kindLabel, listings } from "@/lib/catalogue";

export const dynamicParams = false;
export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const l = getListing((await params).slug);
  if (!l) return {};
  return {
    title: { absolute: `${l.name}${l.planned ? " (Coming Soon)" : ""} | Letacom Marketplace` },
    description: l.summary,
    alternates: { canonical: `/marketplace/${l.slug}` },
    openGraph: { images: [{ url: l.image }] },
  };
}

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const l = getListing((await params).slug);
  if (!l) notFound();
  const cat = getCategory(l.category)!;
  const related = listings.filter((x) => x.category === l.category && x.slug !== l.slug).slice(0, 3);
  const pricing = l.status === "coming-soon" ? "Not yet available. Pricing will be published in ZAR at release." : "By written quotation in South African Rand (ZAR).";

  const facts = [
    { icon: Package, label: "Listing type", value: kindLabel[l.kind] },
    { icon: Monitor, label: "Supported platforms", value: l.platforms.join(", ") },
    ...(l.format ? [{ icon: FileText, label: "Format", value: l.format }] : []),
    { icon: Truck, label: "Delivery", value: l.delivery },
    { icon: Scale, label: "Licence", value: l.licence },
    { icon: LifeBuoy, label: "Support", value: l.support },
  ];

  const serviceLd = l.planned
    ? null
    : {
        "@context": "https://schema.org",
        "@type": "Service",
        name: l.name,
        description: l.description,
        serviceType: cat.name,
        provider: { "@id": "https://letacom.co.za/#organization" },
        areaServed: { "@type": "Country", name: "South Africa" },
        url: `https://letacom.co.za/marketplace/${l.slug}`,
      };

  return (
    <>
      <section className="border-b border-line bg-surface">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs items={[{ href: "/marketplace", label: "Marketplace" }, { href: `/marketplace/category/${cat.slug}`, label: cat.name }, { href: `/marketplace/${l.slug}`, label: l.name }]} />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status={l.status} />
                {l.planned && <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-ink-muted ring-1 ring-line">Planned product</span>}
                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-ink-muted ring-1 ring-line">Online Payments Coming Soon</span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{l.name}</h1>
              <p className="mt-2 text-sm text-ink-subtle">
                <Link href={`/marketplace/category/${cat.slug}`} className="hover:text-brand">{cat.name}</Link> · Ref. {l.ref}
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">{l.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={quoteHref(l)}>{l.status === "coming-soon" ? "Enquire for Access" : "Request a Quote"}</Button>
                {l.api && <Button href={`/marketplace/apis/${l.slug}`} variant="secondary">View API documentation</Button>}
                {l.docs && <Button href={l.docs.href} variant="secondary">{l.docs.label}</Button>}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src={l.image} alt={`${l.name} illustration`} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-10">
            <div data-reveal>
              <h2 className="text-2xl font-bold text-ink">Features and capabilities</h2>
              <CheckList items={l.features} className="mt-5" />
            </div>
            {l.requirements && (
              <div data-reveal>
                <h2 className="text-2xl font-bold text-ink">Technical requirements</h2>
                <CheckList items={l.requirements} className="mt-5" />
              </div>
            )}
            {l.intendedUse && (
              <div data-reveal>
                <h2 className="text-2xl font-bold text-ink">Intended use</h2>
                <p className="mt-3 text-ink-muted">{l.intendedUse}</p>
              </div>
            )}
            <div data-reveal>
              <h2 className="text-2xl font-bold text-ink">Pricing</h2>
              <p className="mt-3 text-ink-muted">{pricing} Online checkout is not yet available; purchases are made against a formal invoice. See <Link href="/payment-security" className="text-brand underline underline-offset-2">Payment &amp; Security</Link>.</p>
            </div>
            <PaymentsNotice compact />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <dl className="divide-y divide-line rounded-2xl border border-line">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-3 p-5">
                  <Icon size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">{label}</dt>
                    <dd className="mt-1 text-sm text-ink">{value}</dd>
                  </div>
                </div>
              ))}
              <div className="flex gap-3 p-5">
                <BookOpen size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">Documentation & policies</dt>
                  <dd className="mt-1 space-y-1 text-sm">
                    {l.api && <Link href={`/marketplace/apis/${l.slug}`} className="block text-brand hover:underline">API documentation</Link>}
                    {l.docs && <Link href={l.docs.href} className="block text-brand hover:underline">{l.docs.label}</Link>}
                    <Link href="/delivery-policy" className="block text-brand hover:underline">Delivery & Fulfilment Policy</Link>
                    <Link href="/refund-policy" className="block text-brand hover:underline">Refund & Cancellation Policy</Link>
                  </dd>
                </div>
              </div>
            </dl>
            <div className="mt-6"><CatalogueNote /></div>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="bg-surface">
          <h2 className="mb-8 text-2xl font-bold text-ink">More in {cat.name}</h2>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {related.map((r) => <ListingCard key={r.slug} listing={r} />)}
          </div>
        </Section>
      )}
      {serviceLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />}
    </>
  );
}
