export type Service = {
  slug: string;
  icon: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "custom-software",
    icon: "Code2",
    title: "Custom Software Development",
    summary: "Bespoke business applications built around how your organisation actually works.",
    description:
      "We design and build web-based business applications, internal portals and data-driven systems tailored to your processes, from discovery and specification through to deployment and handover.",
    deliverables: ["Requirements and solution specification", "Web application with admin dashboard", "User roles and secure access", "Source code and technical documentation", "Deployment and handover training"],
  },
  {
    slug: "websites",
    icon: "Globe",
    title: "Website Design & Development",
    summary: "Fast, credible, mobile-first websites that represent your business properly.",
    description:
      "Corporate and marketing websites built with modern frameworks, optimised for speed, search visibility and accessibility, with content you can keep current.",
    deliverables: ["Custom design aligned with your brand", "Responsive pages for mobile, tablet and desktop", "SEO metadata, sitemap and analytics setup", "Contact and enquiry forms", "Domain, hosting and SSL configuration"],
  },
  {
    slug: "e-commerce",
    icon: "ShoppingCart",
    title: "E-Commerce Platforms",
    summary: "Online stores with catalogues, carts and integrated South African payment gateways.",
    description:
      "We build online stores that let your business sell its own products, including product management, order handling and integration with your chosen payment gateway account.",
    deliverables: ["Product catalogue and inventory management", "Cart and checkout flow", "Payment gateway integration on your merchant account", "Order notifications and customer emails", "Store administration training"],
  },
  {
    slug: "lms",
    icon: "GraduationCap",
    title: "Learning Management Systems",
    summary: "Online learning platforms for training providers, schools and corporate teams.",
    description:
      "We implement and customise learning platforms that deliver courses, track learner progress and issue assessments and certificates, for education and workforce training.",
    deliverables: ["Course and module structure", "Learner registration and enrolment", "Quizzes, assessments and progress tracking", "Certificates of completion", "Administrator and facilitator dashboards"],
  },
  {
    slug: "digital-products",
    icon: "Boxes",
    title: "Online Tools & Digital Products",
    summary: "Purpose-built online tools and software products for specific business tasks.",
    description:
      "We develop focused online tools such as calculators, booking systems, client portals and productivity utilities, either as custom builds or as Letacom digital products.",
    deliverables: ["Tool scoping and user flow design", "Web-based tool or utility", "Hosting and access setup", "User guide", "Support during the warranty period"],
  },
  {
    slug: "automation",
    icon: "Workflow",
    title: "Business Automation",
    summary: "Replace repetitive manual work with reliable, automated workflows.",
    description:
      "We analyse manual processes such as data capture, approvals, reporting and notifications, and automate them with integrated software workflows that reduce errors and save time.",
    deliverables: ["Process review and automation plan", "Automated workflows and notifications", "Reporting dashboards", "Integration with existing tools", "Staff training"],
  },
  {
    slug: "ui-ux",
    icon: "PenTool",
    title: "UI/UX Design",
    summary: "Clear, usable interfaces designed before a single line of code is written.",
    description:
      "We research users, map journeys and design interfaces for websites and applications, producing wireframes, interactive prototypes and design systems ready for development.",
    deliverables: ["User journeys and wireframes", "High-fidelity interface designs", "Interactive prototype", "Component library and style guide", "Developer handover files"],
  },
  {
    slug: "templates",
    icon: "LayoutTemplate",
    title: "Digital Templates & Resources",
    summary: "Ready-made website, document and design templates for businesses.",
    description:
      "We create professional digital templates and resources that businesses can adapt and reuse. Ready-made items are listed on our Digital Products page once available for sale.",
    deliverables: ["Website and landing page templates", "Business document templates", "Design assets and UI kits", "Usage instructions", "Licence terms per product"],
  },
  {
    slug: "integration",
    icon: "Plug",
    title: "Software Integration",
    summary: "Connect your systems so data flows where it is needed.",
    description:
      "We integrate business systems, third-party APIs and payment gateways, so that your website, accounting, CRM and operational tools share data reliably.",
    deliverables: ["Integration architecture", "API connections and data mapping", "Payment gateway integration", "Error handling and monitoring", "Integration documentation"],
  },
  {
    slug: "support",
    icon: "LifeBuoy",
    title: "Website Maintenance & Technical Support",
    summary: "Ongoing updates, monitoring and support for your websites and applications.",
    description:
      "We keep your digital platforms secure, up to date and running, with scheduled maintenance, content updates, backups and responsive technical support.",
    deliverables: ["Software and security updates", "Uptime and performance monitoring", "Backups and recovery", "Content and minor feature updates", "Email and telephone support"],
  },
];
