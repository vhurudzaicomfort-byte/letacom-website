import Link from "next/link";
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  WhatsAppIcon,
  LinkedInIcon,
} from "@/components/icons";

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Products", href: "/products" },
  { name: "Request a Quote", href: "/request-quote" },
  { name: "Contact", href: "/contact" },
];

const industryLinks = [
  { name: "Breweries & Beverage", href: "/industries/breweries" },
  { name: "Manufacturing", href: "/industries/manufacturing" },
  { name: "Transport & Logistics", href: "/industries/transport-logistics" },
  { name: "Sales & Distribution", href: "/industries/sales-distribution" },
];

const departmentEmails = [
  { label: "hello@letacom.co.za", purpose: "general", href: "mailto:hello@letacom.co.za" },
  { label: "sales@letacom.co.za", purpose: "sales / RFQs", href: "mailto:sales@letacom.co.za" },
  { label: "support@letacom.co.za", purpose: "after-sales", href: "mailto:support@letacom.co.za" },
  { label: "info@letacom.co.za", purpose: "info", href: "mailto:info@letacom.co.za" },
];

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-bold tracking-tight">
                <span className="text-white">LETA</span>
                <span className="text-primary-300">COM</span>
              </span>
            </Link>
            <p className="text-sm text-primary-300 leading-relaxed mb-5">
              Sourced globally. Designed, built, and supported locally. Cape to
              Cairo, in the African spirit of trade.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-primary-700 hover:bg-primary-500 transition-colors"
                aria-label="Letacom on LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-heading font-medium text-sm uppercase tracking-wider text-primary-300 mb-4">
              Industries
            </h3>
            <ul className="space-y-2.5">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-medium text-sm uppercase tracking-wider text-primary-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-medium text-sm uppercase tracking-wider text-primary-300 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <LocationIcon size={16} className="text-primary-300 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">
                  47 Meadow Avenue, Equestria 0184,
                  <br />
                  Pretoria, South Africa
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon size={16} className="text-primary-300 flex-shrink-0" />
                <a
                  href="tel:+27630769938"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  +27 63 076 9938
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsAppIcon size={16} className="text-primary-300 flex-shrink-0" />
                <a
                  href="https://wa.me/27630769938"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  WhatsApp / SMS
                </a>
              </li>
            </ul>

            <ul className="mt-4 pt-4 border-t border-primary-700 space-y-1.5">
              {departmentEmails.map((d) => (
                <li key={d.href} className="flex items-baseline gap-2 text-xs">
                  <EmailIcon size={12} className="text-primary-300 flex-shrink-0 self-center" />
                  <a
                    href={d.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {d.label}
                  </a>
                  <span className="text-primary-300">— {d.purpose}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-300">
            &copy; {new Date().getFullYear()} Letacom South Africa. All rights reserved.
          </p>
          <p className="text-xs text-primary-300 italic">
            Sourced globally. Designed, built, and supported locally.
          </p>
        </div>
      </div>
    </footer>
  );
}
