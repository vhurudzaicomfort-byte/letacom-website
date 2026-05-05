import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { IndustryCard } from "@/components/sections/IndustryCard";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Industries We Serve | Letacom",
  description:
    "Specialized procurement solutions for breweries, manufacturing, transport & logistics, and sales & distribution across Africa.",
};

const industries = [
  {
    name: "Breweries & Beverage",
    shortDescription:
      "Brewing equipment, fermentation systems, draught dispense, kegs, bottling components, and packaging.",
    href: "/industries/breweries",
    iconName: "BreweryIcon" as const,
  },
  {
    name: "Manufacturing & Processing",
    shortDescription:
      "Production line equipment, automation systems, precision tools, spare parts, and processing machinery.",
    href: "/industries/manufacturing",
    iconName: "ManufacturingIcon" as const,
  },
  {
    name: "Transport & Logistics",
    shortDescription:
      "Fleet support consumables, warehouse equipment, tracking systems, and branded fleet items.",
    href: "/industries/transport-logistics",
    iconName: "LogisticsIcon" as const,
  },
  {
    name: "Sales & Distribution",
    shortDescription:
      "Point-of-sale equipment, branded consumables, distribution tools, and IT hardware for distributors.",
    href: "/industries/sales-distribution",
    iconName: "DistributionIcon" as const,
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Industries"
        title="Procurement Expertise Across Key Sectors"
        subtitle="We provide tailored sourcing and supply chain solutions for Africa's most important industrial sectors — from breweries and manufacturing plants to logistics fleets and distribution networks."
        primaryCta={{ label: "Request a Quote", href: "/request-quote" }}
        secondaryCta={{ label: "About Letacom", href: "/about" }}
      />

      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            eyebrow="Sectors"
            title="Industries We Serve"
            subtitle="Each sector has unique procurement challenges. We bring deep category knowledge, verified supplier networks, and Africa-focused logistics to every engagement."
            centered
          />
          <p className="max-w-3xl mx-auto text-center text-graphite-600 leading-relaxed mb-10">
            Whether you are setting up a new brewery, expanding a production line, equipping a logistics fleet, or rolling out branded distribution assets — Letacom delivers the equipment, consumables, and systems you need, sourced globally and delivered across Africa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {industries.map((industry) => (
              <IndustryCard key={industry.href} {...industry} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not sure where to start? Tell us what you need."
        subtitle="Submit your procurement requirement and our team will match you with the right solution — regardless of industry."
        ctaLabel="Submit a Requirement"
        ctaHref="/request-quote"
      />
    </>
  );
}
