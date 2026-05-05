export interface Solution {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const solutions: Solution[] = [
  {
    slug: "sourcing-procurement",
    title: "Sourcing & Procurement",
    description:
      "We identify, evaluate, and negotiate with global suppliers on your behalf, leveraging established relationships and market intelligence to secure optimal pricing, quality, and lead times for industrial goods across categories.",
    icon: "Search",
    features: [
      "Global supplier identification and qualification",
      "Competitive bidding and price negotiation",
      "Supplier audits and quality pre-assessments",
      "Consolidated purchasing to reduce per-unit costs",
    ],
  },
  {
    slug: "equipment-supply",
    title: "Equipment Supply",
    description:
      "End-to-end supply of capital equipment from specification through delivery, including technical evaluation, factory acceptance testing coordination, freight management, and on-site commissioning support for production-critical machinery.",
    icon: "Package",
    features: [
      "Technical specification development and OEM matching",
      "Factory acceptance test coordination",
      "International freight and customs management",
      "Installation supervision and commissioning support",
    ],
  },
  {
    slug: "systems-integration",
    title: "Systems Integration",
    description:
      "Procurement and coordination of multi-component systems—draught dispense, process automation, and production lines—where hardware, software, and services must be sourced from multiple vendors and delivered as a unified working solution.",
    icon: "Layers",
    features: [
      "Multi-vendor coordination and project scheduling",
      "Interface specification and compatibility assurance",
      "Phased delivery aligned to installation milestones",
    ],
  },
  {
    slug: "branded-consumables-programs",
    title: "Branded Consumables Programs",
    description:
      "Management of recurring branded goods programs including glassware, packaging, uniforms, and promotional materials—from artwork coordination and sample approval through volume production, warehousing, and distribution to end points.",
    icon: "Repeat",
    features: [
      "Artwork management and sample approval workflows",
      "Volume production with quality inspection",
      "Warehousing and call-off distribution",
      "Inventory replenishment planning",
    ],
  },
  {
    slug: "it-hardware-software-procurement",
    title: "IT Hardware & Software Procurement",
    description:
      "Sourcing of enterprise technology including rugged devices, networking infrastructure, ERP licences, and operational technology hardware, with attention to compatibility, warranty, and lifecycle management across distributed sites.",
    icon: "Monitor",
    features: [
      "Hardware specification and vendor comparison",
      "Software licensing negotiation and compliance",
      "Staging, configuration, and deployment coordination",
      "Warranty and lifecycle asset management",
    ],
  },
  {
    slug: "after-sales-support-spares",
    title: "After-Sales Support & Spares",
    description:
      "Ongoing supply of replacement parts, consumables, and maintenance materials to keep operations running, with managed inventory programs, emergency sourcing capability, and proactive obsolescence monitoring for critical assets.",
    icon: "LifeBuoy",
    features: [
      "Critical spares inventory management",
      "Emergency and expedited sourcing",
      "Obsolescence monitoring and alternative identification",
      "Scheduled replenishment programs",
    ],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}
