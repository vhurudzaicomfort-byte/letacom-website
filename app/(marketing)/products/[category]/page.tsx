import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { ProductCard } from "@/components/sections/ProductCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { images } from "@/lib/images";

interface CategoryItem {
  name: string;
  shortDescription: string;
  image: string;
}

const categories: Record<
  string,
  { name: string; description: string; heroImage: string; items: CategoryItem[] }
> = {
  equipment: {
    name: "Industrial Equipment",
    heroImage: images.equipment,
    description:
      "Production machinery, processing equipment, and industrial systems built for demanding manufacturing and brewing environments across Africa.",
    items: [
      { name: "Fermentation Vessels", shortDescription: "Stainless steel tanks for controlled brewing fermentation and conditioning processes.", image: "/media/industry-breweries.jpg" },
      { name: "Bottling Line Machinery", shortDescription: "Automated filling, capping, and labelling machines for high-throughput production.", image: "/media/industry-manufacturing.jpg" },
      { name: "Heat Exchangers", shortDescription: "Plate and shell-and-tube exchangers for efficient thermal energy transfer.", image: "/media/industry-manufacturing.jpg" },
      { name: "Conveyor Systems", shortDescription: "Belt, roller, and chain conveyors for material handling in production lines.", image: "/media/industry-manufacturing.jpg" },
      { name: "Mixing & Blending Units", shortDescription: "Industrial mixers for homogeneous blending of liquids, powders, and slurries.", image: "/media/industry-breweries.jpg" },
      { name: "Compressors & Air Systems", shortDescription: "Rotary screw and piston compressors for reliable compressed air supply.", image: "/media/equipment-excavator.jpg" },
      { name: "Filtration Equipment", shortDescription: "Depth, membrane, and cartridge filters for liquid and gas purification.", image: "/media/industry-manufacturing.jpg" },
      { name: "Packaging Machines", shortDescription: "Shrink-wrap, case-packing, and palletising machines for end-of-line packaging.", image: "/media/industry-manufacturing.jpg" },
    ],
  },
  accessories: {
    name: "Accessories",
    heroImage: images.manufacturing,
    description:
      "Complementary components, fittings, and add-ons that extend the functionality and lifespan of your industrial equipment.",
    items: [
      { name: "Pipe Fittings & Connectors", shortDescription: "Stainless and brass fittings for secure, leak-free pipe connections.", image: "/media/industry-manufacturing.jpg" },
      { name: "Gaskets & Seals", shortDescription: "High-temperature and chemical-resistant seals for pumps and flanges.", image: "/media/industry-manufacturing.jpg" },
      { name: "Pressure Gauges", shortDescription: "Analogue and digital gauges for accurate process pressure monitoring.", image: "/media/industry-manufacturing.jpg" },
      { name: "Flow Meters", shortDescription: "Electromagnetic and turbine meters for precise liquid flow measurement.", image: "/media/industry-manufacturing.jpg" },
      { name: "Hose Assemblies", shortDescription: "Reinforced hoses with crimped fittings for fluid and gas transfer.", image: "/media/industry-manufacturing.jpg" },
      { name: "Mounting Brackets", shortDescription: "Heavy-duty steel brackets for secure equipment and instrument mounting.", image: "/media/equipment-excavator.jpg" },
      { name: "Cable Management", shortDescription: "Trays, conduits, and ties for organised and protected cable routing.", image: "/media/it-collaboration.jpg" },
      { name: "Filtration Media", shortDescription: "Replacement filter sheets, cartridges, and bags for purification systems.", image: "/media/industry-manufacturing.jpg" },
    ],
  },
  "spare-parts": {
    name: "Spare Parts",
    heroImage: images.manufacturing,
    description:
      "OEM and aftermarket replacement parts to minimise downtime and keep your operations running at peak efficiency.",
    items: [
      { name: "Motor Bearings", shortDescription: "Precision ball and roller bearings for electric motors and drives.", image: "/media/industry-manufacturing.jpg" },
      { name: "Drive Belts & Chains", shortDescription: "V-belts, timing belts, and roller chains for mechanical power transmission.", image: "/media/industry-manufacturing.jpg" },
      { name: "Pump Impellers", shortDescription: "Cast and machined impellers for centrifugal and positive-displacement pumps.", image: "/media/industry-manufacturing.jpg" },
      { name: "Valve Assemblies", shortDescription: "Gate, ball, and butterfly valve kits for flow control and isolation.", image: "/media/industry-manufacturing.jpg" },
      { name: "Electrical Contactors", shortDescription: "AC and DC contactors for switching motors, heaters, and lighting circuits.", image: "/media/it-collaboration.jpg" },
      { name: "Hydraulic Cylinders", shortDescription: "Single and double-acting cylinders for hydraulic actuation systems.", image: "/media/equipment-excavator.jpg" },
      { name: "Gear Sets", shortDescription: "Spur, helical, and bevel gear sets for gearboxes and reducers.", image: "/media/industry-manufacturing.jpg" },
      { name: "Sensor Modules", shortDescription: "Temperature, pressure, and proximity sensors for process automation.", image: "/media/it-collaboration.jpg" },
    ],
  },
  tools: {
    name: "Tools & Workshop",
    heroImage: images.equipmentExcavator,
    description:
      "Professional hand tools, power tools, and workshop equipment for maintenance, installation, and fabrication tasks.",
    items: [
      { name: "Torque Wrenches", shortDescription: "Calibrated wrenches for precise bolt tightening to specification.", image: "/media/equipment-excavator.jpg" },
      { name: "Digital Calipers", shortDescription: "High-accuracy digital calipers for internal and external measurements.", image: "/media/industry-manufacturing.jpg" },
      { name: "Pipe Cutters", shortDescription: "Rotary and orbital cutters for clean, burr-free pipe sectioning.", image: "/media/industry-manufacturing.jpg" },
      { name: "Impact Drivers", shortDescription: "Cordless high-torque drivers for fast fastener installation and removal.", image: "/media/industry-manufacturing.jpg" },
      { name: "Welding Kits", shortDescription: "MIG, TIG, and arc welding sets with consumables and safety gear.", image: "/media/equipment-excavator.jpg" },
      { name: "Multimeters", shortDescription: "Digital multimeters for voltage, current, and resistance troubleshooting.", image: "/media/it-collaboration.jpg" },
      { name: "Pneumatic Tools", shortDescription: "Air-powered ratchets, grinders, and nail guns for workshop tasks.", image: "/media/industry-manufacturing.jpg" },
      { name: "Inspection Cameras", shortDescription: "Borescope cameras for visual inspection of confined spaces and pipes.", image: "/media/it-collaboration.jpg" },
    ],
  },
  systems: {
    name: "Systems",
    heroImage: images.systems,
    description:
      "Complete integrated systems designed for turnkey installation, from draught dispense to full process automation lines.",
    items: [
      { name: "Draught Dispense Systems", shortDescription: "Complete keg-to-tap systems for bars, restaurants, and breweries.", image: "/media/featured-draught-poster.jpg" },
      { name: "SCADA Control Systems", shortDescription: "Supervisory control and data acquisition for plant-wide monitoring.", image: "/media/it-collaboration.jpg" },
      { name: "CIP Cleaning Systems", shortDescription: "Automated clean-in-place systems for hygienic process equipment.", image: "/media/industry-breweries.jpg" },
      { name: "Water Treatment Plants", shortDescription: "Reverse osmosis and filtration plants for process water purification.", image: "/media/industry-manufacturing.jpg" },
      { name: "Refrigeration Systems", shortDescription: "Industrial chillers and cold rooms for temperature-critical storage.", image: "/media/industry-manufacturing.jpg" },
      { name: "CO₂ Recovery Systems", shortDescription: "Carbon dioxide capture and purification for beverage carbonation.", image: "/media/industry-breweries.jpg" },
      { name: "Automated Packaging Lines", shortDescription: "Integrated filling, sealing, and palletising for end-to-end packaging.", image: "/media/industry-manufacturing.jpg" },
      { name: "Process Monitoring Systems", shortDescription: "Real-time dashboards and sensors for production performance tracking.", image: "/media/it-collaboration.jpg" },
    ],
  },
  "it-hardware-software": {
    name: "IT Hardware & Software",
    heroImage: images.itCollaboration,
    description:
      "Enterprise-grade technology solutions including POS, fleet management, networking, and business software for modern operations.",
    items: [
      { name: "POS Terminals", shortDescription: "Touchscreen point-of-sale terminals for retail and hospitality venues.", image: "/media/industry-distribution.jpg" },
      { name: "Barcode Scanners", shortDescription: "Handheld and fixed-mount scanners for inventory and asset tracking.", image: "/media/industry-distribution.jpg" },
      { name: "Fleet GPS Trackers", shortDescription: "Real-time vehicle tracking devices with geofencing and reporting.", image: "/media/industry-transport.jpg" },
      { name: "Enterprise Servers", shortDescription: "Rack-mount and tower servers for business-critical applications.", image: "/media/it-collaboration.jpg" },
      { name: "Network Infrastructure", shortDescription: "Switches, routers, and access points for reliable connectivity.", image: "/media/it-collaboration.jpg" },
      { name: "ERP Software Licences", shortDescription: "Enterprise resource planning licences for integrated business management.", image: "/media/team-meeting.jpg" },
      { name: "Warehouse Management Systems", shortDescription: "Software for inventory control, picking, and dispatch optimisation.", image: "/media/industry-distribution.jpg" },
      { name: "Mobile Computing Devices", shortDescription: "Rugged tablets and handhelds for field and warehouse operations.", image: "/media/it-collaboration.jpg" },
    ],
  },
  "branded-consumables": {
    name: "Branded Consumables",
    heroImage: images.consumableGlassware,
    description:
      "Custom-branded merchandise, glassware, packaging, and promotional materials that reinforce your brand at every touchpoint.",
    items: [
      { name: "Branded Pint Glasses", shortDescription: "Custom-printed glassware for bars, events, and promotional campaigns.", image: "/media/consumable-glassware.jpg" },
      { name: "Custom Ice Buckets", shortDescription: "Branded acrylic, stainless, and double-walled ice buckets for on-trade and hospitality venues.", image: "/media/consumable-glassware.jpg" },
      { name: "Glass Mats", shortDescription: "Custom-printed glass mats — micro-fibre, leather, and rubber finishes for bars and tasting rooms.", image: "/media/featured-draught-poster.jpg" },
      { name: "Counter Mats", shortDescription: "Full-bar counter mats in rubber and pulpboard with edge-to-edge brand artwork.", image: "/media/consumable-glasses.jpg" },
      { name: "Custom Posters", shortDescription: "Large-format brand posters — matte, gloss, and weather-resistant finishes for venue and retail use.", image: "/media/heritage-africa-flags.jpg" },
      { name: "Custom Bottle Labels", shortDescription: "High-quality adhesive labels with full-colour brand artwork.", image: "/media/heritage-africa-flags.jpg" },
      { name: "Promotional Coasters", shortDescription: "Printed beer mats and coasters for on-premise brand visibility.", image: "/media/featured-draught-poster.jpg" },
      { name: "Branded Uniforms", shortDescription: "Embroidered and printed workwear for staff and promotional teams.", image: "/media/engagement-meeting.jpg" },
      { name: "Event Banners", shortDescription: "Pull-up banners, flags, and backdrops for exhibitions and events.", image: "/media/heritage-africa-flags.jpg" },
      { name: "Branded Cooler Boxes", shortDescription: "Insulated coolers with custom branding for outdoor activations.", image: "/media/consumable-glasses.jpg" },
      { name: "Gift Packs & Hampers", shortDescription: "Curated branded gift sets for corporate and festive occasions.", image: "/media/consumable-glassware.jpg" },
      { name: "Branded Stationery", shortDescription: "Notebooks, pens, and office supplies with company branding.", image: "/media/team-meeting.jpg" },
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
        backgroundImage={data.heroImage}
      />

      <section className="section-padding">
        <div className="container-site">
          <p className="max-w-2xl text-ink-muted leading-relaxed mb-10">
            Browse our {data.name.toLowerCase()} below. Each item is delivered
            with technical evaluation, installation support, and lifecycle
            backing — not just shipped from a catalogue. Contact us for
            specifications, lead times, and pricing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {data.items.map((item) => (
              <div key={item.name} className="reveal">
                <ProductCard
                  name={item.name}
                  shortDescription={item.shortDescription}
                  categorySlug={category}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Don't see what you need?"
        subtitle="We design, build, and supply across categories. Tell us your spec — we'll engineer the rest."
        ctaLabel="Request a Quote"
        ctaHref="/request-quote"
      />
    </>
  );
}
