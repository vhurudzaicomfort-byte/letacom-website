import Image from "next/image";
import { images } from "@/lib/images";

// Categorized partner / supplier showcase. Placeholder text wordmarks until real
// partner logos are approved for display — flagged in CREDITS / README.

const categories: { title: string; partners: string[] }[] = [
  {
    title: "Equipment & Systems",
    partners: ["DOOSAN", "KOMATSU", "SIEMENS", "ABB INDUSTRIAL", "HITACHI"],
  },
  {
    title: "Brewery & Beverage",
    partners: ["BREWTECH", "PADOVAN", "DELLA TOFFOLA", "KRONES PARTS"],
  },
  {
    title: "Tools & Workshop",
    partners: ["MAKITA", "STANLEY", "BOSCH PRO", "DEWALT", "FLUKE"],
  },
  {
    title: "IT & POS",
    partners: ["HP ENTERPRISE", "DELL POS", "EPSON RETAIL", "CISCO MERAKI"],
  },
  {
    title: "Consumables & Packaging",
    partners: ["ARDAGH", "CONSOL GLASS", "MONDI BRAND", "GLOBAL PRINT"],
  },
  {
    title: "Hospitality & Retail",
    partners: ["RIEDEL", "STÖLZLE", "ROSENTHAL", "DURALEX"],
  },
];

export function PartnersSection() {
  return (
    <section className="relative section-padding bg-white overflow-hidden">
      {/* Subtle backdrop */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <Image
          src={images.partnersHandshake}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative container-site">
        <div className="max-w-3xl mb-12 md:mb-16 reveal">
          <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-accent-500 mb-3">
            Our Partners &amp; Suppliers
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-graphite-900 leading-tight tracking-tight">
            Premium dealers, distributors, and platinum shoppers across
            Southern Africa.
          </h2>
          <p className="mt-4 text-lg text-ink-muted leading-relaxed">
            We work with leading global and local suppliers across products,
            consumables, equipment, systems, accessories, hospitality, and
            retail — bringing world-class engineering to African industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 reveal-stagger">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="reveal relative bg-white border-t border-graphite-300/40 pt-6"
            >
              {/* Top accent line */}
              <span className="absolute top-0 left-0 h-px bg-accent-500 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] w-3 group-hover:w-12" />
              <p className="font-heading text-[11px] font-medium uppercase tracking-[0.18em] text-ink-subtle mb-4">
                {cat.title}
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {cat.partners.map((p) => (
                  <span
                    key={p}
                    className="partner-logo font-heading text-sm font-bold tracking-[0.14em] text-graphite-700 select-none cursor-default"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-sm text-ink-subtle italic">
          Partner names shown for category illustration. Public partner
          attribution is added per supplier agreement.
        </p>
      </div>
    </section>
  );
}
