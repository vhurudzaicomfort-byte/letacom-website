import Link from "next/link";
import { images } from "@/lib/images";
import { HomeHero } from "@/components/sections/HomeHero";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { IndustryFeatureGrid } from "@/components/sections/IndustryFeatureGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { InViewVideo } from "@/components/effects/InViewVideo";
import {
  ArrowRightIcon,
  WhatsAppIcon,
  AfricaIcon,
  ClockIcon,
  HandshakeIcon,
  SourcingIcon,
} from "@/components/icons";

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Letacom South Africa",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://letacom.co.za",
  logo: (process.env.NEXT_PUBLIC_SITE_URL || "https://letacom.co.za") + "/brand/letacom-logo.png",
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

const capabilities = [
  {
    title: "Local Design & Manufacturing",
    description:
      "We design, fabricate, and finish bespoke components and systems in South Africa — engineered for African operating conditions, lead times, and service realities.",
  },
  {
    title: "Engineering & Systems Integration",
    description:
      "We integrate hardware, software, and services into unified working systems — draught dispense, process automation, production lines — tested and assembled before deployment.",
  },
  {
    title: "Customisation & Build",
    description:
      "Solutions engineered to client specification — draught system layouts, processing line configurations, branded consumables programs, and bespoke fabrication.",
  },
  {
    title: "Installation, Training & Support",
    description:
      "Site deployment, on-site operator training, after-sales support, spares programs, and long-term maintenance partnerships across the asset lifecycle.",
  },
  {
    title: "Local & Global Partnerships",
    description:
      "Trusted partnerships with local fabricators, technicians, and international OEMs across the supply chain — local accountability, global capability.",
  },
  {
    title: "Sourcing & Procurement",
    description:
      "When global sourcing is the right answer for your spec, we identify, evaluate, and procure from verified manufacturers across Asia, Europe, and beyond.",
  },
];

const supplyColumns = [
  {
    title: "Equipment & Systems",
    items: [
      "Processing & production machinery",
      "Draught dispense systems",
      "Automation & control systems",
      "Refrigeration & temperature control",
    ],
    browseHref: "/products/equipment",
    browseLabel: "Browse equipment",
  },
  {
    title: "Tools & Consumables",
    items: [
      "Industrial hand & power tools",
      "Workshop essentials",
      "Branded glassware & packaging",
      "Safety & PPE equipment",
    ],
    browseHref: "/products/tools",
    browseLabel: "Browse tools",
  },
  {
    title: "IT Hardware & Software",
    items: [
      "Enterprise IT infrastructure",
      "POS & distribution systems",
      "Fleet tracking solutions",
      "Business management software",
    ],
    browseHref: "/products/it-hardware-software",
    browseLabel: "Browse IT",
  },
];

const advantages = [
  {
    icon: HandshakeIcon,
    title: "Locally Built",
    description:
      "In-country design, fabrication, and assembly. Systems that work in our climate, our infrastructure, and our operating realities.",
  },
  {
    icon: AfricaIcon,
    title: "Africa-Focused",
    description:
      "Deep understanding of African industrial markets, logistics corridors, regulatory landscapes, and on-the-ground service.",
  },
  {
    icon: ClockIcon,
    title: "End-to-End Lifecycle",
    description:
      "Installation, operator training, spares, and long-term maintenance — one accountable team across the entire asset lifecycle.",
  },
  {
    icon: SourcingIcon,
    title: "Trusted Global Sourcing",
    description:
      "When the spec calls for it, direct relationships with verified OEMs across Asia and Europe — competitive pricing, reliable quality.",
  },
];

const useCases = [
  {
    title: "Brewery draught rollout",
    body:
      "Equipping a regional brewery with a complete draught dispense rollout — sourced globally, assembled locally, with on-site operator training across multiple sites.",
  },
  {
    title: "Custom processing components",
    body:
      "Custom-fabricating replacement processing components for a beverage manufacturer — designed and built in South Africa to match plant specs and turnaround windows.",
  },
  {
    title: "Multi-country branded consumables",
    body:
      "Supplying and rolling out branded consumables across a multi-country distribution network — with ongoing logistics, restock, and aftermarket support.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
      />

      <HomeHero />

      {/* Industries — asymmetric editorial grid */}
      <section className="section-padding bg-graphite-100">
        <div className="container-site">
          <SectionHeader
            eyebrow="Industries"
            title="Industries We Serve"
            subtitle="Specialised procurement and engineering for Africa's core industrial sectors."
          />
          <IndustryFeatureGrid />
        </div>
      </section>

      {/* Six Capabilities — numerals replace icons */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            eyebrow="How We Work"
            title="Six Capabilities, One Partner"
            subtitle="From global sourcing through local manufacturing, testing, training, and long-term support — one team for the full lifecycle."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12 reveal-stagger">
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                className="reveal group relative pt-6 border-t border-graphite-300/40"
              >
                <span
                  aria-hidden
                  className="absolute top-0 left-0 h-px bg-accent-500 w-3 group-hover:w-12 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                <p className="font-heading text-3xl text-ink-subtle font-bold tabular-nums leading-none mb-5">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading font-bold text-xl text-graphite-900 tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-base text-ink-muted leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Suppliers — premium dealers, distributors, platinum shoppers */}
      <PartnersSection />

      {/* What We Supply — refreshed cards (hairline dividers, accent line, browse link) */}
      <section className="section-padding bg-graphite-100">
        <div className="container-site">
          <SectionHeader title="What We Supply" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 reveal-stagger">
            {supplyColumns.map((col) => (
              <div
                key={col.title}
                className="reveal group relative bg-white p-7 md:p-8"
              >
                <span
                  aria-hidden
                  className="absolute top-0 left-0 h-px bg-accent-500 w-3 group-hover:w-12 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                <h3 className="font-heading font-bold text-lg text-graphite-900 mb-5 tracking-tight">
                  {col.title}
                </h3>
                <ul>
                  {col.items.map((item, idx) => (
                    <li
                      key={item}
                      className={`py-3 text-[15px] font-medium text-graphite-900 ${
                        idx > 0 ? "border-t border-graphite-300/50" : ""
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={col.browseHref}
                  className="link-underline inline-flex items-center gap-1.5 mt-6 text-sm font-heading font-medium text-primary-700 hover:text-accent-500 transition-colors"
                >
                  {col.browseLabel}
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Letacom Advantage */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeader title="The Letacom Advantage" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 reveal-stagger">
            {advantages.map((item) => (
              <div key={item.title} className="reveal text-center">
                <div className="w-14 h-14 mx-auto flex items-center justify-center bg-primary-900/[0.04] rounded text-primary-700 mb-5">
                  <item.icon size={28} />
                </div>
                <h3 className="font-heading font-medium text-base text-graphite-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solution — image flipped LEFT, video clip on hover */}
      <section className="relative section-padding bg-primary-900 noise-overlay overflow-hidden">
        <div className="container-site relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="zoom-on-hover aspect-video relative rounded-md overflow-hidden order-2 lg:order-1 reveal">
              <InViewVideo
                src="/media/video/draught-pour.mp4"
                poster="/media/featured-draught-poster.jpg"
                className="zoom-target absolute inset-0 w-full h-full object-cover"
                ariaLabel="Close-up of a draught beer pour from a brewery dispense tap"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(8,22,40,0.45) 0%, rgba(8,22,40,0) 50%)",
                }}
              />
            </div>
            <div className="order-1 lg:order-2 reveal">
              <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-accent-300 mb-3">
                Featured Solution
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
                Complete Draught Beer Systems for African Beverage Operators
              </h2>
              <p className="mt-5 text-lg text-on-navy leading-relaxed max-w-xl">
                From font towers and python lines to CO₂ regulators and FOB
                detectors — we supply complete draught dispense systems
                designed, assembled, and serviced for the African market.
                Sourced from verified OEMs, customised locally, and delivered
                with on-site operator training and ongoing spares support.
              </p>
              <Link
                href="/request-quote?category=systems"
                className="hover-lift group inline-flex items-center gap-2 mt-7 px-6 py-3 bg-accent-500 text-white font-heading font-medium rounded shadow-[0_8px_30px_-8px_rgba(226,88,34,0.5)] hover:bg-accent-600"
              >
                Request a Solution Brief
                <ArrowRightIcon
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What an Engagement Looks Like — reframed copy (no more "illustrative") */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            title="What an Engagement Looks Like"
            subtitle="A typical Letacom rollout, from inquiry to long-term support."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 reveal-stagger">
            {useCases.map((u, i) => (
              <div
                key={u.title}
                className="reveal group relative bg-white border border-graphite-300/40 rounded p-7 hover:border-accent-500/60 hover:shadow-[0_24px_60px_-30px_rgba(10,22,51,0.25)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              >
                <p className="font-heading text-3xl text-ink-subtle font-bold tabular-nums leading-none mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading font-bold text-lg text-graphite-900 tracking-tight">
                  {u.title}
                </h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  {u.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — animated connector line */}
      <section className="section-padding bg-graphite-100">
        <div className="container-site">
          <SectionHeader
            title="From Inquiry to Long-Term Support"
            subtitle="A six-step procurement and delivery process that runs from your first message to your tenth year of partnership."
            centered
          />
          <ProcessTimeline />
        </div>
      </section>

      {/* Cape-to-Cairo pull quote — moved up out of the footer for visibility */}
      <section className="bg-white border-t border-graphite-300/40 py-14 md:py-20">
        <div className="container-site">
          <p className="reveal text-center font-heading text-2xl md:text-3xl lg:text-4xl text-graphite-900 max-w-3xl mx-auto leading-relaxed tracking-tight">
            <span className="text-accent-500">“</span>
            Cape to Cairo. Designed, built, and supported on the ground.
            <span className="text-accent-500">”</span>
          </p>
        </div>
      </section>

      {/* Final CTA — rewritten copy + WhatsApp secondary link */}
      <section className="pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-14 lg:pb-16 bg-primary-900 border-t border-primary-700">
        <div className="container-site text-center">
          <h2 className="reveal font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
            Have a spec? Send it.
          </h2>
          <p className="reveal mt-5 text-lg text-on-navy max-w-xl mx-auto leading-relaxed">
            Submit your requirement — our team responds within one business day.
          </p>
          <div className="reveal mt-9 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/request-quote"
              className="hover-lift group inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 text-white font-heading font-medium rounded shadow-[0_8px_30px_-8px_rgba(226,88,34,0.5)] hover:bg-accent-600"
            >
              Request a Quote
              <ArrowRightIcon
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <a
              href="https://wa.me/27630769938"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-2 text-on-navy hover:text-white transition-colors font-heading font-medium"
            >
              <WhatsAppIcon size={18} />
              <span>Or WhatsApp us directly</span>
              <ArrowRightIcon size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
