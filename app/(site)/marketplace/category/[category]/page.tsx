import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTABand, Container, PageHero } from "@/components/ui";
import { MarketplaceBrowser } from "@/components/MarketplaceBrowser";
import { CatalogueNote, PaymentsNotice } from "@/components/marketplace";
import { categories, getCategory, listings } from "@/lib/catalogue";

export const dynamicParams = false;
export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const c = getCategory((await params).category);
  if (!c) return {};
  return { title: `${c.name} | Letacom Marketplace`, description: `${c.description} Request a quote from Letacom (Pty) Ltd, South Africa.`, alternates: { canonical: `/marketplace/category/${c.slug}` } };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const c = getCategory((await params).category);
  if (!c) notFound();
  return (
    <>
      <PageHero eyebrow="Marketplace category" title={c.name} intro={c.description} crumbs={[{ href: "/marketplace", label: "Marketplace" }, { href: `/marketplace/category/${c.slug}`, label: c.name }]} />
      <Container className="py-12 sm:py-16">
        <PaymentsNotice compact />
        <div className="mt-10">
          <MarketplaceBrowser listings={listings} categories={categories} initialCategory={c.slug} />
        </div>
        <div className="mt-10"><CatalogueNote /></div>
      </Container>
      <CTABand />
    </>
  );
}
