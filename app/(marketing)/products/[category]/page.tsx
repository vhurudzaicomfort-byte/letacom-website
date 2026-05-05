import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { ProductCard } from "@/components/sections/ProductCard";
import { CTABanner } from "@/components/sections/CTABanner";

const categories: Record<
  string,
  { name: string; description: string; items: { name: string; shortDescription: string }[] }
> = {
  equipment: {
    name: "Industrial Equipment",
    description:
      "Production machinery, processing equipment, and industrial systems built for demanding manufacturing and brewing environments across Africa.",
    items: [
      { name: "Fermentation Vessels", shortDescription: "Stainless steel tanks for controlled brewing fermentation and conditioning processes." },
      { name: "Bottling Line Machinery", shortDescription: "Automated filling, capping, and labelling machines for high-throughput production." },
      { name: "Heat Exchangers", shortDescription: "Plate and shell-and-tube exchangers for efficient thermal energy transfer." },
      { name: "Conveyor Systems", shortDescription: "Belt, roller, and chain conveyors for material handling in production lines." },
      { name: "Mixing & Blending Units", shortDescription: "Industrial mixers for homogeneous blending of liquids, powders, and slurries." },
      { name: "Compressors & Air Systems", shortDescription: "Rotary screw and piston compressors for reliable compressed air supply." },
      { name: "Filtration Equipment", shortDescription: "Depth, membrane, and cartridge filters for liquid and gas purification." },
      { name: "Packaging Machines", shortDescription: "Shrink-wrap, case-packing, and palletising machines for end-of-line packaging." },
    ],
  },
  accessories: {
    name: "Accessories",
    description:
      "Complementary components, fittings, and add-ons that extend the functionality and lifespan of your industrial equipment.",
    items: [
      { name: "Pipe Fittings & Connectors", shortDescription: "Stainless and brass fittings for secure, leak-free pipe connections." },
      { name: "Gaskets & Seals", shortDescription: "High-temperature and chemical-resistant seals for pumps and flanges." },
      { name: "Pressure Gauges", shortDescription: "Analogue and digital gauges for accurate process pressure monitoring." },
      { name: "Flow Meters", shortDescription: "Electromagnetic and turbine meters for precise liquid flow measurement." },
      { name: "Hose Assemblies", shortDescription: "Reinforced hoses with crimped fittings for fluid and gas transfer." },
      { name: "Mounting Brackets", shortDescription: "Heavy-duty steel brackets for secure equipment and instrument mounting." },
      { name: "Cable Management", shortDescription: "Trays, conduits, and ties for organised and protected cable routing." },
      { name: "Filtration Media", shortDescription: "Replacement filter sheets, cartridges, and bags for purification systems." },
    ],
  },
  "spare-parts": {
    name: "Spare Parts",
    description:
      "OEM and aftermarket replacement parts to minimise downtime and keep your operations running at peak efficiency.",
    items: [
      { name: "Motor Bearings", shortDescription: "Precision ball and roller bearings for electric motors and drives." },
      { name: "Drive Belts & Chains", shortDescription: "V-belts, timing belts, and roller chains for mechanical power transmission." },
      { name: "Pump Impellers", shortDescription: "Cast and machined impellers for centrifugal and positive-displacement pumps." },
      { name: "Valve Assemblies", shortDescription: "Gate, ball, and butterfly valve kits for flow control and isolation." },
      { name: "Electrical Contactors", shortDescription: "AC and DC contactors for switching motors, heaters, and lighting circuits." },
      { name: "Hydraulic Cylinders", shortDescription: "Single and double-acting cylinders for hydraulic actuation systems." },
      { name: "Gear Sets", shortDescription: "Spur, helical, and bevel gear sets for gearboxes and reducers." },
      { name: "Sensor Modules", shortDescription: "Temperature, pressure, and proximity sensors for process automation." },
    ],
  },
  tools: {
    name: "Tools & Workshop",
    description:
      "Professional hand tools, power tools, and workshop equipment for maintenance, installation, and fabrication tasks.",
    items: [
      { name: "Torque Wrenches", shortDescription: "Calibrated wrenches for precise bolt tightening to specification." },
      { name: "Digital Calipers", shortDescription: "High-accuracy digital calipers for internal and external measurements." },
      { name: "Pipe Cutters", shortDescription: "Rotary and orbital cutters for clean, burr-free pipe sectioning." },
      { name: "Impact Drivers", shortDescription: "Cordless high-torque drivers for fast fastener installation and removal." },
      { name: "Welding Kits", shortDescription: "MIG, TIG, and arc welding sets with consumables and safety gear." },
      { name: "Multimeters", shortDescription: "Digital multimeters for voltage, current, and resistance troubleshooting." },
      { name: "Pneumatic Tools", shortDescription: "Air-powered ratchets, grinders, and nail guns for workshop tasks." },
      { name: "Inspection Cameras", shortDescription: "Borescope cameras for visual inspection of confined spaces and pipes." },
    ],
  },
  systems: {
    name: "Systems",
    description:
      "Complete integrated systems designed for turnkey installation, from draught dispense to full process automation lines.",
    items: [
      { name: "Draught Dispense Systems", shortDescription: "Complete keg-to-tap systems for bars, restaurants, and breweries." },
      { name: "SCADA Control Systems", shortDescription: "Supervisory control and data acquisition for plant-wide monitoring." },
      { name: "CIP Cleaning Systems", shortDescription: "Automated clean-in-place systems for hygienic process equipment." },
      { name: "Water Treatment Plants", shortDescription: "Reverse osmosis and filtration plants for process water purification." },
      { name: "Refrigeration Systems", shortDescription: "Industrial chillers and cold rooms for temperature-critical storage." },
      { name: "CO\u2082 Recovery Systems", shortDescription: "Carbon dioxide capture and purification for beverage carbonation." },
      { name: "Automated Packaging Lines", shortDescription: "Integrated filling, sealing, and palletising for end-to-end packaging." },
      { name: "Process Monitoring Systems", shortDescription: "Real-time dashboards and sensors for production performance tracking." },
    ],
  },
  "it-hardware-software": {
    name: "IT Hardware & Software",
    description:
      "Enterprise-grade technology solutions including POS, fleet management, networking, and business software for modern operations.",
    items: [
      { name: "POS Terminals", shortDescription: "Touchscreen point-of-sale terminals for retail and hospitality venues." },
      { name: "Barcode Scanners", shortDescription: "Handheld and fixed-mount scanners for inventory and asset tracking." },
      { name: "Fleet GPS Trackers", shortDescription: "Real-time vehicle tracking devices with geofencing and reporting." },
      { name: "Enterprise Servers", shortDescription: "Rack-mount and tower servers for business-critical applications." },
      { name: "Network Infrastructure", shortDescription: "Switches, routers, and access points for reliable connectivity." },
      { name: "ERP Software Licences", shortDescription: "Enterprise resource planning licences for integrated business management." },
      { name: "Warehouse Management Systems", shortDescription: "Software for inventory control, picking, and dispatch optimisation." },
      { name: "Mobile Computing Devices", shortDescription: "Rugged tablets and handhelds for field and warehouse operations." },
    ],
  },
  "branded-consumables": {
    name: "Branded Consumables",
    description:
      "Custom-branded merchandise, glassware, packaging, and promotional materials that reinforce your brand at every touchpoint.",
    items: [
      { name: "Branded Pint Glasses", shortDescription: "Custom-printed glassware for bars, events, and promotional campaigns." },
      { name: "Custom Bottle Labels", shortDescription: "High-quality adhesive labels with full-colour brand artwork." },
      { name: "Promotional Coasters", shortDescription: "Printed beer mats and coasters for on-premise brand visibility." },
      { name: "Branded Uniforms", shortDescription: "Embroidered and printed workwear for staff and promotional teams." },
      { name: "Event Banners", shortDescription: "Pull-up banners, flags, and backdrops for exhibitions and events." },
      { name: "Branded Cooler Boxes", shortDescription: "Insulated coolers with custom branding for outdoor activations." },
      { name: "Gift Packs & Hampers", shortDescription: "Curated branded gift sets for corporate and festive occasions." },
      { name: "Branded Stationery", shortDescription: "Notebooks, pens, and office supplies with company branding." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const data = categories[category];

  if (!data) {
    return { title: "Category Not Found | Letacom" };
  }

  return {
    title: `${data.name} | Products | Letacom`,
    description: data.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = categories[category];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Products"
        title={data.name}
        subtitle={data.description}
      />

      <section className="section-padding">
        <div className="container-site">
          <p className="max-w-2xl text-graphite-600 leading-relaxed mb-10">
            Browse our selection of {data.name.toLowerCase()} below. All items
            are sourced from verified manufacturers and available through our
            procurement process. Contact us for specifications, lead times, and
            pricing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.items.map((item) => (
              <ProductCard
                key={item.name}
                name={item.name}
                shortDescription={item.shortDescription}
                categorySlug={category}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Don't see what you need?"
        subtitle="We source beyond our catalogue. Request custom sourcing for any industrial product."
        ctaLabel="Request Custom Sourcing"
        ctaHref="/request-quote"
      />
    </>
  );
}
