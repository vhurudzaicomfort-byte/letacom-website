export type Solution = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  href?: string;
};

export type Pillar = { slug: string; name: string; intro: string; solutions: Solution[] };

export const pillars: Pillar[] = [
  {
    slug: "build-and-run",
    name: "Build & Run",
    intro: "The software, cloud and integration foundations your business runs on.",
    solutions: [
      {
        slug: "software-development",
        title: "Software Development",
        tagline: "Apps, portals, custom systems and APIs.",
        description: "Web and mobile-ready applications, client and staff portals, custom business systems and APIs, delivered in clear milestones.",
        includes: ["Web applications and portals", "Custom business systems", "API design and development", "Documentation and handover"],
        href: "/software-development",
      },
      {
        slug: "cloud-integration-infrastructure",
        title: "Cloud, Integration & Infrastructure",
        tagline: "Connect, migrate and manage at scale.",
        description: "Cloud hosting, migrations, DNS and email configuration, deployment pipelines and monitoring for reliable, secure platforms.",
        includes: ["Cloud hosting and migration", "Domain, DNS and email records", "CI/CD deployment pipelines", "Monitoring and backups"],
        href: "/marketplace/cloud-hosting-configuration",
      },
      {
        slug: "enterprise-systems-integrations",
        title: "Enterprise Systems & Integrations",
        tagline: "Custom systems, integration and automation.",
        description: "Connect accounting, CRM, ERP and operational systems so data flows reliably between them, with custom extensions where off-the-shelf tools fall short.",
        includes: ["ERP and CRM integrations", "Accounting system connections", "Data synchronisation and webhooks", "Custom extensions"],
        href: "/services#integration",
      },
    ],
  },
  {
    slug: "intelligence-and-automation",
    name: "Intelligence & Automation",
    intro: "Use data and automation to work faster and decide better.",
    solutions: [
      {
        slug: "ai-data-automation",
        title: "AI, Data & Automation",
        tagline: "Chatbots, document AI, BI and predictive insights.",
        description: "AI assistants and chatbots grounded in your own documents, business intelligence dashboards, and automated workflows that remove repetitive work.",
        includes: ["AI chatbots and knowledge assistants", "Document processing and extraction", "BI dashboards and reporting", "Workflow automation"],
        href: "/marketplace/workflow-automation",
      },
      {
        slug: "whatsapp-conversational",
        title: "WhatsApp & Conversational",
        tagline: "An AI-first customer channel.",
        description: "Customer service, notifications and self-service on WhatsApp and web chat, connected to your systems through official business messaging APIs.",
        includes: ["WhatsApp Business API integration", "Automated notifications and reminders", "AI-assisted customer support", "Hand-over to human agents"],
      },
      {
        slug: "iot-smart-systems",
        title: "IoT & Smart Systems",
        tagline: "Telematics, fleet, agri and industrial.",
        description: "Dashboards and alerting for connected devices: vehicle and fleet tracking, agricultural sensors and industrial equipment monitoring.",
        includes: ["Device data ingestion", "Real-time dashboards and alerts", "Fleet and asset tracking views", "Integration with business systems"],
      },
    ],
  },
  {
    slug: "compliance-and-trust",
    name: "Compliance & Trust",
    intro: "Protect your data, meet your obligations and earn customer trust.",
    solutions: [
      {
        slug: "cybersecurity-compliance",
        title: "Cybersecurity & Compliance",
        tagline: "POPIA readiness, security assessments and hardening.",
        description: "Practical security for small and growing businesses: POPIA readiness reviews, vulnerability assessments, system hardening and secure configuration.",
        includes: ["POPIA readiness review", "Vulnerability assessments", "Website and server hardening", "Access control and backup reviews"],
      },
      {
        slug: "regtech-compliance-tools",
        title: "RegTech & Compliance Tools",
        tagline: "KYC onboarding, FICA documents and ESG reporting.",
        description: "Digital onboarding and compliance workflows: customer document collection, verification checklists, audit trails and compliance reporting.",
        includes: ["Digital client onboarding (KYC)", "FICA document collection workflows", "Audit trails and approvals", "ESG and compliance reporting"],
      },
      {
        slug: "fintech-payments",
        title: "Fintech & Payments",
        tagline: "Cards, instant EFT and wallets, on your merchant account.",
        description: "Integration of South African and international payment gateways into your website or app, configured on your own merchant account so funds go directly to you.",
        includes: ["Payment gateway integration", "Card, instant EFT and wallet payments", "Payment notifications and reconciliation", "Subscription and invoice payments"],
        href: "/marketplace/api-development-integration",
      },
    ],
  },
  {
    slug: "digital-experience-and-growth",
    name: "Digital Experience & Growth",
    intro: "Be found, be trusted and convert visitors into customers.",
    solutions: [
      {
        slug: "web-design-ux-ui",
        title: "Web Design & UX/UI",
        tagline: "Sites engineered to convert.",
        description: "Fast, accessible, mobile-first websites and interfaces designed around your customers' journeys and your business goals.",
        includes: ["Website design and development", "UX research and wireframes", "UI design systems", "Conversion-focused landing pages"],
        href: "/website-development",
      },
      {
        slug: "seo-paid-media",
        title: "SEO & Paid Media",
        tagline: "Demand capture that compounds.",
        description: "Technical SEO, content and search advertising that help customers find you when they are ready to buy.",
        includes: ["Technical SEO audits and fixes", "Google Search Console and analytics set-up", "Search and social advertising", "Performance reporting"],
      },
      {
        slug: "brand-identity",
        title: "Brand Identity",
        tagline: "A brand that earns trust on sight.",
        description: "Logos, colour and typography systems, and brand guidelines that keep every touchpoint consistent and professional.",
        includes: ["Logo and visual identity", "Colour and typography system", "Brand guidelines", "Business stationery and templates"],
      },
    ],
  },
];

export const allSolutions = pillars.flatMap((p) => p.solutions);
