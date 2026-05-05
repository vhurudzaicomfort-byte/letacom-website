import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { CheckIcon } from "@/components/icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manufacturing & Processing Procurement | Letacom",
  description:
    "Procurement solutions for manufacturing and processing operations — production machinery, automation systems, precision equipment, and maintenance consumables delivered across Africa.",
};

const supplyItems = [
  "Production Line Machinery",
  "CNC & Precision Equipment",
  "Automation & Control Systems",
  "Industrial Motors & Drives",
  "Hydraulic & Pneumatic Components",
  "Welding Equipment & Consumables",
  "Safety & PPE Equipment",
  "Lubricants & Maintenance Chemicals",
  "Electrical Components & Panels",
  "Quality Control Instruments",
];

const scenarios = [
  {
    title: "Production Line Expansion",
    description:
      "End-to-end procurement for new production lines or capacity upgrades — machinery, conveyors, control systems, and installation ancillaries sourced from verified manufacturers and delivered as a coordinated package.",
  },
  {
    title: "Maintenance & Spares Program",
    description:
      "Structured supply of critical spare parts, wear items, lubricants, and maintenance consumables on scheduled or on-demand basis — reducing downtime and eliminating stock-out risk for your operation.",
  },
  {
    title: "Automation Upgrade",
    description:
      "Sourcing PLCs, sensors, drives, HMI panels, and control components for factory automation projects. We work with your engineering team to procure exact specifications from global suppliers.",
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Manufacturing & Processing"
        title="Procurement Solutions for Manufacturing & Processing"
        subtitle="We source production machinery, automation components, precision tools, and maintenance consumables for manufacturers across Africa — from single spare parts to complete line installations."
        primaryCta={{ label: "Request a Quote", href: "/request-quote" }}
        secondaryCta={{ label: "All Industries", href: "/industries" }}
      />

      {/* What We Supply */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            eyebrow="Supply Scope"
            title="What We Supply"
            subtitle="Equipment, components, and consumables for manufacturing and processing facilities."
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
            subtitle="How manufacturers and processing operations typically engage with our procurement services."
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
            Need equipment or parts for your facility?
          </h2>
          <p className="text-graphite-600 max-w-xl mx-auto mb-6">
            From a single replacement motor to a full production line — submit your requirement and we will source it from our verified global supplier network.
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
