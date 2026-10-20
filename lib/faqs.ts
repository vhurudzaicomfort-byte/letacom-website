export type Faq = { q: string; a: string; link?: { href: string; label: string } };

export const faqs: Faq[] = [
  {
    q: "What services does Letacom (Pty) Ltd provide?",
    a: "We provide custom software development, website design and development, e-commerce platforms, learning management systems, online tools and digital products, business automation, UI/UX design, digital templates, software integration, and website maintenance and technical support.",
    link: { href: "/services", label: "View all services" },
  },
  {
    q: "Is Letacom a registered South African company?",
    a: "Yes. Letacom (Pty) Ltd is a private company registered with the Companies and Intellectual Property Commission (CIPC) under registration number 2023/189890/07, with its registered office in Pretoria, Gauteng.",
    link: { href: "/about", label: "About Letacom" },
  },
  {
    q: "How do I request a quotation?",
    a: "Complete the enquiry form on our Contact page, choose the relevant service and describe your requirements. We respond within one business day, and where needed we arrange a short consultation before issuing a written quotation.",
    link: { href: "/contact", label: "Request a quote" },
  },
  {
    q: "Do you develop custom software and business applications?",
    a: "Yes. We build web-based business applications, client portals, internal systems and dashboards tailored to your processes, with full documentation and handover.",
    link: { href: "/software-development", label: "Software development" },
  },
  {
    q: "Can Letacom design and develop an e-commerce website?",
    a: "Yes. We build online stores with product catalogues, cart and checkout, order notifications and integration with a payment gateway account registered in your business's name.",
  },
  {
    q: "Do you provide online learning platforms and LMS solutions?",
    a: "Yes. We implement and customise learning management systems with course structures, learner enrolment, assessments, progress tracking and certificates.",
    link: { href: "/learning-platforms", label: "Learning platforms" },
  },
  {
    q: "Do you sell digital products, templates and online tools?",
    a: "Our digital products catalogue is being prepared. Products are only offered for sale once they are complete and ready for immediate delivery, with the price shown in South African Rand. You can enquire about any product in the meantime.",
    link: { href: "/products", label: "Digital products" },
  },
  {
    q: "How are digital products delivered?",
    a: "Digital products are delivered electronically: by download link or account access sent to the email address used at purchase, normally within 24 hours of confirmed payment. No physical goods are shipped.",
    link: { href: "/delivery-policy", label: "Delivery & Fulfilment Policy" },
  },
  {
    q: "How long does a website or software development project take?",
    a: "Timelines depend on scope. As a guide, a standard business website typically takes 2 to 4 weeks, and custom software or platform projects are delivered in agreed milestones over several weeks to a few months. Your quotation states the schedule.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We currently accept Electronic Funds Transfer (EFT) to Letacom's business bank account against a formal invoice. Online card payments will be introduced once our payment gateway merchant verification is complete. All prices are in South African Rand.",
    link: { href: "/payment-security", label: "Payment & Security" },
  },
  {
    q: "What is your refund and cancellation policy?",
    a: "Custom projects may be cancelled in writing, with refunds calculated against work completed. Digital products can be refunded if they are defective, not as described or not delivered. Approved refunds are processed within 14 business days.",
    link: { href: "/refund-policy", label: "Refund & Cancellation Policy" },
  },
  {
    q: "Do you provide technical support and maintenance?",
    a: "Yes. Every project includes a warranty period for defect fixes, and we offer ongoing maintenance and support covering updates, backups, monitoring and content changes.",
  },
  {
    q: "Can you integrate third-party applications and payment gateways?",
    a: "Yes. We integrate APIs, accounting and CRM tools, and South African payment gateways. Payment gateway integrations are configured on the client's own merchant account, so payments go directly to the client.",
  },
  {
    q: "How do I contact customer support?",
    a: "Email hello@letacom.co.za or call +27 63 076 9938, Monday to Friday, 08:00 to 17:00 (SAST). You can also use the enquiry form on our Contact page.",
    link: { href: "/contact", label: "Contact us" },
  },
  {
    q: "How is my personal information protected?",
    a: "We process personal information in line with the Protection of Personal Information Act (POPIA). We collect only what is needed to respond to enquiries and deliver services, do not sell personal information, and use secure, encrypted systems.",
    link: { href: "/privacy-policy", label: "Privacy Policy" },
  },
];
