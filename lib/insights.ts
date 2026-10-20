export type Insight = {
  slug: string;
  title: string;
  description: string;
  published: string;
  readMinutes: number;
  related: { href: string; label: string };
  body: { h?: string; p?: string; list?: string[] }[];
};

export const insights: Insight[] = [
  {
    slug: "what-does-a-custom-software-development-company-do",
    title: "What does a custom software development company do?",
    description: "How custom software differs from off-the-shelf tools, what a development company delivers, and when a business should consider it.",
    published: "2026-10-20",
    readMinutes: 4,
    related: { href: "/software-development", label: "Software development services" },
    body: [
      { p: "A custom software development company designs and builds applications for one organisation's specific processes, rather than selling the same product to everyone. The result is software that fits how your team already works, instead of a team adapting to a generic tool." },
      { h: "What the work usually includes" },
      { list: ["Discovery: understanding your processes, users, data and goals, and writing a specification.", "Design: wireframes and interface designs approved before coding begins.", "Development: building the application in stages, with regular demonstrations.", "Testing and launch: quality assurance, user acceptance testing and deployment.", "Support: fixing defects during a warranty period, then ongoing maintenance."] },
      { h: "When custom software makes sense" },
      { p: "Off-the-shelf software is usually the right first choice when a standard product already fits. Custom software becomes worthwhile when your process is a competitive advantage, when you are juggling several tools and spreadsheets that do not talk to each other, or when licence costs for generic tools keep growing with your team." },
      { h: "What to ask a development partner" },
      { list: ["Who owns the source code once the project is paid for?", "How is the project split into milestones, and what is delivered at each?", "How are changes to scope handled and priced?", "What happens after launch: warranty, support and hosting?"] },
      { p: "Clear answers to these questions, in writing, are the best predictor of a smooth project." },
    ],
  },
  {
    slug: "business-website-cost-south-africa",
    title: "How much does a business website cost in South Africa?",
    description: "The factors that determine the price of a business website in South Africa, and how to compare quotations fairly.",
    published: "2026-10-20",
    readMinutes: 4,
    related: { href: "/website-development", label: "Website development" },
    body: [
      { p: "There is no single price for a business website because the cost follows the scope. Two quotations can differ widely simply because they describe different work. Understanding the cost drivers helps you compare like with like." },
      { h: "What drives the cost" },
      { list: ["Number of pages and the amount of unique design required.", "Who writes the content and sources the photography.", "Functionality: enquiry forms, bookings, online payments, customer accounts or integrations.", "E-commerce: product count, payment gateway set-up and order processes.", "Ongoing costs: domain registration, hosting, email and maintenance."] },
      { h: "Once-off and recurring costs" },
      { p: "Separate the once-off build from recurring costs. A domain and hosting are paid annually or monthly, and a maintenance plan covers updates, backups and support. A low build price with expensive or unclear recurring fees is not necessarily cheaper over two or three years." },
      { h: "Comparing quotations" },
      { list: ["Check that each quotation lists the same pages, features and deliverables.", "Confirm who owns the website and its content after payment.", "Ask how many rounds of design changes are included.", "Ask whether search engine set-up, mobile testing and SSL are included."] },
      { p: "Letacom provides written quotations in South African Rand that itemise these elements, so you can see exactly what is included." },
    ],
  },
  {
    slug: "benefits-of-business-automation",
    title: "How do companies benefit from business automation?",
    description: "Where automation saves time and reduces errors, how to choose the first process to automate, and what to avoid.",
    published: "2026-10-20",
    readMinutes: 3,
    related: { href: "/services#automation", label: "Business automation services" },
    body: [
      { p: "Business automation uses software to carry out repetitive steps that people currently do by hand: copying data between systems, sending reminders, generating documents or compiling reports." },
      { h: "Typical benefits" },
      { list: ["Time saved on repetitive administration.", "Fewer errors from manual data capture.", "Faster turnaround for approvals and customer responses.", "A clear audit trail of who did what, and when.", "Reports that are ready when you need them, not compiled at month-end."] },
      { h: "Choosing what to automate first" },
      { p: "Start with a process that is frequent, rule-based and well understood, such as sending quotation follow-ups or moving enquiry details into a spreadsheet or CRM. Avoid starting with a process that changes often or depends heavily on judgement." },
      { h: "A practical approach" },
      { p: "Map the current process step by step, agree what the automated version should do, automate in a small first stage, and measure the time saved before expanding. This keeps the investment proportional to the benefit." },
    ],
  },
  {
    slug: "what-is-a-learning-management-system",
    title: "What is a learning management system (LMS)?",
    description: "An introduction to learning management systems: what they do, who uses them and what to consider before implementing one.",
    published: "2026-10-20",
    readMinutes: 3,
    related: { href: "/learning-platforms", label: "Learning platforms" },
    body: [
      { p: "A learning management system (LMS) is software for delivering, tracking and reporting on online learning. Learners sign in to access courses, and administrators see who has enrolled, progressed and completed." },
      { h: "Core features" },
      { list: ["Courses organised into modules and lessons.", "Videos, documents and interactive content.", "Quizzes and assessments, with automatic or manual marking.", "Progress tracking and completion reports.", "Certificates of completion.", "User roles for learners, facilitators and administrators."] },
      { h: "Who uses an LMS" },
      { p: "Training providers, schools, tutors, non-profit programmes and companies running onboarding or compliance training all use LMS platforms to reach learners wherever they are." },
      { h: "Before you choose one" },
      { list: ["How many learners will use it, and on which devices?", "Do you need certificates, assessments or integration with other systems?", "Who will create and maintain course content?", "How will learner personal information be protected under POPIA?"] },
    ],
  },
  {
    slug: "how-businesses-integrate-apis",
    title: "How can businesses integrate APIs?",
    description: "A plain-language guide to APIs, common business integrations and how to plan a reliable integration project.",
    published: "2026-10-20",
    readMinutes: 4,
    related: { href: "/marketplace/apis", label: "API marketplace" },
    body: [
      { p: "An API (application programming interface) lets two software systems exchange data automatically. Integrating APIs means connecting your website, accounting, CRM or operational tools so information flows between them without manual re-entry." },
      { h: "Common integrations" },
      { list: ["Payment gateways for online checkout.", "Accounting software for invoices and payments.", "CRM systems for leads captured on your website.", "Courier and logistics services for order tracking.", "Email and messaging services for notifications."] },
      { h: "Planning an integration" },
      { list: ["Define exactly which data moves, in which direction and how often.", "Read the provider's documentation and terms, including limits and costs.", "Keep API keys on the server, never in website code that browsers can see.", "Plan for failures: retries, alerts and a way to reconcile missed data.", "Test with sandbox or test credentials before going live."] },
      { h: "Build or buy" },
      { p: "Many integrations are available as ready-made connectors. Custom integration work is worthwhile when connectors do not exist, do not support your process, or when reliability and data control matter." },
    ],
  },
  {
    slug: "buying-digital-tools-for-business",
    title: "What should businesses consider when buying digital tools?",
    description: "A checklist for evaluating software, templates and online tools before you buy, from licensing to data protection.",
    published: "2026-10-20",
    readMinutes: 3,
    related: { href: "/marketplace", label: "Digital marketplace" },
    body: [
      { p: "Digital tools, from spreadsheet templates to online software subscriptions, can save time, but the wrong purchase creates costs and risks. A short checklist helps you buy with confidence." },
      { h: "Checklist" },
      { list: ["Fit: does it solve a specific, current problem?", "Licence: how many users or businesses may use it, and may it be shared?", "Delivery: is it a download, online access or a subscription, and when do you receive it?", "Pricing: is the price in Rand, and are there recurring fees or renewals?", "Data: where is your data stored, and does the supplier comply with POPIA?", "Support and refunds: who helps if it does not work, and what is the refund policy?", "Supplier: is the seller a registered business with published contact details?"] },
      { p: "Letacom publishes its delivery, refund, privacy and payment policies so customers can check these points before any purchase." },
    ],
  },
];

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);
