// Single source of truth for company details. Keep consistent with CIPC records.
export const company = {
  name: "Letacom (Pty) Ltd",
  legalName: "LETACOM (PTY) LTD",
  shortName: "Letacom",
  registration: "2023/189890/07",
  registeredOn: "1 November 2023",
  country: "South Africa",
  url: "https://letacom.co.za",
  email: "hello@letacom.co.za",
  phone: "+27 63 076 9938",
  phoneHref: "tel:+27630769938",
  address: {
    lines: ["21 Featherbrook Estate", "47 Meadow Avenue, Equestria", "Pretoria, Gauteng, 0184", "South Africa"],
    oneLine: "21 Featherbrook Estate, 47 Meadow Avenue, Equestria, Pretoria, Gauteng, 0184, South Africa",
  },
  hours: "Monday to Friday, 08:00 to 17:00 (SAST)",
  responseTime: "within one business day",
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/software-development", label: "Software" },
  { href: "/learning-platforms", label: "Learning Platforms" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
] as const;

export const legalNav = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund & Cancellation Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/delivery-policy", label: "Delivery & Fulfilment Policy" },
  { href: "/payment-security", label: "Payment & Security" },
] as const;

export const policyUpdated = "20 October 2026";
