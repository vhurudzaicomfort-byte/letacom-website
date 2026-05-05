import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { images } from "@/lib/images";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { CheckIcon } from "@/components/icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transport & Logistics Procurement | Letacom",
  description:
    "Supply solutions for transport and logistics operators — fleet parts, warehouse systems, material handling equipment, GPS tracking, and cold chain infrastructure across Africa.",
};

const supplyItems = [
  "Fleet Maintenance Parts & Consumables",
  "Warehouse Racking & Storage Systems",
  "Material Handling Equipment",
  "GPS & Fleet Tracking Systems",
  "Vehicle Branding & Signage",
  "Fuel Management Systems",
  "Loading & Unloading Equipment",
  "Cold Chain Equipment",
  "Workshop Tools & Equipment",
  "Fleet Safety & Compliance Items",
];

const scenarios = [
  {
    title: "Fleet Expansion Support",
    description:
      "Procurement of maintenance parts, tyres, branding, GPS units, and safety equipment for new vehicle additions — delivered as a per-vehicle kit or phased supply program aligned with your fleet growth timeline.",
  },
  {
    title: "Warehouse Setup & Equipping",
    description:
      "Complete warehouse procurement including racking systems, forklifts, pallet jacks, dock levellers, and inventory management hardware — sourced and delivered ready for installation.",
  },
  {
    title: "Cold Chain Infrastructure",
    description:
      "Refrigerated transport components, cold room panels, temperature monitoring systems, and backup power units for operators maintaining cold chain integrity from depot to delivery.",
  },
];

export default function TransportLogisticsPage() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Transport & Logistics"
        title="Supply Solutions for Transport & Logistics"
        subtitle="We equip logistics operators with fleet maintenance parts, warehouse infrastructure, tracking technology, and cold chain systems — keeping your operations moving across Africa's toughest corridors."
        primaryCta={{ label: "Request a Quote", href: "/request-quote" }}
        secondaryCta={{ label: "All Industries", href: "/industries" }}
        backgroundImage={images.logistics}
      />

      {/* What We Supply */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            eyebrow="Supply Scope"
            title="What We Supply"
            subtitle="Equipment, technology, and consumables for fleet operators, warehouses, and logistics networks."
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
            subtitle="How transport and logistics companies typically engage with our procurement services."
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
            Equipping a fleet or warehouse?
          </h2>
          <p className="text-graphite-600 max-w-xl mx-auto mb-6">
            Tell us what you need — from a single tracking unit to a full warehouse fit-out — and our logistics procurement team will deliver a sourcing solution.
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
