import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import { images } from "@/lib/images";

interface IndustryItem {
  index: string;
  name: string;
  description: string;
  href: string;
  image: string;
}

const breweries: IndustryItem = {
  index: "01",
  name: "Breweries & Beverage",
  description:
    "Brewing equipment, fermentation systems, draught dispense, kegs, bottling components, and packaging.",
  href: "/industries/breweries",
  image: images.brewery,
};

const manufacturing: IndustryItem = {
  index: "02",
  name: "Manufacturing & Processing",
  description:
    "Production line equipment, automation systems, precision tools, and processing machinery.",
  href: "/industries/manufacturing",
  image: images.manufacturing,
};

const transport: IndustryItem = {
  index: "03",
  name: "Transport & Logistics",
  description:
    "Fleet support consumables, warehouse equipment, tracking systems, and branded fleet items.",
  href: "/industries/transport-logistics",
  image: images.logistics,
};

const distribution: IndustryItem = {
  index: "04",
  name: "Sales & Distribution",
  description:
    "Point-of-sale equipment, branded consumables, distribution tools, and IT hardware for distributors.",
  href: "/industries/sales-distribution",
  image: images.distribution,
};

function FeatureCard({
  item,
  className = "",
  imageSizes,
  large = false,
}: {
  item: IndustryItem;
  className?: string;
  imageSizes: string;
  large?: boolean;
}) {
  return (
    <Link
      href={item.href}
      className={`group zoom-on-hover relative overflow-hidden rounded-md isolate block ${className}`}
    >
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes={imageSizes}
        className="zoom-target object-cover"
      />
      {/* Bottom-up dark gradient — text always sits on the bottom */}
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-90"
        style={{
          background:
            "linear-gradient(to top, rgba(8,22,40,0.92) 0%, rgba(8,22,40,0.55) 45%, rgba(8,22,40,0.2) 80%)",
        }}
      />
      {/* Subtle navy wash on hover, deepens overall */}
      <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/15 transition-colors duration-500" />

      <div
        className={`relative h-full flex flex-col justify-end ${
          large ? "p-8 md:p-10 lg:p-12" : "p-6 md:p-8"
        }`}
      >
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-300 mb-3">
          {item.index} · Industry
        </p>
        <h3
          className={`font-heading font-bold text-white leading-tight tracking-tight ${
            large
              ? "text-3xl md:text-4xl lg:text-5xl"
              : "text-2xl md:text-3xl"
          }`}
        >
          {item.name}
        </h3>
        <p
          className={`mt-3 text-on-navy-muted leading-relaxed ${
            large ? "text-base md:text-lg max-w-xl" : "text-sm md:text-base max-w-md"
          }`}
        >
          {item.description}
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-on-navy font-heading text-sm font-medium">
          <span>Explore industry</span>
          <ArrowRightIcon
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}

export function IndustryFeatureGrid() {
  return (
    <div className="grid grid-cols-12 gap-4 lg:gap-6 reveal-stagger">
      {/* Breweries — large feature card, spans 7 cols × 2 rows on desktop */}
      <div className="col-span-12 lg:col-span-7 lg:row-span-2 reveal min-h-[420px] lg:min-h-[640px]">
        <FeatureCard
          item={breweries}
          className="h-full min-h-[420px] lg:min-h-[640px]"
          imageSizes="(max-width: 1024px) 100vw, 58vw"
          large
        />
      </div>

      {/* Manufacturing — top-right, 5 cols × 1 row */}
      <div className="col-span-12 md:col-span-6 lg:col-span-5 reveal min-h-[280px] lg:min-h-[308px]">
        <FeatureCard
          item={manufacturing}
          className="h-full min-h-[280px] lg:min-h-[308px]"
          imageSizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 42vw"
        />
      </div>

      {/* Transport — bottom-right, 5 cols × 1 row */}
      <div className="col-span-12 md:col-span-6 lg:col-span-5 reveal min-h-[280px] lg:min-h-[308px]">
        <FeatureCard
          item={transport}
          className="h-full min-h-[280px] lg:min-h-[308px]"
          imageSizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 42vw"
        />
      </div>

      {/* Sales & Distribution — full-width banner across the bottom */}
      <div className="col-span-12 reveal min-h-[300px]">
        <FeatureCard
          item={distribution}
          className="h-full min-h-[300px]"
          imageSizes="100vw"
        />
      </div>
    </div>
  );
}
