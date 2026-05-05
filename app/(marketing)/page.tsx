import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { IndustryCard } from "@/components/sections/IndustryCard";
import { CTABanner } from "@/components/sections/CTABanner";
import {
  EquipmentIcon,
  ToolsIcon,
  ITHardwareIcon,
  AfricaIcon,
  GlobeIcon,
  ShieldIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@/components/icons";
import Link from "next/link";

const industries = [
  {
    name: "Breweries & Beverage",
    shortDescription:
      "Brewing equipment, fermentation systems, draught dispense, kegs, bottling components, and packaging.",
    href: "/industries/breweries",
    iconName: "BreweryIcon",
  },
  {
    name: "Manufacturing & Processing",
    shortDescription:
      "Production line equipment, automation systems, precision tools, spare parts, and processing machinery.",
    href: "/industries/manufacturing",
    iconName: "ManufacturingIcon",
  },
  {
    name: "Transport & Logistics",
    shortDescription:
      "Fleet support consumables, warehouse equipment, tracking systems, and branded fleet items.",
    href: "/industries/transport-logistics",
    iconName: "LogisticsIcon",
  },
  {
    name: "Sales & Distribution",
    shortDescription:
      "Point-of-sale equipment, branded consumables, distribution tools, and IT hardware for distributors.",
    href: "/industries/sales-distribution",
    iconName: "DistributionIcon",
  },
];

const supplyColumns = [
  {
    title: "Equipment & Systems",
    icon: EquipmentIcon,
    items: [
      "Processing & production machinery",
      "Draught dispense systems",
      "Automation & control systems",
      "Refrigeration & temperature control",
    ],
  },
  {
    title: "Tools & Consumables",
    icon: ToolsIcon,
    items: [
      "Industrial hand & power tools",
      "Workshop essentials",
      "Branded glassware & packaging",
      "Safety & PPE equipment",
    ],
  },
  {
    title: "IT Hardware & Software",
    icon: ITHardwareIcon,
    items: [
      "Enterprise IT infrastructure",
      "POS & distribution systems",
      "Fleet tracking solutions",
      "Business management software",
    ],
  },
];

const advantages = [
  {
    icon: AfricaIcon,
    title: "Africa-Focused Sourcing",
    description:
      "Deep understanding of African industrial markets, logistics corridors, and regulatory landscapes.",
  },
  {
    icon: GlobeIcon,
    title: "China Manufacturing Partnerships",
    description:
      "Direct relationships with verified Chinese manufacturers for competitive pricing and reliable quality.",
  },
  {
    icon: ShieldIcon,
    title: "Multi-Sector Expertise",
    description:
      "Cross-industry procurement knowledge spanning breweries, manufacturing, logistics, and distribution.",
  },
  {
    icon: ClockIcon,
    title: "End-to-End Support",
    description:
      "From initial sourcing and procurement through delivery, installation support, and after-sales spares.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Inquire",
    description: "Submit your procurement requirement through our RFQ form or direct contact.",
  },
  {
    step: "02",
    title: "Source",
    description: "Our team identifies optimal suppliers from our verified global network.",
  },
  {
    step: "03",
    title: "Deliver",
    description: "Coordinated logistics and shipping to your facility across Africa.",
  },
  {
    step: "04",
    title: "Support",
    description: "Ongoing after-sales support, spares availability, and future procurement planning.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        eyebrow="Industrial Supply & Procurement"
        title="Engineered for Africa. Sourced Globally."
        subtitle="Letacom is your industrial supply and procurement partner — bridging Chinese manufacturing capability with African industrial demand across breweries, manufacturing, transport, and distribution."
        primaryCta={{ label: "Request a Quote", href: "/request-quote" }}
        secondaryCta={{ label: "Explore Industries", href: "/industries" }}
      />

      {/* Trust Bar */}
      <section className="bg-graphite-100 py-4 border-y border-graphite-300/30">
        <div className="container-site">
          <p className="text-center text-sm text-graphite-500 font-medium">
            Serving breweries, manufacturers, logistics operators, and distribution networks across Southern Africa
          </p>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            eyebrow="Industries"
            title="Industries We Serve"
            subtitle="Specialized procurement solutions for Africa's core industrial sectors."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {industries.map((industry) => (
              <IndustryCard key={industry.href} {...industry} />
            ))}
          </div>
        </div>
      </section>

      {/* What We Supply */}
      <section className="section-padding bg-graphite-100">
        <div className="container-site">
          <SectionHeader
            eyebrow="Supply Categories"
            title="What We Supply"
            subtitle="Comprehensive industrial procurement spanning equipment, tools, consumables, and technology."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {supplyColumns.map((col) => (
              <div
                key={col.title}
                className="bg-white rounded p-6 border border-graphite-300/40"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-primary-900/5 rounded text-primary-700 mb-4">
                  <col.icon size={24} />
                </div>
                <h3 className="font-heading font-medium text-lg text-graphite-900 mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-graphite-700">
                      <CheckIcon size={14} className="text-accent-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Letacom Advantage */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            eyebrow="Why Letacom"
            title="The Letacom Advantage"
            subtitle="What makes us the procurement partner of choice for African industry."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 mx-auto flex items-center justify-center bg-primary-900/5 rounded text-primary-700 mb-4">
                  <item.icon size={28} />
                </div>
                <h3 className="font-heading font-medium text-base text-graphite-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-graphite-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solution Spotlight */}
      <section className="section-padding bg-primary-900">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-heading text-xs font-medium uppercase tracking-widest text-accent-300 mb-3">
                Featured Solution
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight">
                Complete Draught Beer Systems for African Beverage Operators
              </h2>
              <p className="mt-4 text-primary-300 leading-relaxed">
                From font towers and python lines to CO₂ regulators and FOB
                detectors — we supply complete draught dispense systems designed
                for the African market. Sourced from verified manufacturers,
                delivered with installation guidance and ongoing spares support.
              </p>
              <Link
                href="/request-quote?category=systems"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-accent-500 text-white font-heading font-medium rounded hover:bg-accent-600 transition-colors"
              >
                Request a Solution Brief
                <ArrowRightIcon size={18} />
              </Link>
            </div>
            <div className="aspect-video bg-primary-700/50 rounded flex items-center justify-center">
              <span className="text-sm text-primary-300">[Draught System Image]</span>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            eyebrow="Process"
            title="How We Work"
            subtitle="A streamlined procurement process from inquiry to ongoing support."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item) => (
              <div key={item.step} className="relative">
                <span className="font-heading text-5xl font-bold text-graphite-100">
                  {item.step}
                </span>
                <h3 className="font-heading font-medium text-lg text-graphite-900 mt-2">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-graphite-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        title="Have a procurement need? Let's talk."
        subtitle="Submit your requirement and our team will respond within one business day."
        ctaLabel="Request a Quote"
        ctaHref="/request-quote"
      />
    </>
  );
}
