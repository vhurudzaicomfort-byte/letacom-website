export interface ProductItem {
  name: string;
  shortDescription: string;
  image: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
  items: ProductItem[];
}

export const productCategories: ProductCategory[] = [
  {
    slug: "equipment",
    name: "Industrial Equipment",
    description:
      "Heavy machinery, production line equipment, and processing systems sourced from global OEMs and specialist manufacturers.",
    icon: "Cog",
    items: [
      {
        name: "Fermentation Vessels",
        shortDescription: "Stainless steel conical and cylindrical tanks for beverage and bioprocess fermentation.",
        image: "/images/products/fermentation-vessels.jpg",
      },
      {
        name: "CNC Milling Machines",
        shortDescription: "Precision multi-axis milling centres for metal and composite component manufacturing.",
        image: "/images/products/cnc-milling.jpg",
      },
      {
        name: "Conveyor Systems",
        shortDescription: "Belt, roller, and chain conveyors configured for production line material handling.",
        image: "/images/products/conveyors.jpg",
      },
      {
        name: "Hydraulic Presses",
        shortDescription: "High-tonnage presses for forming, stamping, and compression moulding operations.",
        image: "/images/products/hydraulic-presses.jpg",
      },
      {
        name: "Packaging Machines",
        shortDescription: "Filling, sealing, labelling, and case-packing equipment for consumer goods lines.",
        image: "/images/products/packaging-machines.jpg",
      },
      {
        name: "Industrial Compressors",
        shortDescription: "Screw and reciprocating compressors for compressed air and gas supply systems.",
        image: "/images/products/compressors.jpg",
      },
      {
        name: "Heat Exchangers",
        shortDescription: "Plate and shell-and-tube exchangers for process heating, cooling, and pasteurisation.",
        image: "/images/products/heat-exchangers.jpg",
      },
      {
        name: "Welding Stations",
        shortDescription: "MIG, TIG, and robotic welding systems for production and fabrication workshops.",
        image: "/images/products/welding-stations.jpg",
      },
    ],
  },
  {
    slug: "accessories",
    name: "Accessories",
    description:
      "Complementary accessories, fittings, and add-ons that extend the functionality of core equipment and systems.",
    icon: "Puzzle",
    items: [
      {
        name: "Hose Assemblies",
        shortDescription: "Food-grade and industrial hoses with certified end-fittings for fluid transfer.",
        image: "/images/products/hose-assemblies.jpg",
      },
      {
        name: "Pressure Gauges",
        shortDescription: "Analogue and digital gauges for process monitoring across pressure ranges.",
        image: "/images/products/pressure-gauges.jpg",
      },
      {
        name: "Quick-Connect Couplings",
        shortDescription: "Stainless and brass couplings for rapid connection of fluid and gas lines.",
        image: "/images/products/couplings.jpg",
      },
      {
        name: "Filter Cartridges",
        shortDescription: "Replacement cartridges for liquid, air, and particulate filtration systems.",
        image: "/images/products/filter-cartridges.jpg",
      },
      {
        name: "Safety Guards",
        shortDescription: "Machine-mounted polycarbonate and mesh guards meeting ISO 14120 standards.",
        image: "/images/products/safety-guards.jpg",
      },
      {
        name: "Mounting Brackets",
        shortDescription: "Heavy-duty steel and aluminium brackets for equipment and sensor mounting.",
        image: "/images/products/mounting-brackets.jpg",
      },
      {
        name: "Cable Management Trays",
        shortDescription: "Galvanised and powder-coated trays for routing power and data cabling.",
        image: "/images/products/cable-trays.jpg",
      },
      {
        name: "Valve Actuators",
        shortDescription: "Pneumatic and electric actuators for automated valve control in process plants.",
        image: "/images/products/valve-actuators.jpg",
      },
    ],
  },
  {
    slug: "spare-parts",
    name: "Spare Parts",
    description:
      "Genuine and equivalent replacement parts to maintain uptime, sourced from OEMs and certified aftermarket suppliers.",
    icon: "Wrench",
    items: [
      {
        name: "Bearings & Bushings",
        shortDescription: "Precision ball, roller, and plain bearings for rotating equipment maintenance.",
        image: "/images/products/bearings.jpg",
      },
      {
        name: "Drive Belts",
        shortDescription: "V-belts, timing belts, and poly-V belts for power transmission systems.",
        image: "/images/products/drive-belts.jpg",
      },
      {
        name: "Seals & Gaskets",
        shortDescription: "O-rings, mechanical seals, and gasket sets for pumps, valves, and vessels.",
        image: "/images/products/seals-gaskets.jpg",
      },
      {
        name: "Electric Motor Spares",
        shortDescription: "Windings, capacitors, fans, and encoder assemblies for motor refurbishment.",
        image: "/images/products/motor-spares.jpg",
      },
      {
        name: "Pump Impellers",
        shortDescription: "Cast and machined impellers for centrifugal and positive-displacement pumps.",
        image: "/images/products/pump-impellers.jpg",
      },
      {
        name: "Solenoid Valves",
        shortDescription: "Direct-acting and pilot-operated solenoids for pneumatic and hydraulic circuits.",
        image: "/images/products/solenoid-valves.jpg",
      },
      {
        name: "Sensor Modules",
        shortDescription: "Proximity, photoelectric, and temperature sensor replacements for automation.",
        image: "/images/products/sensor-modules.jpg",
      },
      {
        name: "Circuit Breakers",
        shortDescription: "Miniature and moulded-case breakers for switchgear and panel replacement.",
        image: "/images/products/circuit-breakers.jpg",
      },
    ],
  },
  {
    slug: "tools",
    name: "Tools & Workshop",
    description:
      "Professional hand tools, power tools, and workshop equipment for maintenance teams and production environments.",
    icon: "Hammer",
    items: [
      {
        name: "Torque Wrenches",
        shortDescription: "Calibrated click and digital torque wrenches for precision fastener tightening.",
        image: "/images/products/torque-wrenches.jpg",
      },
      {
        name: "Cordless Drill Kits",
        shortDescription: "Industrial-grade cordless drills with batteries and chargers for site work.",
        image: "/images/products/cordless-drills.jpg",
      },
      {
        name: "Hydraulic Pullers",
        shortDescription: "Two and three-jaw pullers for bearing and coupling removal in tight spaces.",
        image: "/images/products/hydraulic-pullers.jpg",
      },
      {
        name: "Pipe Threading Sets",
        shortDescription: "Manual and electric threading kits for steel and stainless pipe installation.",
        image: "/images/products/pipe-threading.jpg",
      },
      {
        name: "Workbenches",
        shortDescription: "Heavy-duty steel workbenches with integrated vice and storage for workshops.",
        image: "/images/products/workbenches.jpg",
      },
      {
        name: "Diagnostic Instruments",
        shortDescription: "Vibration analysers, thermal cameras, and multimeters for condition monitoring.",
        image: "/images/products/diagnostic-instruments.jpg",
      },
      {
        name: "Lifting Equipment",
        shortDescription: "Chain hoists, lever blocks, and slings rated for overhead maintenance tasks.",
        image: "/images/products/lifting-equipment.jpg",
      },
      {
        name: "Lubrication Systems",
        shortDescription: "Grease guns, oil dispensers, and automatic lubrication units for plant assets.",
        image: "/images/products/lubrication-systems.jpg",
      },
    ],
  },
  {
    slug: "systems",
    name: "Systems",
    description:
      "Integrated systems including draught dispense, process automation, and production control architectures delivered as complete solutions.",
    icon: "Network",
    items: [
      {
        name: "Draught Dispense Systems",
        shortDescription: "Complete beer and beverage dispense installations including coolers and towers.",
        image: "/images/products/draught-systems.jpg",
      },
      {
        name: "SCADA & HMI Packages",
        shortDescription: "Supervisory control systems with operator interfaces for process visualisation.",
        image: "/images/products/scada-hmi.jpg",
      },
      {
        name: "PLC Control Panels",
        shortDescription: "Pre-wired programmable logic controller panels for machine and process control.",
        image: "/images/products/plc-panels.jpg",
      },
      {
        name: "CIP Systems",
        shortDescription: "Clean-in-place skids for automated sanitation of vessels, pipes, and fillers.",
        image: "/images/products/cip-systems.jpg",
      },
      {
        name: "Refrigeration Plant",
        shortDescription: "Glycol and ammonia refrigeration systems for cold storage and process cooling.",
        image: "/images/products/refrigeration-plant.jpg",
      },
      {
        name: "Water Treatment Systems",
        shortDescription: "Reverse osmosis, softening, and UV sterilisation units for process water.",
        image: "/images/products/water-treatment.jpg",
      },
      {
        name: "Compressed Air Networks",
        shortDescription: "Complete air generation, drying, and distribution piping for factory supply.",
        image: "/images/products/compressed-air.jpg",
      },
      {
        name: "Conveyor Control Systems",
        shortDescription: "Variable-speed drives and logic controllers for integrated conveyor networks.",
        image: "/images/products/conveyor-control.jpg",
      },
    ],
  },
  {
    slug: "it-hardware-software",
    name: "IT Hardware & Software",
    description:
      "Enterprise IT procurement including servers, networking, endpoint devices, and licensed software for operational technology environments.",
    icon: "Monitor",
    items: [
      {
        name: "Rugged Tablets & Handhelds",
        shortDescription: "IP-rated mobile devices for warehouse, field-service, and production-floor use.",
        image: "/images/products/rugged-tablets.jpg",
      },
      {
        name: "Barcode & RFID Scanners",
        shortDescription: "Handheld and fixed-mount scanners for inventory and asset tracking workflows.",
        image: "/images/products/barcode-scanners.jpg",
      },
      {
        name: "Industrial PCs",
        shortDescription: "Fanless panel PCs and rack-mount servers for harsh production environments.",
        image: "/images/products/industrial-pcs.jpg",
      },
      {
        name: "Networking Equipment",
        shortDescription: "Managed switches, access points, and firewalls for factory and warehouse LANs.",
        image: "/images/products/networking.jpg",
      },
      {
        name: "ERP & MES Licences",
        shortDescription: "Software licensing for enterprise resource planning and manufacturing execution.",
        image: "/images/products/erp-software.jpg",
      },
      {
        name: "Label Printers",
        shortDescription: "Thermal transfer and direct-thermal printers for product and logistics labels.",
        image: "/images/products/label-printers.jpg",
      },
      {
        name: "UPS & Power Protection",
        shortDescription: "Uninterruptible power supplies and surge protection for critical IT assets.",
        image: "/images/products/ups-systems.jpg",
      },
      {
        name: "CCTV & Access Control",
        shortDescription: "IP cameras, NVRs, and door access systems for site security infrastructure.",
        image: "/images/products/cctv-access.jpg",
      },
    ],
  },
  {
    slug: "branded-consumables",
    name: "Branded Consumables",
    description:
      "Custom-branded glassware, packaging, uniforms, and promotional materials manufactured to client specifications and delivered at scale.",
    icon: "Tag",
    items: [
      {
        name: "Branded Glassware",
        shortDescription: "Custom-printed pint glasses, tumblers, and tasting glasses for on-trade use.",
        image: "/images/products/branded-glassware.jpg",
      },
      {
        name: "Printed Packaging",
        shortDescription: "Cartons, shrink sleeves, and corrugated cases with brand-specific artwork.",
        image: "/images/products/printed-packaging.jpg",
      },
      {
        name: "Uniforms & Workwear",
        shortDescription: "Embroidered and printed workwear, PPE, and promotional clothing programmes.",
        image: "/images/products/uniforms.jpg",
      },
      {
        name: "Promotional Merchandise",
        shortDescription: "Branded giveaways, bar mats, and event materials for trade marketing campaigns.",
        image: "/images/products/promotional-merch.jpg",
      },
      {
        name: "Drip Mats & Coasters",
        shortDescription: "Rubber and pulpboard bar mats with full-colour brand printing for venues.",
        image: "/images/products/drip-mats.jpg",
      },
      {
        name: "Point-of-Sale Print",
        shortDescription: "Posters, tent cards, and shelf wobblers printed to brand guidelines at volume.",
        image: "/images/products/pos-print.jpg",
      },
      {
        name: "Tap Handles & Badges",
        shortDescription: "Custom moulded and machined tap handles with interchangeable brand badges.",
        image: "/images/products/tap-handles.jpg",
      },
      {
        name: "Cleaning Chemicals",
        shortDescription: "Private-label line cleaners and sanitisers for draught system maintenance.",
        image: "/images/products/cleaning-chemicals.jpg",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((category) => category.slug === slug);
}
