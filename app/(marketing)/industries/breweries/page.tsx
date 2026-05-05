import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { CheckIcon } from "@/components/icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Breweries & Beverage Procurement | Letacom",
  description:
    "Complete procurement for brewing operations — fermentation tanks, draught systems, bottling lines, packaging, and consumables sourced globally and delivered across Africa.",
};

const supplyItems = [
  "Fermentation Tanks",
  "CO₂ Systems & Regulators",
  "Draught Dispense Systems",
  "Keg Washing & Handling Equipment",
  "Bottling & Canning Line Components",
  "PET Blow Moulding Parts",
  "Branded Glassware & Drinkware",
  "Packaging Materials & Labelling",
  "Temperature Control Systems",
  "Water Treatment Components",
];

const scenarios = [
  {
    title: "New Brewery Setup",
    description:
      "Complete equipment procurement for greenfield or expanding brewery projects — from fermentation vessels and bright beer tanks to utilities and packaging lines. We coordinate multi-supplier sourcing into a single delivery program.",
  },
  {
    title: "Draught System Rollout",
    description:
      "National rollout of draught dispense systems across bars, restaurants, and outlets. We supply font towers, python lines, FOB detectors, regulators, and all ancillaries at scale with phased delivery schedules.",
  },
  {
    title: "Consumables Replenishment",
    description:
      "Recurring supply of branded glassware, packaging materials, labels, CO₂ cylinders, cleaning chemicals, and maintenance spares — managed on a scheduled basis to keep your operations running without interruption.",
  },
];

export default function BreweriesPage() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Breweries & Beverage Production"
        title="Complete Procurement for Brewing Operations"
        subtitle="From raw material processing to final packaging, we source and deliver every component your brewery needs — fermentation systems, draught equipment, bottling lines, branded glassware, and ongoing consumables."
        primaryCta={{ label: "Request a Quote", href: "/request-quote" }}
        secondaryCta={{ label: "All Industries", href: "/industries" }}
      />

      {/* What We Supply */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            eyebrow="Supply Scope"
            title="What We Supply"
            subtitle="A comprehensive range of brewing and beverage production equipment, components, and consumables."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mt-8">
            {supplyItems.map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckIcon size={16} className="text-accent-500 flex-shrink-0" />
                <span className="text-graphite-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Procurement Scenarios */}
      <section className="section-padding bg-graphite-100">
        <div className="container-site">
          <SectionHeader
            eyebrow="Use Cases"
            title="Common Procurement Scenarios"
            subtitle="How breweries and beverage producers typically engage with our procurement services."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {scenarios.map((scenario) => (
              <div
                key={scenario.title}
                className="bg-white rounded p-6 border border-graphite-300/40"
              >
                <h3 className="font-heading font-medium text-lg text-graphite-900 mb-3">
                  {scenario.title}
                </h3>
                <p className="text-sm text-graphite-600 leading-relaxed">
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <section className="section-padding">
        <div className="container-site text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-graphite-900 mb-4">
            Need supply for your brewery?
          </h2>
          <p className="text-graphite-600 max-w-xl mx-auto mb-6">
            Whether it is a single component or a full equipment list, submit your requirement and our team will provide sourcing options and pricing.
          </p>
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-white font-heading font-medium rounded hover:bg-accent-600 transition-colors"
          >
            Submit a Requirement
          </Link>
        </div>
      </section>
    </>
  );
}
