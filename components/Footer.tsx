import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { company, downloads, legalNav, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <Logo variant="light" />
          <p className="text-sm leading-relaxed">
            South African technology company delivering software, websites, e-commerce, learning platforms and digital products.
          </p>
          <dl className="space-y-1 text-sm">
            <div>
              <dt className="inline text-white/50">Company: </dt>
              <dd className="inline font-semibold text-white">{company.legalName}</dd>
            </div>
            <div>
              <dt className="inline text-white/50">Registration No: </dt>
              <dd className="inline font-semibold text-white">{company.registration}</dd>
            </div>
            <div>
              <dt className="inline text-white/50">Tax: </dt>
              <dd className="inline font-semibold text-white">{company.taxStatus}</dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h2>
          <ul className="space-y-2 text-sm">
            {[{ href: "/", label: "Home" }, ...nav, { href: "/website-development", label: "Website Development" }, { href: "/products", label: "Digital Products" }, { href: "/contact", label: "Contact Us" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Marketplace</h2>
          <ul className="mb-8 space-y-2 text-sm">
            {[{ href: "/marketplace", label: "Marketplace" }, { href: "/marketplace/apis", label: "API Marketplace" }, { href: "/marketplace/templates", label: "Templates & Resources" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Policies</h2>
          <ul className="space-y-2 text-sm">
            {downloads.map((d) => (
              <li key={d.href}>
                <a href={d.href} download className="hover:text-white">{d.label} (PDF)</a>
              </li>
            ))}
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden />
              <address className="not-italic">
                {company.address.lines.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
              </address>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden />
              <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden />
              <a href={company.phoneHref} className="hover:text-white">{company.phone}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-white/50 sm:px-6 md:flex-row md:justify-between lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. Registration No. {company.registration}. All rights reserved.
          </p>
          <p>All prices in South African Rand (ZAR). Letacom collects payment only for its own products and services.</p>
        </div>
      </div>
    </footer>
  );
}
