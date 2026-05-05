import type { Metadata } from "next";
import Link from "next/link";
import { images } from "@/lib/images";
import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import {
  ArrowRightIcon,
  EquipmentIcon,
  AccessoriesIcon,
  SparePartsIcon,
  ToolsIcon,
  SystemsIcon,
  ITHardwareIcon,
  BrandedConsumablesIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Products | Letacom",
  description:
    "Browse Letacom's curated product solutions — industrial equipment, spare parts, tools, systems, and branded consumables sourced from verified manufacturers for African operations.",
};

const categories = [
  {
    slug: "equipment",
    name: "Industrial Equipment",
    description:
      "Production machinery, processing equipment, and industrial systems for manufacturing and brewing operations.",
    Icon: EquipmentIcon,
  },
  {
    slug: "accessories",
    name: "Accessories",
    description:
      "Complementary components, fittings, and add-ons for industrial equipment and systems.",
    Icon: AccessoriesIcon,
  },
  {
    slug: "spare-parts",
    name: "Spare Parts",
    description:
      "OEM and aftermarket spare parts to keep your operations running without downtime.",
    Icon: SparePartsIcon,
  },
  {
    slug: "tools",
    name: "Tools & Workshop",
    description:
      "Hand tools, power tools, workshop equipment, and measurement instruments.",
    Icon: ToolsIcon,
  },
  {
    slug: "systems",
    name: "Systems",
    description:
      "Complete integrated systems including draught dispense, automation, and processing lines.",
    Icon: SystemsIcon,
  },
  {
    slug: "it-hardware-software",
    name: "IT Hardware & Software",
    description:
      "Enterprise IT, POS systems, fleet tracking, and business management solutions.",
    Icon: ITHardwareIcon,
  },
  {
    slug: "branded-consumables",
    name: "Branded Consumables",
    description:
      "Custom-branded glassware, packaging, promotional items, and disposable supplies.",
    Icon: BrandedConsumablesIcon,
  },
];

export default function ProductsPage() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Product Catalogue"
        title="Industrial Products, Sourced for Africa"
        subtitle="Browse our curated product categories. Every item is sourced from verified manufacturers and available through our procurement process."
        backgroundImage={images.heroProducts}
      />

      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            eyebrow="Categories"
            title="What We Supply"
            subtitle="Explore our product categories to find the industrial solutions your operations need."
            centered
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const { Icon } = category;
              return (
                <Link
                  key={category.slug}
                  href={`/products/${category.slug}`}
                  className="group block bg-white border border-graphite-300/40 rounded p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 text-primary-500 mb-4">
                    <Icon />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-graphite-900 group-hover:text-primary-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-graphite-500 leading-relaxed">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary-500 group-hover:text-primary-700 transition-colors">
                    Explore Category
                    <ArrowRightIcon />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Don't see what you need?"
        subtitle="We source beyond our catalogue. Tell us what you're looking for and we'll find it."
        ctaLabel="Request Custom Sourcing"
        ctaHref="/request-quote"
      />
    </>
  );
}
