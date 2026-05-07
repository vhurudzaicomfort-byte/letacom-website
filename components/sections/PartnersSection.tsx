import Image from "next/image";
import { images } from "@/lib/images";

// Categories Letacom serves. Per-supplier brand attribution is intentionally
// omitted — the section communicates breadth of capability, not a logo wall.

const categories: { title: string; description: string }[] = [
  {
    title: "Equipment & Systems",
    description:
      "Industrial machinery, draught and process systems, and integrated production equipment for African operators.",
  },
  {
    title: "Brewery & Beverage",
    description:
      "Brewing, fermentation, packaging, and dispense — engineered, supplied, and supported end-to-end.",
  },
  {
    title: "Tools & Workshop",
    description:
      "Professional hand tools, power tools, and workshop infrastructure for maintenance and production teams.",
  },
  {
    title: "IT & Point-of-Sale",
    description:
      "Enterprise IT, networking, and POS hardware for distributors, retailers, and operations across distributed sites.",
  },
  {
    title: "Consumables & Packaging",
    description:
      "Branded glassware, packaging, printed materials, and recurring consumables programs at scale.",
  },
  {
    title: "Hospitality & Retail",
    description:
      "Bar, restaurant, and retail-floor equipment and consumables — built for premium operators.",
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
            What We Cover
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-graphite-900 leading-tight tracking-tight">
            Engineering, supply, and lifecycle support across
            Southern Africa.
          </h2>
          <p className="mt-4 text-lg text-ink-muted leading-relaxed">
            Six interlocking capability areas — industrial equipment, brewery
            systems, tools, IT and POS, consumables, and hospitality — delivered
            and supported by one accountable team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 reveal-stagger">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="reveal group relative pt-7 border-t border-graphite-300/40"
            >
              {/* Top accent line */}
              <span
                aria-hidden
                className="absolute top-0 left-0 h-px bg-accent-500 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] w-3 group-hover:w-12"
              />
              <h3 className="font-heading font-bold text-lg text-graphite-900 mb-3 tracking-tight">
                {cat.title}
              </h3>
              <p className="text-sm md:text-[15px] text-ink-muted leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
