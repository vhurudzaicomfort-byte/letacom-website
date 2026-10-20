import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { CTABand, Container, PageHero } from "@/components/ui";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights | Software, Websites, Automation & E-Learning Guides",
  description: "Practical guides from Letacom on custom software, website costs in South Africa, business automation, learning management systems, APIs and buying digital tools.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Practical guides for business technology" intro="Clear answers to the questions our clients ask most often about software, websites, automation, learning platforms and APIs." crumbs={[{ href: "/insights", label: "Insights" }]} />
      <Container className="grid gap-5 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-3">
        {insights.map((i) => (
          <article key={i.slug} data-reveal className="group relative flex flex-col rounded-2xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-navy-900/[0.07]">
            <p className="flex items-center gap-1.5 text-xs font-semibold text-ink-subtle"><Clock size={14} aria-hidden />{i.readMinutes} min read</p>
            <h2 className="mt-3 text-lg font-bold text-ink">
              <Link href={`/insights/${i.slug}`} className="after:absolute after:inset-0">{i.title}</Link>
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{i.description}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">Read guide <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden /></span>
          </article>
        ))}
      </Container>
      <CTABand />
    </>
  );
}
