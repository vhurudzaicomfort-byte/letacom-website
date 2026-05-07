import Link from "next/link";
import Image from "next/image";
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
  { label: "sales@letacom.co.za", href: "mailto:sales@letacom.co.za" },
  { label: "support@letacom.co.za", href: "mailto:support@letacom.co.za" },
  { label: "hello@letacom.co.za", href: "mailto:hello@letacom.co.za" },
  { label: "info@letacom.co.za", href: "mailto:info@letacom.co.za" },
];

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company */}
          <div>
            <Link href="/" aria-label="Letacom South Africa — home" className="inline-block mb-5">
              <Image
                src="/brand/letacom-logo-white.png"
                alt="LETACOM"
                width={1080}
                height={137}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-on-navy-muted leading-relaxed mb-5">
              Industrial supply, procurement, and lifecycle support for African
              industry — sourced globally, designed and built locally.
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
            <h3 className="font-heading font-medium text-sm uppercase tracking-wider text-on-navy mb-4">
              Industries
            </h3>
            <ul className="space-y-2.5">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-medium text-sm uppercase tracking-wider text-on-navy mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-medium text-sm uppercase tracking-wider text-on-navy mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <LocationIcon size={16} className="text-on-navy-muted mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">
                  47 Meadow Avenue, Equestria 0184,
                  <br />
                  Pretoria, South Africa
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon size={16} className="text-on-navy-muted flex-shrink-0" />
                <a
                  href="tel:+27630769938"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  +27 63 076 9938
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsAppIcon size={16} className="text-on-navy-muted flex-shrink-0" />
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

            <div className="mt-5 pt-5 border-t border-primary-700">
              <p className="font-heading text-[11px] font-medium uppercase tracking-[0.18em] text-on-navy-subtle mb-3">
                Direct contact
              </p>
              <ul className="space-y-1.5">
                {departmentEmails.map((d) => (
                  <li key={d.href} className="flex items-center gap-2.5">
                    <EmailIcon size={12} className="text-on-navy-muted flex-shrink-0" />
                    <a
                      href={d.href}
                      className="link-underline text-xs text-white/75 hover:text-white transition-colors"
                    >
                      {d.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-on-navy-subtle">
            &copy; {new Date().getFullYear()} Letacom South Africa. All rights reserved.
          </p>
          <p className="text-xs text-on-navy-subtle italic">
            Sourced globally. Designed, built, and supported locally.
          </p>
        </div>
      </div>
    </footer>
  );
}
