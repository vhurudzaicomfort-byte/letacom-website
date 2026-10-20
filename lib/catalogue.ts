// Letacom-owned catalogue. Every listing is sold and supported by Letacom (Pty) Ltd only.
// There are no third-party sellers, payouts or commissions. Online checkout is disabled
// until payment gateway approval: `checkoutEnabled` is false for every listing.

export type ListingKind = "custom-service" | "licensed-software" | "subscription" | "api" | "download";
export type ListingStatus = "available-quote" | "custom-pricing" | "coming-soon";

export type Category = { slug: string; name: string; icon: string; description: string; offerings: string };

export type ApiEndpoint = { method: "GET" | "POST"; path: string; summary: string; params: { name: string; in: "query" | "body"; type: string; required: boolean; description: string }[]; request?: string; response: string };

export type Listing = {
  slug: string;
  ref: string;
  name: string;
  category: string;
  kind: ListingKind;
  status: ListingStatus;
  planned?: boolean;
  featured?: boolean;
  summary: string;
  description: string;
  features: string[];
  platforms: string[];
  requirements?: string[];
  delivery: string;
  licence: string;
  support: string;
  format?: string;
  intendedUse?: string;
  image: string;
  docs?: { href: string; label: string };
  checkoutEnabled: false;
  api?: { version: string; auth: string; baseUrl: string; endpoints: ApiEndpoint[]; usage: string[] };
};

export const categories: Category[] = [
  { slug: "software-applications", name: "Software & Applications", icon: "AppWindow", description: "Business systems, web applications and management platforms built to your requirements.", offerings: "Business systems, SaaS and web applications, CRM, ERP and management platforms" },
  { slug: "api-marketplace", name: "API Marketplace", icon: "Braces", description: "REST APIs, integrations and developer endpoints from Letacom.", offerings: "REST APIs, integrations, data and automation APIs" },
  { slug: "digital-tools", name: "Digital Tools", icon: "Calculator", description: "Calculators, generators, dashboards and business utilities.", offerings: "Calculators, generators, converters, dashboards and utilities" },
  { slug: "website-solutions", name: "Website Solutions", icon: "Globe", description: "Corporate websites, online stores, landing pages and web components.", offerings: "Corporate websites, e-commerce, landing pages and templates" },
  { slug: "e-learning", name: "E-Learning Solutions", icon: "GraduationCap", description: "Learning management systems, training portals and learning tools.", offerings: "LMS platforms, course management and training portals" },
  { slug: "templates-documents", name: "Templates & Documents", icon: "FileSpreadsheet", description: "Spreadsheets, proposals, contracts, invoices and business forms.", offerings: "Excel and Word templates, proposals, contracts and forms" },
  { slug: "developer-resources", name: "Developer Resources", icon: "TerminalSquare", description: "Starter kits, components, scripts and development utilities.", offerings: "SDKs, snippets, starter kits and components" },
  { slug: "ui-ux-resources", name: "UI/UX Resources", icon: "PenTool", description: "Figma templates, design systems, wireframes and interface kits.", offerings: "Figma templates, design systems, icon sets and UI kits" },
  { slug: "business-automation", name: "Business Automation", icon: "Workflow", description: "Workflow automation, reporting tools and integrations.", offerings: "Workflow templates, reporting tools and integrations" },
  { slug: "technical-services", name: "Technical Services", icon: "Wrench", description: "Development, API work, maintenance, cloud configuration and support.", offerings: "Software and API development, maintenance, cloud and support" },
];

const base = { checkoutEnabled: false as const };
const quoteSupport = "Email and telephone support during business hours, with a warranty period for defects as stated in your quotation.";
const plannedSupport = "Support details will be published with the product release.";

export const listings: Listing[] = [
  // Software & Applications
  {
    ...base, slug: "custom-business-application", ref: "LTC-SA-001", name: "Custom Business Application", category: "software-applications", kind: "custom-service", status: "custom-pricing", featured: true,
    summary: "A web application built around your processes: records, workflows, dashboards and user roles.",
    description: "We design and develop a secure web-based business application tailored to your organisation, replacing spreadsheets and manual processes with a single system your team can use from any device.",
    features: ["Requirements workshop and written specification", "Role-based user access", "Data capture forms, records and search", "Dashboards and exportable reports", "Email notifications", "Documentation and handover training"],
    platforms: ["Web browser (desktop, tablet, mobile)"], requirements: ["Modern browser", "Hosting account (we can configure this for you)"],
    delivery: "Delivered in agreed milestones to a staging site for review, then deployed to production.", licence: "Ownership of custom code transfers to you on full payment, per our Terms & Conditions.", support: quoteSupport,
    image: "/media/developers-collaborating-laptop.jpg", docs: { href: "/software-development", label: "Software development overview" },
  },
  {
    ...base, slug: "crm-management-platform", ref: "LTC-SA-002", name: "CRM & Management Platform", category: "software-applications", kind: "custom-service", status: "custom-pricing",
    summary: "Customer, sales and operations management configured for how your business works.",
    description: "A custom-built customer relationship and operations platform for tracking clients, leads, jobs and follow-ups, scoped and quoted to your requirements.",
    features: ["Client and contact records", "Lead and pipeline tracking", "Tasks, reminders and activity history", "Quotation and job tracking", "Management reports"],
    platforms: ["Web browser (desktop, tablet, mobile)"], delivery: "Milestone delivery with staging review and production deployment.", licence: "Custom code ownership transfers on full payment.", support: quoteSupport,
    image: "/media/business-team-planning-meeting.jpg",
  },
  // Website Solutions
  {
    ...base, slug: "corporate-website", ref: "LTC-WS-001", name: "Corporate Website", category: "website-solutions", kind: "custom-service", status: "available-quote", featured: true,
    summary: "A fast, credible, mobile-first business website with SEO foundations and enquiry forms.",
    description: "A professionally designed and developed website for your business, built on a modern framework, optimised for speed and search engines, with secure hosting and SSL configured.",
    features: ["Custom design aligned to your brand", "Responsive pages for every device", "SEO metadata, sitemap and structured data", "Enquiry and contact forms", "Domain, hosting and SSL set-up", "Analytics set-up on request"],
    platforms: ["Web"], delivery: "Design approval, development on a staging link, then launch on your domain.", licence: "Website design and custom code ownership transfers on full payment.", support: quoteSupport,
    image: "/media/professionals-digital-solutions.jpg", docs: { href: "/website-development", label: "Website development overview" },
  },
  {
    ...base, slug: "e-commerce-store", ref: "LTC-WS-002", name: "E-Commerce Store", category: "website-solutions", kind: "custom-service", status: "available-quote",
    summary: "An online store for your own products, connected to a payment gateway account in your name.",
    description: "We build online stores with product catalogues, carts, checkout and order notifications, integrated with a South African payment gateway account registered to your business. Payments go directly to you.",
    features: ["Product catalogue and stock management", "Cart and checkout", "Payment gateway integration on your merchant account", "Order and customer emails", "Admin training"],
    platforms: ["Web"], delivery: "Milestone delivery with test transactions before launch.", licence: "Custom code ownership transfers on full payment; platform licences per provider.", support: quoteSupport,
    image: "/media/consultants-reviewing-project.jpg",
  },
  {
    ...base, slug: "landing-page", ref: "LTC-WS-003", name: "Campaign Landing Page", category: "website-solutions", kind: "custom-service", status: "available-quote",
    summary: "A single, conversion-focused page for a product launch, campaign or event.",
    description: "A focused landing page designed to convert visitors, with clear messaging, enquiry capture and analytics.",
    features: ["Conversion-focused layout", "Enquiry or registration form", "Mobile-first design", "Basic SEO and social sharing metadata"],
    platforms: ["Web"], delivery: "Design and build in one milestone, launched on your domain or a subdomain.", licence: "Design and code ownership transfers on full payment.", support: quoteSupport,
    image: "/media/ux-wireframes.jpg",
  },
  // E-Learning
  {
    ...base, slug: "lms-implementation", ref: "LTC-EL-001", name: "Learning Management System", category: "e-learning", kind: "custom-service", status: "custom-pricing", featured: true,
    summary: "An online learning platform with courses, assessments, progress tracking and certificates.",
    description: "We implement and customise a learning management system for training providers, schools and organisations, configured with your branding, course structure and user roles.",
    features: ["Course, module and lesson structure", "Quizzes and assessments", "Learner progress reports", "Certificates of completion", "Learner, facilitator and admin roles"],
    platforms: ["Web browser (desktop, tablet, mobile)"], delivery: "Configured platform delivered in milestones with administrator training.", licence: "Per quotation; open-source platform components remain under their own licences.", support: quoteSupport,
    image: "/media/online-learning.jpg", docs: { href: "/learning-platforms", label: "Learning platforms overview" },
  },
  {
    ...base, slug: "training-portal", ref: "LTC-EL-002", name: "Corporate Training Portal", category: "e-learning", kind: "custom-service", status: "custom-pricing",
    summary: "Onboarding and compliance training for staff, with completion reporting.",
    description: "A private training portal for staff onboarding and compliance programmes, with completion tracking for managers.",
    features: ["Private staff access", "Onboarding and compliance courses", "Completion and results reporting", "Certificates"],
    platforms: ["Web"], delivery: "Milestone delivery with administrator training.", licence: "Per quotation.", support: quoteSupport,
    image: "/media/african-tech-team-office.jpg",
  },
  // Business automation
  {
    ...base, slug: "workflow-automation", ref: "LTC-BA-001", name: "Workflow Automation", category: "business-automation", kind: "custom-service", status: "custom-pricing", featured: true,
    summary: "Automate approvals, notifications, document generation and reporting.",
    description: "We review a manual process with your team and replace it with an automated, auditable workflow integrated with your existing tools.",
    features: ["Process mapping and automation plan", "Automated approvals and notifications", "Document and report generation", "Integration with email, spreadsheets and business systems"],
    platforms: ["Web", "Email", "Cloud services"], delivery: "Delivered in milestones, tested with your team before go-live.", licence: "Custom code ownership transfers on full payment.", support: quoteSupport,
    image: "/media/diverse-team-workspace.jpg",
  },
  // Technical services
  {
    ...base, slug: "api-development-integration", ref: "LTC-TS-001", name: "API Development & Integration", category: "technical-services", kind: "custom-service", status: "custom-pricing", featured: true,
    summary: "Custom APIs and integrations between your systems, third-party services and payment gateways.",
    description: "We design, build and document REST APIs and connect your systems to third-party platforms, with error handling and monitoring.",
    features: ["API design and documentation", "Third-party API integrations", "Payment gateway integration on your merchant account", "Webhooks and data synchronisation", "Monitoring and error handling"],
    platforms: ["REST / JSON", "Webhooks"], delivery: "Milestone delivery with integration testing and documentation.", licence: "Custom code ownership transfers on full payment.", support: quoteSupport,
    image: "/media/code-laptop.jpg",
  },
  {
    ...base, slug: "website-maintenance", ref: "LTC-TS-002", name: "Website Maintenance & Support", category: "technical-services", kind: "subscription", status: "available-quote",
    summary: "Updates, backups, monitoring and support for your website or application.",
    description: "An ongoing monthly service that keeps your website or application secure, current and running, with a defined support allowance.",
    features: ["Security and software updates", "Uptime monitoring", "Backups", "Content and minor feature updates", "Email and telephone support"],
    platforms: ["Websites and web applications"], delivery: "Monthly service, starting on the agreed date.", licence: "Service agreement; cancel with 30 days' notice per our Refund & Cancellation Policy.", support: "Included in the service agreement.",
    image: "/media/african-tech-team-office.jpg",
  },
  {
    ...base, slug: "cloud-hosting-configuration", ref: "LTC-TS-003", name: "Cloud & Hosting Configuration", category: "technical-services", kind: "custom-service", status: "available-quote",
    summary: "Domain, DNS, hosting, SSL and deployment configured correctly.",
    description: "We configure domains, DNS, email records, hosting and automated deployments for websites and applications, without disturbing existing services.",
    features: ["Domain and DNS configuration", "SSL certificates", "Hosting and deployment pipelines", "Email DNS records (SPF, DKIM, DMARC)"],
    platforms: ["Cloud hosting providers"], delivery: "Completed remotely and confirmed in writing.", licence: "Service.", support: quoteSupport,
    image: "/media/code-laptop.jpg",
  },
  // UI/UX
  {
    ...base, slug: "ui-ux-design-service", ref: "LTC-UX-001", name: "UI/UX Design", category: "ui-ux-resources", kind: "custom-service", status: "available-quote",
    summary: "Wireframes, interface designs and prototypes ready for development.",
    description: "User research, journeys, wireframes, high-fidelity designs and an interactive prototype for your website or application.",
    features: ["User journeys and wireframes", "High-fidelity designs", "Interactive prototype", "Design system and developer handover"],
    platforms: ["Figma"], delivery: "Design files shared electronically at each milestone.", licence: "Design ownership transfers on full payment.", support: quoteSupport,
    image: "/media/ux-wireframes.jpg",
  },
  {
    ...base, slug: "business-ui-kit", ref: "LTC-UX-101", name: "Business UI Kit for Figma", category: "ui-ux-resources", kind: "download", status: "coming-soon", planned: true,
    summary: "A planned Figma kit of dashboard, form and marketing components.",
    description: "A planned Figma UI kit containing components and page templates for business websites and dashboards. Not yet available.",
    features: ["Component library (planned)", "Dashboard and form layouts (planned)", "Marketing page sections (planned)"],
    platforms: ["Figma"], format: "Figma file", intendedUse: "Designing business websites and dashboards", delivery: "Download link by email after purchase, once released.", licence: "Single-business licence; no redistribution (per Terms & Conditions).", support: plannedSupport,
    image: "/media/ux-wireframes.jpg",
  },
  // Digital tools
  {
    ...base, slug: "vat-calculator", ref: "LTC-DT-101", name: "South African VAT Calculator", category: "digital-tools", kind: "licensed-software", status: "coming-soon", planned: true, featured: true,
    summary: "A planned online tool for VAT-inclusive and VAT-exclusive calculations at the South African rate.",
    description: "A planned browser-based calculator for adding or removing South African VAT on amounts and line items. Not yet available.",
    features: ["Add or remove VAT (planned)", "Multiple line items (planned)", "Copy or export results (planned)"],
    platforms: ["Web browser"], delivery: "Online access via browser, once released.", licence: "Terms will be published at release.", support: plannedSupport,
    image: "/media/professionals-digital-solutions.jpg",
  },
  {
    ...base, slug: "quotation-invoice-generator", ref: "LTC-DT-102", name: "Quotation & Invoice Generator", category: "digital-tools", kind: "subscription", status: "coming-soon", planned: true,
    summary: "A planned tool for creating professional quotations and invoices in ZAR.",
    description: "A planned online tool for small businesses to produce branded quotations and invoices as PDF. Not yet available.",
    features: ["Branded quotation and invoice templates (planned)", "PDF export (planned)", "Client list (planned)"],
    platforms: ["Web browser"], delivery: "Account access by email, once released.", licence: "Subscription terms will be published at release.", support: plannedSupport,
    image: "/media/consultants-reviewing-project.jpg",
  },
  // Templates & documents
  {
    ...base, slug: "business-proposal-template", ref: "LTC-TD-101", name: "Business Proposal & Quotation Templates", category: "templates-documents", kind: "download", status: "coming-soon", planned: true,
    summary: "Planned editable Word templates for proposals and quotations.",
    description: "A planned set of professionally formatted Microsoft Word templates for business proposals and quotations. Not yet available.",
    features: ["Proposal template (planned)", "Quotation template (planned)", "Usage guide (planned)"],
    platforms: ["Microsoft Word", "Google Docs"], format: "DOCX", intendedUse: "Preparing client proposals and quotations", delivery: "Download link by email after purchase, once released.", licence: "Single-business licence; no resale or redistribution.", support: plannedSupport,
    image: "/media/business-team-planning-meeting.jpg",
  },
  {
    ...base, slug: "financial-projection-spreadsheet", ref: "LTC-TD-102", name: "Financial Projection Spreadsheet", category: "templates-documents", kind: "download", status: "coming-soon", planned: true,
    summary: "A planned Excel model for monthly income, expenses and cash flow.",
    description: "A planned Microsoft Excel template for small-business budgeting and cash-flow projections in ZAR. Not yet available.",
    features: ["Monthly income and expense tracking (planned)", "Cash-flow projection (planned)", "Summary charts (planned)"],
    platforms: ["Microsoft Excel", "Google Sheets"], format: "XLSX", intendedUse: "Budgeting and cash-flow planning", delivery: "Download link by email after purchase, once released.", licence: "Single-business licence; no resale or redistribution.", support: plannedSupport,
    image: "/media/diverse-team-workspace.jpg",
  },
  {
    ...base, slug: "project-plan-template", ref: "LTC-TD-103", name: "Project Plan Template", category: "templates-documents", kind: "download", status: "coming-soon", planned: true,
    summary: "A planned spreadsheet for project milestones, tasks and status reporting.",
    description: "A planned Excel project plan with milestones, task tracking and a status summary. Not yet available.",
    features: ["Milestones and tasks (planned)", "Status and owner tracking (planned)", "Timeline view (planned)"],
    platforms: ["Microsoft Excel", "Google Sheets"], format: "XLSX", intendedUse: "Planning and reporting on projects", delivery: "Download link by email after purchase, once released.", licence: "Single-business licence; no resale or redistribution.", support: plannedSupport,
    image: "/media/african-tech-team-office.jpg",
  },
  {
    ...base, slug: "cv-template-pack", ref: "LTC-TD-104", name: "Professional CV Template Pack", category: "templates-documents", kind: "download", status: "coming-soon", planned: true,
    summary: "Planned editable CV and cover letter templates.",
    description: "A planned pack of clean, professional CV and cover letter templates. Not yet available.",
    features: ["CV templates (planned)", "Cover letter template (planned)"],
    platforms: ["Microsoft Word", "Google Docs"], format: "DOCX", intendedUse: "Job applications", delivery: "Download link by email after purchase, once released.", licence: "Personal-use licence; no resale or redistribution.", support: plannedSupport,
    image: "/media/consultants-reviewing-project.jpg",
  },
  {
    ...base, slug: "course-content-templates", ref: "LTC-TD-105", name: "Course Content Templates", category: "templates-documents", kind: "download", status: "coming-soon", planned: true,
    summary: "Planned templates for lesson plans, assessments and course outlines.",
    description: "A planned set of educational templates for course outlines, lesson plans and assessments. Not yet available.",
    features: ["Course outline (planned)", "Lesson plan (planned)", "Assessment template (planned)"],
    platforms: ["Microsoft Word", "Google Docs"], format: "DOCX", intendedUse: "Designing courses and training programmes", delivery: "Download link by email after purchase, once released.", licence: "Single-organisation licence; no resale or redistribution.", support: plannedSupport,
    image: "/media/online-learning.jpg",
  },
  // Developer resources
  {
    ...base, slug: "nextjs-business-starter", ref: "LTC-DR-101", name: "Next.js Business Website Starter Kit", category: "developer-resources", kind: "download", status: "coming-soon", planned: true, featured: true,
    summary: "A planned starter kit for business websites with SEO, forms and policy pages.",
    description: "A planned Next.js and TypeScript starter for business websites, including page templates, SEO configuration and a server-side enquiry form. Not yet available.",
    features: ["Next.js, TypeScript and Tailwind CSS (planned)", "SEO metadata and sitemap (planned)", "Server-side enquiry form (planned)", "Legal page templates (planned)"],
    platforms: ["Node.js"], requirements: ["Node.js 20 or later", "Working knowledge of React"], format: "Source code (ZIP or private repository)", intendedUse: "Starting business website projects", delivery: "Download link or repository access by email after purchase, once released.", licence: "Developer licence; use in client projects permitted, redistribution of the kit itself not permitted.", support: plannedSupport,
    image: "/media/code-laptop.jpg",
  },
  // APIs (in development; documentation is illustrative)
  {
    ...base, slug: "vat-calculation-api", ref: "LTC-API-101", name: "VAT Calculation API", category: "api-marketplace", kind: "api", status: "coming-soon", planned: true, featured: true,
    summary: "A planned REST API for South African VAT calculations on amounts and line items.",
    description: "A planned API that returns VAT-inclusive and VAT-exclusive values for amounts and invoice line items at the South African standard VAT rate. The API is in development; the documentation below is an illustrative example and may change before release.",
    features: ["Single-amount and line-item calculations", "VAT-inclusive and exclusive modes", "JSON responses with rounding to cents"],
    platforms: ["REST / JSON over HTTPS"], requirements: ["API key issued on approval"], delivery: "API key issued by email after access is approved, once released.", licence: "API terms of use will be published at release.", support: plannedSupport,
    image: "/media/code-laptop.jpg",
    api: {
      version: "v1 (in development)", auth: "API key in the Authorization header (Bearer)", baseUrl: "https://api.letacom.co.za (planned)",
      usage: ["HTTPS only", "Rate limits and pricing will be published at release", "Do not send personal information to this API"],
      endpoints: [
        {
          method: "POST", path: "/v1/vat/calculate", summary: "Calculate VAT for one amount.",
          params: [
            { name: "amount", in: "body", type: "number", required: true, description: "Amount in ZAR." },
            { name: "mode", in: "body", type: "\"inclusive\" | \"exclusive\"", required: true, description: "Whether the amount already includes VAT." },
          ],
          request: `{\n  "amount": 1150.00,\n  "mode": "inclusive"\n}`,
          response: `{\n  "currency": "ZAR",\n  "rate": 0.15,\n  "net": 1000.00,\n  "vat": 150.00,\n  "gross": 1150.00\n}`,
        },
      ],
    },
  },
  {
    ...base, slug: "business-days-api", ref: "LTC-API-102", name: "Business Days API", category: "api-marketplace", kind: "api", status: "coming-soon", planned: true,
    summary: "A planned API for counting South African business days and public holidays between dates.",
    description: "A planned API for calculating working days between two dates, taking South African public holidays into account. The API is in development; the documentation below is an illustrative example and may change before release.",
    features: ["Business-day counts between dates", "South African public holiday list", "Add business days to a date"],
    platforms: ["REST / JSON over HTTPS"], requirements: ["API key issued on approval"], delivery: "API key issued by email after access is approved, once released.", licence: "API terms of use will be published at release.", support: plannedSupport,
    image: "/media/diverse-team-workspace.jpg",
    api: {
      version: "v1 (in development)", auth: "API key in the Authorization header (Bearer)", baseUrl: "https://api.letacom.co.za (planned)",
      usage: ["HTTPS only", "Dates in ISO 8601 format (YYYY-MM-DD)", "Rate limits and pricing will be published at release"],
      endpoints: [
        {
          method: "GET", path: "/v1/business-days", summary: "Count business days between two dates (inclusive).",
          params: [
            { name: "from", in: "query", type: "string (date)", required: true, description: "Start date." },
            { name: "to", in: "query", type: "string (date)", required: true, description: "End date." },
          ],
          response: `{\n  "from": "2026-12-14",\n  "to": "2026-12-18",\n  "businessDays": 4,\n  "holidays": [\n    { "date": "2026-12-16", "name": "Day of Reconciliation" }\n  ]\n}`,
        },
        {
          method: "GET", path: "/v1/holidays", summary: "List South African public holidays for a year.",
          params: [{ name: "year", in: "query", type: "integer", required: true, description: "Calendar year, e.g. 2027." }],
          response: `{\n  "year": 2027,\n  "holidays": [\n    { "date": "2027-01-01", "name": "New Year's Day" }\n  ]\n}`,
        },
      ],
    },
  },
];

export const kindLabel: Record<ListingKind, string> = {
  "custom-service": "Custom professional service",
  "licensed-software": "Licensed software",
  subscription: "Subscription service",
  api: "API service",
  download: "Downloadable product",
};

export const statusLabel: Record<ListingStatus, string> = {
  "available-quote": "Available — Request a Quote",
  "custom-pricing": "Custom Pricing",
  "coming-soon": "Coming Soon",
};

export const getListing = (slug: string) => listings.find((l) => l.slug === slug);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const apiListings = listings.filter((l) => l.kind === "api");
export const templateListings = listings.filter((l) => ["templates-documents", "developer-resources", "ui-ux-resources"].includes(l.category) && l.kind === "download");
