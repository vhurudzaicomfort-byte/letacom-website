import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { IndustryCard } from "@/components/sections/IndustryCard";
import { CTABanner } from "@/components/sections/CTABanner";
import {
  EquipmentIcon,
  AccessoriesIcon,
  SystemsIcon,
  ITHardwareIcon,
  ToolsIcon,
  AfricaIcon,
  ShieldIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckIcon,
  SourcingIcon,
  DesignIcon,
  TestingIcon,
  CustomisationIcon,
  PartnershipIcon,
  SupportIcon,
  HandshakeIcon,
} from "@/components/icons";

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Letacom South Africa",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://letacom.co.za",
  logo: (process.env.NEXT_PUBLIC_SITE_URL || "https://letacom.co.za") + "/og-logo.png",
  foundingDate: "2024",
  foundingLocation: "Pretoria, South Africa",
  description:
    "Industrial supply and procurement partner for breweries, manufacturing, transport and logistics, and distribution across Africa. Sourced globally. Designed, built, and supported locally.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "47 Meadow Avenue",
    addressLocality: "Equestria",
    addressRegion: "Pretoria",
    postalCode: "0184",
    addressCountry: "ZA",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+27-63-076-9938",
      contactType: "sales",
      email: "sales@letacom.co.za",
      areaServed: "Africa",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [],
};

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

const quickPillars = [
  { icon: EquipmentIcon, label: "Equipment", href: "/products/equipment" },
  { icon: AccessoriesIcon, label: "Accessories", href: "/products/accessories" },
  { icon: SystemsIcon, label: "Systems", href: "/products/systems" },
  { icon: ITHardwareIcon, label: "IT & Software", href: "/products/it-hardware-software" },
];

const capabilities = [
  {
    icon: SourcingIcon,
    title: "Global Sourcing",
    description:
      "Strategic procurement from manufacturers across Asia, Europe, and beyond. World-class equipment and components for African industry.",
  },
  {
    icon: DesignIcon,
    title: "Local Design & Manufacturing",
    description:
      "In-country design and manufacturing capability for components, fittings, and bespoke equipment tailored to African operating conditions.",
  },
  {
    icon: TestingIcon,
    title: "Local Testing & Assembly",
    description:
      "Equipment tested, assembled, and quality-verified locally before deployment, ensuring reliability under real operating conditions.",
  },
  {
    icon: CustomisationIcon,
    title: "Customisation",
    description:
      "Solutions engineered to client specification — from draught system layouts to processing line configurations and branded consumables.",
  },
  {
    icon: PartnershipIcon,
    title: "Local & Global Partnerships",
    description:
      "Trusted partnerships with local fabricators, technicians, and international OEMs across the supply chain.",
  },
  {
    icon: SupportIcon,
    title: "Support, Consulting & Training",
    description:
      "End-to-end aftercare: installation support, technical consulting, operator training, spare parts, long-term maintenance partnerships.",
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
    title: "Africa-Focused",
    description:
      "Deep understanding of African industrial markets, logistics corridors, and regulatory landscapes.",
  },
  {
    icon: SourcingIcon,
    title: "Globally Sourced",
    description:
      "Direct relationships with verified OEMs across Asia, Europe, and beyond — competitive pricing, reliable quality.",
  },
  {
    icon: HandshakeIcon,
    title: "Locally Built",
    description:
      "In-country design, manufacturing, and assembly. Equipment that works in our climate and operating realities.",
  },
  {
    icon: ClockIcon,
    title: "End-to-End Support",
    description:
      "From sourcing and procurement through installation, operator training, spares, and long-term maintenance.",
  },
];

const useCases = [
  {
    icon: SystemsIcon,
    title: "Brewery draught rollout",
    body:
      "Equipping a regional brewery with a complete draught dispense rollout — sourced globally, assembled locally, with on-site operator training across multiple sites.",
  },
  {
    icon: DesignIcon,
    title: "Custom processing components",
    body:
      "Custom-fabricating replacement processing components for a beverage manufacturer — designed and built in South Africa to match plant specs and turnaround windows.",
  },
  {
    icon: PartnershipIcon,
    title: "Multi-country branded consumables",
    body:
      "Supplying and rolling out branded consumables across a multi-country distribution network — with ongoing logistics, restock, and aftermarket support.",
  },
];

const processSteps = [
  { step: "01", title: "Inquire", description: "Submit your requirement via our RFQ form, email, or WhatsApp." },
  { step: "02", title: "Source / Design", description: "We source globally and design locally — to your specification." },
  { step: "03", title: "Test / Assemble", description: "In-country quality verification and assembly before deployment." },
  { step: "04", title: "Deliver", description: "Coordinated logistics and shipping to your facility across Africa." },
  { step: "05", title: "Train", description: "On-site operator training and skills transfer with every solution." },
  { step: "06", title: "Support", description: "Long-term aftercare, spares, and maintenance partnership." },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
      />

      {/* Hero */}
      <Hero
        eyebrow="Industrial Supply & Procurement"
        title="Industrial Supply & Procurement Partner for Breweries, Manufacturing & Logistics Across Africa"
        subtitle="Founded in 2024 in Pretoria. We source globally, design and build locally, and support every solution end-to-end — continuing Africa's oldest tradition of trade, on its own terms."
        primaryCta={{ label: "Request a Quote", href: "/request-quote" }}
        secondaryCta={{ label: "Our Story", href: "/about" }}
        backgroundImage={images.heroMain}
      />

      {/* Trust Bar */}
      <section className="bg-graphite-100 py-4 border-y border-graphite-300/30">
        <div className="container-site">
          <p className="text-center text-sm text-graphite-500 font-medium">
            Serving breweries, manufacturers, logistics operators, and distribution networks across Southern Africa
          </p>
        </div>
      </section>

      {/* 4 Capability Pillars Strip */}
      <section className="py-10 md:py-14">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {quickPillars.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="group flex items-center gap-3 px-5 py-4 bg-white border border-graphite-300/40 rounded hover:border-primary-500 hover:bg-primary-900/[0.02] transition-colors"
              >
                <span className="w-9 h-9 flex items-center justify-center rounded bg-primary-900/5 text-primary-700 group-hover:bg-accent-500/10 group-hover:text-accent-500 transition-colors">
                  <p.icon size={20} />
                </span>
                <span className="font-heading font-medium text-sm text-graphite-900">
                  {p.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-graphite-100">
        <div className="container-site">
          <SectionHeader
            eyebrow="Industries"
            title="Industries We Serve"
            subtitle="Specialised procurement and engineering for Africa's core industrial sectors."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {industries.map((industry) => (
              <IndustryCard key={industry.href} {...industry} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work — Six Capability Pillars */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            eyebrow="How We Work"
            title="Six Capabilities, One Partner"
            subtitle="From global sourcing through local manufacturing, testing, training, and long-term support — one team for the full lifecycle."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded p-6 border border-graphite-300/40 hover:border-primary-500 transition-colors"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-primary-900/5 rounded text-primary-700 mb-4">
                  <c.icon size={24} />
                </div>
                <h3 className="font-heading font-medium text-lg text-graphite-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-graphite-500 leading-relaxed">
                  {c.description}
                </p>
              </div>
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
            subtitle="Industrial procurement spanning equipment, tools, consumables, and technology — curated to inquiry, not catalogued for self-service."
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
                detectors — we supply complete draught dispense systems
                designed, assembled, and serviced for the African market.
                Sourced from verified OEMs, customised locally, and delivered
                with on-site operator training and ongoing spares support.
              </p>
              <Link
                href="/request-quote?category=systems"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-accent-500 text-white font-heading font-medium rounded hover:bg-accent-600 transition-colors"
              >
                Request a Solution Brief
                <ArrowRightIcon size={18} />
              </Link>
            </div>
            <div className="aspect-video relative rounded overflow-hidden">
              <Image
                src={images.draughtSystem}
                alt="Complete draught beer dispense system"
                fill
                className="object-cover rounded"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Scenarios */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            eyebrow="In Practice"
            title="Real Procurement, Real Outcomes"
            subtitle="Three illustrative scenarios of how Letacom partners with African industrial operators."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="bg-white border border-graphite-300/40 rounded p-6"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded bg-accent-500/10 text-accent-500 mb-4">
                  <u.icon size={24} />
                </div>
                <h3 className="font-heading font-medium text-lg text-graphite-900">
                  {u.title}
                </h3>
                <p className="mt-2 text-sm text-graphite-700 leading-relaxed">
                  {u.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work — Process */}
      <section className="section-padding bg-graphite-100">
        <div className="container-site">
          <SectionHeader
            eyebrow="Process"
            title="From Inquiry to Long-Term Support"
            subtitle="A six-step procurement and delivery process that runs from your first message to your tenth year of partnership."
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {processSteps.map((item) => (
              <div key={item.step} className="relative">
                <span className="font-heading text-4xl lg:text-5xl font-bold text-graphite-300/70">
                  {item.step}
                </span>
                <h3 className="font-heading font-medium text-base text-graphite-900 mt-2">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-graphite-500 leading-relaxed">
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
