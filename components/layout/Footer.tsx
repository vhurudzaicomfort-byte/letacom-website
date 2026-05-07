import Link from "next/link";
import Image from "next/image";
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  WhatsAppIcon,
  LinkedInGlyphIcon,
  XIcon,
  FacebookIcon,
  InstagramIcon,
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

const socials: { label: string; href: string; Icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedInGlyphIcon },
  { label: "X", href: "https://x.com", Icon: XIcon },
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
];

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-site py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company */}
          <div>
            <Link href="/" aria-label="Letacom South Africa — home" className="inline-block mb-5">
              <Image
                src="/brand/letacom-logo-white.png"
                alt="LETACOM"
                width={1080}
                height={137}
                priority={false}
                className="h-10 md:h-11 w-auto"
                style={{ height: "auto", maxHeight: "44px" }}
              />
            </Link>
            <p className="text-sm text-on-navy-muted leading-relaxed mb-6">
              We design, build, supply, install, and support industrial systems
              for African industry — one accountable team, end-to-end.
            </p>
            <div className="flex items-center gap-2.5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Letacom on ${label}`}
                  className="w-9 h-9 flex items-center justify-center rounded bg-primary-700 text-on-navy hover:bg-accent-500 hover:text-white transition-colors duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
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
        <div className="mt-12 pt-8 border-t border-primary-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-on-navy-subtle">
            &copy; {new Date().getFullYear()} Letacom South Africa. All rights reserved.
          </p>
          <p className="text-xs text-on-navy-subtle">
            Website designed and developed by{" "}
            <a
              href="https://www.synvastech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-on-navy hover:text-white transition-colors"
            >
              Synvas Technologies
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
