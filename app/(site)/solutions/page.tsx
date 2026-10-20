import type { Metadata } from "next";
import { Button, CTABand, CheckList, Container, PageHero, Section } from "@/components/ui";
import { SolutionsGrid } from "@/components/SolutionsGrid";
import { pillars } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Technology Solutions South Africa | Software, AI, Cloud, Security & Growth",
  description: "Letacom solutions across four pillars: build and run software and cloud, AI and automation, cybersecurity and compliance, and digital experience and growth.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: pillars.flatMap((p) => p.solutions).map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Service", name: s.title, description: s.description, url: `https://letacom.co.za/solutions#${s.slug}`, provider: { "@id": "https://letacom.co.za/#organization" }, areaServed: { "@type": "Country", name: "South Africa" } },
    })),
  };
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Solutions for every stage of your digital journey"
        intro="From building and running core systems to automation, compliance and growth, Letacom brings the capabilities together under one accountable South African partner."
        image="/media/african-tech-team-office.jpg"
        crumbs={[{ href: "/solutions", label: "Solutions" }]}
      >
        <Button href="/contact">Request a Quote</Button>
      </PageHero>

      <Section>
        <SolutionsGrid />
      </Section>

      {pillars.map((p, i) => (
        <Section key={p.slug} id={p.slug} className={`scroll-mt-16 ${i % 2 === 0 ? "bg-surface" : ""}`}>
          <div data-reveal className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand">{p.name}</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{p.intro}</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {p.solutions.map((s) => (
              <article key={s.slug} id={s.slug} data-reveal className="group flex scroll-mt-24 flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-navy-900/[0.07]">
                <h3 className="text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand">{s.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.description}</p>
                <CheckList items={s.includes} className="mt-5 flex-1" />
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Button href={`/contact?service=${encodeURIComponent(s.title)}`}>Request a Quote</Button>
                  {s.href && <Button href={s.href} variant="ghost">Learn more</Button>}
                </div>
              </article>
            ))}
          </div>
        </Section>
      ))}
      <Container><p className="pb-4 text-xs text-ink-subtle">Payment integrations are configured on the client&apos;s own merchant account; Letacom does not process payments on behalf of clients.</p></Container>
      <CTABand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
