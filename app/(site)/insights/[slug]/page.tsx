import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { CTABand, Container } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getInsight, insights } from "@/lib/insights";
import { company } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const i = getInsight((await params).slug);
  if (!i) return {};
  return { title: i.title, description: i.description, alternates: { canonical: `/insights/${i.slug}` }, openGraph: { type: "article", publishedTime: i.published } };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const i = getInsight((await params).slug);
  if (!i) notFound();
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: i.title,
    description: i.description,
    datePublished: i.published,
    author: { "@id": `${company.url}/#organization` },
    publisher: { "@id": `${company.url}/#organization` },
    mainEntityOfPage: `${company.url}/insights/${i.slug}`,
  };
  return (
    <>
      <section className="border-b border-line bg-surface">
        <Container className="max-w-3xl py-14 sm:py-20">
          <Breadcrumbs items={[{ href: "/insights", label: "Insights" }, { href: `/insights/${i.slug}`, label: i.title }]} />
          <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">{i.title}</h1>
          <p className="mt-4 text-lg text-ink-muted">{i.description}</p>
          <p className="mt-4 text-sm text-ink-subtle">
            Letacom (Pty) Ltd · <time dateTime={i.published}>{new Date(i.published).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })}</time> · {i.readMinutes} min read
          </p>
        </Container>
      </section>
      <Container className="max-w-3xl py-12 sm:py-16">
        <article className="prose-legal">
          {i.body.map((b, idx) =>
            b.h ? <h2 key={idx}>{b.h}</h2> : b.list ? <ul key={idx}>{b.list.map((x) => <li key={x}>{x}</li>)}</ul> : <p key={idx}>{b.p}</p>,
          )}
        </article>
        <Link href={i.related.href} className="group mt-10 flex items-center justify-between rounded-2xl border border-line p-5 transition-all hover:border-brand/40 hover:shadow-lg hover:shadow-navy-900/5">
          <span><span className="block text-xs font-semibold uppercase tracking-wider text-ink-subtle">Related</span><span className="font-bold text-ink">{i.related.label}</span></span>
          <ArrowRight size={18} className="text-brand transition-transform group-hover:translate-x-1" aria-hidden />
        </Link>
      </Container>
      <CTABand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
