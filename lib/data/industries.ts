export interface ProcurementScenario {
  title: string;
  description: string;
}

export interface Industry {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  supplies: string[];
  scenarios: ProcurementScenario[];
}

export const industries: Industry[] = [
  {
    slug: "breweries",
    name: "Breweries & Beverage Production",
    shortDescription:
      "Complete procurement solutions for brewing, bottling, and beverage distribution operations.",
    description:
      "End-to-end supply of brewing equipment, fermentation vessels, CO\u2082 systems, draught dispense hardware, keg handling, branded glassware, bottling line components, and packaging materials for beverage producers of all scales.",
    image: "/images/brewery.jpg",
    icon: "Beer",
    supplies: [
      "Fermentation Tanks",
      "CO\u2082 Systems",
      "Draught Dispense Systems",
      "Keg Washing Equipment",
      "Bottling Line Components",
      "Branded Glassware",
      "Packaging Materials",
      "PET Blow Moulding Parts",
      "Temperature Control Systems",
      "CIP Cleaning Systems",
    ],
    scenarios: [
      {
        title: "New Brewery Fitout",
        description:
          "Full equipment specification and procurement for greenfield or expansion projects, from brewhouse vessels through to cold-room dispense infrastructure.",
      },
      {
        title: "Draught System Rollout",
        description:
          "National deployment of branded dispense towers, coolers, and keg couplers across on-trade venues with coordinated logistics and installation scheduling.",
      },
      {
        title: "Packaging Line Upgrade",
        description:
          "Sourcing replacement fillers, labellers, and case packers to modernise an existing bottling or canning line while minimising production downtime.",
      },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Processing",
    shortDescription:
      "Industrial equipment and spare parts sourced for factories and processing plants.",
    description:
      "Procurement of production machinery, automation components, conveyor systems, instrumentation, safety equipment, and maintenance spares for manufacturing and processing facilities across multiple sectors.",
    image: "/images/manufacturing.jpg",
    icon: "Factory",
    supplies: [
      "CNC Machine Components",
      "Conveyor Systems",
      "Pneumatic Actuators",
      "Industrial Sensors & Instrumentation",
      "Safety Guarding & Interlocks",
      "Electric Motors & Drives",
      "Hydraulic Power Units",
      "PLC & Automation Hardware",
      "Welding Equipment",
      "Industrial Fasteners & Fittings",
    ],
    scenarios: [
      {
        title: "Production Line Expansion",
        description:
          "Coordinated sourcing of machinery, conveyors, and control systems for a new production cell, delivered to site on a phased installation schedule.",
      },
      {
        title: "Preventive Maintenance Stock Program",
        description:
          "Establishing a managed inventory of critical spares—bearings, belts, sensors, and actuators—to reduce unplanned downtime across plant operations.",
      },
      {
        title: "Automation Retrofit",
        description:
          "Procurement of PLCs, drives, HMI panels, and wiring accessories to upgrade legacy manual processes to automated control with minimal production interruption.",
      },
    ],
  },
  {
    slug: "transport-logistics",
    name: "Transport & Logistics",
    shortDescription:
      "Fleet parts, warehouse equipment, and logistics infrastructure sourced globally.",
    description:
      "Supply of fleet maintenance parts, warehouse racking, material handling equipment, telematics hardware, cold-chain components, and packaging consumables for transport and distribution operations.",
    image: "/images/transport.jpg",
    icon: "Truck",
    supplies: [
      "Fleet Brake & Suspension Parts",
      "Forklift Attachments & Tyres",
      "Pallet Racking Systems",
      "Loading Dock Equipment",
      "GPS & Telematics Units",
      "Refrigeration Units for Trailers",
      "Stretch Wrap & Strapping Machines",
      "Hydraulic Tail-Lift Parts",
      "Warehouse LED Lighting",
      "Bulk Fuel Storage Tanks",
    ],
    scenarios: [
      {
        title: "Fleet Renewal Parts Program",
        description:
          "Ongoing supply of OEM and aftermarket components for heavy commercial vehicles, consolidated from multiple origins to reduce per-unit landed cost.",
      },
      {
        title: "Warehouse Fitout",
        description:
          "Turnkey procurement of racking, conveyors, dock levellers, and lighting for a new distribution centre, coordinated with construction milestones.",
      },
      {
        title: "Cold-Chain Infrastructure",
        description:
          "Sourcing refrigeration compressors, insulated panels, temperature monitors, and backup generators to maintain unbroken cold-chain from depot to delivery.",
      },
    ],
  },
  {
    slug: "sales-distribution",
    name: "Sales & Distribution",
    shortDescription:
      "Point-of-sale equipment, display units, and distribution consumables for trade channels.",
    description:
      "Procurement of point-of-sale displays, merchandising units, branded signage, vending equipment, trade samples, promotional materials, and route-to-market technology for sales and distribution teams.",
    image: "/images/sales.jpg",
    icon: "ShoppingCart",
    supplies: [
      "Point-of-Sale Display Units",
      "Branded Fridges & Coolers",
      "Digital Menu Boards",
      "Handheld Route Accounting Devices",
      "Promotional Signage & Banners",
      "Vending Machines",
      "Trade Sample Kits",
      "Vehicle Branding Materials",
      "Shelf Talkers & Clip Strips",
      "Portable Event Equipment",
    ],
    scenarios: [
      {
        title: "National POS Rollout",
        description:
          "Manufacture and distribution of branded display units to thousands of retail and on-trade outlets, with kitting, quality inspection, and phased delivery.",
      },
      {
        title: "Cooler Deployment Program",
        description:
          "Procurement, branding, and logistics management for branded fridges placed in convenience stores and forecourts across multiple territories.",
      },
      {
        title: "Trade Launch Campaign",
        description:
          "Sourcing promotional merchandise, sampling equipment, and branded event infrastructure for a coordinated product launch across key sales channels.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
