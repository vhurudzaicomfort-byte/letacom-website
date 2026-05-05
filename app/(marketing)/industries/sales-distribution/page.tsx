import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { images } from "@/lib/images";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { CheckIcon } from "@/components/icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sales & Distribution Procurement | Letacom",
  description:
    "Equipment for sales and distribution networks — POS displays, branded fridges, promotional materials, handheld devices, and route-to-market technology across Africa.",
};

const supplyItems = [
  "Point-of-Sale Display Equipment",
  "Branded Fridges & Coolers",
  "Promotional Materials & Signage",
  "Route Planning & Distribution Software",
  "Handheld Devices & Scanners",
  "Branded Uniforms & Merchandise",
  "Delivery Vehicle Accessories",
  "Inventory Management Systems",
  "Cash Handling Equipment",
  "Customer Engagement Tools",
];

const scenarios = [
  {
    title: "Distributor Onboarding Kit",
    description:
      "Standardized procurement packages for new distributor partners — branded fridges, POS displays, uniforms, handheld devices, and signage delivered as a ready-to-deploy kit for each new territory.",
  },
  {
    title: "Brand Visibility Program",
    description:
      "Large-scale rollout of branded assets across retail outlets — illuminated signage, counter displays, cooler branding, promotional materials, and merchandise sourced and delivered at volume.",
  },
  {
    title: "Route-to-Market Technology",
    description:
      "Procurement of handheld order-capture devices, GPS-enabled tablets, mobile printers, and vehicle tracking units to digitise and optimise your distribution routes.",
  },
];

export default function SalesDistributionPage() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Sales & Distribution"
        title="Equipment for Sales & Distribution Networks"
        subtitle="We supply the physical and digital assets that power distribution networks — from branded coolers and POS displays to handheld devices and route planning technology, delivered at scale across African markets."
        primaryCta={{ label: "Request a Quote", href: "/request-quote" }}
        secondaryCta={{ label: "All Industries", href: "/industries" }}
        backgroundImage={images.distribution}
      />

      {/* What We Supply */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            eyebrow="Supply Scope"
            title="What We Supply"
            subtitle="Assets, equipment, and technology for sales teams and distribution networks."
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
            subtitle="How sales and distribution organisations typically engage with our procurement services."
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
            Scaling your distribution network?
          </h2>
          <p className="text-graphite-600 max-w-xl mx-auto mb-6">
            Whether you are onboarding new distributors or refreshing brand assets across thousands of outlets, submit your requirement and we will deliver a procurement plan.
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
