// Single source of truth for company details. Keep consistent with CIPC records.
export const company = {
  name: "Letacom (Pty) Ltd",
  legalName: "LETACOM (PTY) LTD",
  shortName: "Letacom",
  registration: "2023/189890/07",
  registeredOn: "1 November 2023",
  // Taxpayer reference number deliberately not published.
  taxStatus: "Registered with SARS",
  country: "South Africa",
  url: "https://letacom.co.za",
  email: "hello@letacom.co.za",
  phone: "+27 63 076 9938",
  phoneHref: "tel:+27630769938",
  address: {
    lines: ["47 Meadow Avenue", "Equestria", "Pretoria, Gauteng, 0184", "South Africa"],
    oneLine: "47 Meadow Avenue, Equestria, Pretoria, Gauteng, 0184, South Africa",
    mapQuery: "47 Meadow Avenue, Equestria, Pretoria, 0184, South Africa",
  },
  hours: "Monday to Friday, 08:00 to 17:00 (SAST)",
  responseTime: "within one business day",
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/learning-platforms", label: "Learning Platforms" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
] as const;

export const legalNav = [
  { href: "/privacy-policy", label: "Privacy Policy", pdf: "/downloads/policies/letacom-privacy-policy.pdf" },
  { href: "/refund-policy", label: "Refund & Cancellation Policy", pdf: "/downloads/policies/letacom-refund-policy.pdf" },
  { href: "/terms-and-conditions", label: "Terms & Conditions", pdf: "/downloads/policies/letacom-terms-and-conditions.pdf" },
  { href: "/delivery-policy", label: "Delivery & Fulfilment Policy", pdf: "/downloads/policies/letacom-delivery-policy.pdf" },
  { href: "/payment-security", label: "Payment & Security", pdf: "/downloads/policies/letacom-payment-security.pdf" },
] as const;

export const downloads = [
  { href: "/downloads/letacom-company-profile.pdf", label: "Company Profile", description: "Who we are, registration details, services and how we work.", file: "PDF" },
  { href: "/downloads/letacom-services-catalogue.pdf", label: "Services & Products Catalogue", description: "Our services, marketplace listings and availability.", file: "PDF" },
] as const;

export const policyUpdated = "20 October 2026";
