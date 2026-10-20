import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, KeyRound, Tag } from "lucide-react";
import { Button, CTABand, Container, PageHero, Section, SectionHeading } from "@/components/ui";
import { CodeBlock } from "@/components/CodeBlock";
import { ListingCard, PaymentsNotice, StatusBadge } from "@/components/marketplace";
import { apiListings, getListing } from "@/lib/catalogue";

export const metadata: Metadata = {
  title: { absolute: "API Marketplace South Africa | Letacom Developer APIs" },
  description: "Letacom REST APIs for South African businesses and developers, with documentation, code examples and access requests. Custom API development also available.",
  alternates: { canonical: "/marketplace/apis" },
};

export default function ApisPage() {
  const service = getListing("api-development-integration")!;
  return (
    <>
      <PageHero
        eyebrow="API marketplace"
        title="APIs and integrations for South African businesses"
        intro="Developer-friendly REST APIs from Letacom, plus custom API development and integration services. Our public APIs are in development; their documentation is published as illustrative examples so you can plan integrations."
        image="/media/code-laptop.jpg"
        crumbs={[{ href: "/marketplace", label: "Marketplace" }, { href: "/marketplace/apis", label: "APIs" }]}
      >
        <Button href="/contact?product=api-development-integration">Request API Access</Button>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Letacom APIs" title="Available and upcoming APIs" />
        <div className="grid gap-6 lg:grid-cols-2">
          {apiListings.map((l) => (
            <article key={l.slug} data-reveal className="group flex flex-col rounded-2xl border border-line p-6 transition-all duration-300 hover:border-brand/40 hover:shadow-lg hover:shadow-navy-900/5">
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status={l.status} />
                <span className="inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-1 text-xs font-semibold text-ink-muted ring-1 ring-line"><Tag size={12} aria-hidden />{l.api!.version}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink">{l.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{l.summary}</p>
              <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                <div><dt className="text-ink-subtle">Category</dt><dd className="font-semibold text-ink">Business data API</dd></div>
                <div><dt className="text-ink-subtle">Authentication</dt><dd className="flex items-center gap-1.5 font-semibold text-ink"><KeyRound size={14} aria-hidden />API key (Bearer)</dd></div>
                <div className="sm:col-span-2"><dt className="text-ink-subtle">Endpoints</dt><dd className="mt-1 flex flex-wrap gap-2">{l.api!.endpoints.map((e) => <code key={e.path} className="rounded bg-surface px-2 py-0.5 text-xs text-ink ring-1 ring-line">{e.method} {e.path}</code>)}</dd></div>
                <div className="sm:col-span-2"><dt className="text-ink-subtle">Access & pricing</dt><dd className="font-semibold text-ink">Not yet available. Pricing will be published at release.</dd></div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/marketplace/apis/${l.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-brand">Documentation <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden /></Link>
                <Link href={`/contact?product=${l.slug}`} className="text-sm font-semibold text-ink-muted hover:text-ink">Request API Access</Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Integration guide" title="How Letacom APIs will work" intro="All Letacom APIs follow the same conventions, so one integration pattern works across products." />
            <ol className="space-y-4 text-sm text-ink-muted">
              <li><strong className="text-ink">1. Request access.</strong> Submit an API access request with your intended use.</li>
              <li><strong className="text-ink">2. Receive your key.</strong> On approval we email an API key. Keep it server-side; never embed it in browser code.</li>
              <li><strong className="text-ink">3. Call over HTTPS.</strong> Send JSON requests with the key in the Authorization header.</li>
              <li><strong className="text-ink">4. Handle responses.</strong> Successful calls return JSON with HTTP 200; errors return a JSON error object with a 4xx or 5xx status.</li>
            </ol>
          </div>
          <CodeBlock label="Example request (illustrative)" code={`curl -X POST https://api.letacom.co.za/v1/vat/calculate \\\n  -H "Authorization: Bearer YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d '{ "amount": 1150.00, "mode": "inclusive" }'`} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Custom APIs" title="Need an API built for your business?" />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"><ListingCard listing={service} /></div>
        <div className="mt-10"><PaymentsNotice compact /></div>
      </Section>
      <Container><p className="pb-4 text-xs text-ink-subtle">No API keys, credentials or private infrastructure details are published on this website. Base URLs and endpoints shown are planned and may change before release.</p></Container>
      <CTABand />
    </>
  );
}
