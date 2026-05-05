import Link from "next/link";
import { EmailIcon, PhoneIcon, LocationIcon, LinkedInIcon } from "@/components/icons";

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

const quickLinks = [
  { name: "Industrial Equipment", href: "/products/equipment" },
  { name: "Systems", href: "/products/systems" },
  { name: "Spare Parts", href: "/products/spare-parts" },
  { name: "IT Hardware & Software", href: "/products/it-hardware-software" },
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
            <p className="text-sm text-primary-300 leading-relaxed mb-6">
              Africa-focused, globally sourced solutions. Your industrial supply
              and procurement partner across Southern Africa.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-primary-700 hover:bg-primary-500 transition-colors"
                aria-label="LinkedIn"
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
                  47 Meadow Avenue, South Africa
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <EmailIcon size={16} className="text-primary-300 flex-shrink-0" />
                <a
                  href="mailto:info@letacom.co.za"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  info@letacom.co.za
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon size={16} className="text-primary-300 flex-shrink-0" />
                <a
                  href="tel:+27000000000"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  [PHONE_NUMBER_PLACEHOLDER]
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-300">
            &copy; {new Date().getFullYear()} Letacom South Africa. All rights reserved.
          </p>
          <p className="text-xs text-primary-300 italic">
            Africa-focused, globally sourced solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
