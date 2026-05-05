"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MenuIcon, CloseIcon, ChevronIcon } from "@/components/icons";

const industries = [
  { name: "Breweries & Beverage", href: "/industries/breweries" },
  { name: "Manufacturing & Processing", href: "/industries/manufacturing" },
  { name: "Transport & Logistics", href: "/industries/transport-logistics" },
  { name: "Sales & Distribution", href: "/industries/sales-distribution" },
];

const products = [
  { name: "Industrial Equipment", href: "/products/equipment" },
  { name: "Accessories", href: "/products/accessories" },
  { name: "Spare Parts", href: "/products/spare-parts" },
  { name: "Tools & Workshop", href: "/products/tools" },
  { name: "Systems", href: "/products/systems" },
  { name: "IT Hardware & Software", href: "/products/it-hardware-software" },
  { name: "Branded Consumables", href: "/products/branded-consumables" },
];

function DropdownMenu({
  label,
  items,
  overviewHref,
}: {
  label: string;
  items: { name: string; href: string }[];
  overviewHref: string;
}) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-sm font-medium text-graphite-700 hover:text-primary-700 transition-colors py-2">
        {label}
        <ChevronIcon size={14} className="rotate-90 transition-transform group-hover:rotate-[270deg]" />
      </button>
      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="bg-white border border-graphite-300/50 rounded shadow-lg min-w-[220px] py-2">
          <Link
            href={overviewHref}
            className="block px-4 py-2 text-sm font-medium text-primary-700 hover:bg-graphite-100 transition-colors"
          >
            Overview
          </Link>
          <div className="h-px bg-graphite-300/30 mx-4 my-1" />
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-graphite-700 hover:bg-graphite-100 hover:text-primary-700 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="font-heading text-2xl lg:text-3xl font-bold tracking-tight">
              <span className="text-primary-900">LETA</span>
              <span className="text-primary-500">COM</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-graphite-700 hover:text-primary-700 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-graphite-700 hover:text-primary-700 transition-colors"
            >
              About
            </Link>
            <DropdownMenu
              label="Industries"
              items={industries}
              overviewHref="/industries"
            />
            <Link
              href="/solutions"
              className="text-sm font-medium text-graphite-700 hover:text-primary-700 transition-colors"
            >
              Solutions
            </Link>
            <DropdownMenu
              label="Products"
              items={products}
              overviewHref="/products"
            />
            <Link
              href="/contact"
              className="text-sm font-medium text-graphite-700 hover:text-primary-700 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/request-quote"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-accent-500 text-white text-sm font-heading font-medium rounded hover:bg-accent-600 transition-colors"
            >
              Request a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-graphite-700 hover:text-primary-700"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white overflow-y-auto lg:hidden">
          <nav className="container-site py-8 space-y-2">
            <MobileLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>
            <MobileLink href="/about" onClick={() => setMobileOpen(false)}>About</MobileLink>

            {/* Industries */}
            <div>
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className="flex items-center justify-between w-full py-3 text-lg font-heading font-medium text-graphite-900"
              >
                Industries
                <ChevronIcon
                  size={18}
                  className={`transition-transform ${industriesOpen ? "rotate-[270deg]" : "rotate-90"}`}
                />
              </button>
              {industriesOpen && (
                <div className="pl-4 space-y-1 pb-2">
                  <MobileLink href="/industries" onClick={() => setMobileOpen(false)}>Overview</MobileLink>
                  {industries.map((item) => (
                    <MobileLink key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                      {item.name}
                    </MobileLink>
                  ))}
                </div>
              )}
            </div>

            <MobileLink href="/solutions" onClick={() => setMobileOpen(false)}>Solutions</MobileLink>

            {/* Products */}
            <div>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center justify-between w-full py-3 text-lg font-heading font-medium text-graphite-900"
              >
                Products
                <ChevronIcon
                  size={18}
                  className={`transition-transform ${productsOpen ? "rotate-[270deg]" : "rotate-90"}`}
                />
              </button>
              {productsOpen && (
                <div className="pl-4 space-y-1 pb-2">
                  <MobileLink href="/products" onClick={() => setMobileOpen(false)}>Overview</MobileLink>
                  {products.map((item) => (
                    <MobileLink key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                      {item.name}
                    </MobileLink>
                  ))}
                </div>
              )}
            </div>

            <MobileLink href="/contact" onClick={() => setMobileOpen(false)}>Contact</MobileLink>

            <div className="pt-4">
              <Link
                href="/request-quote"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 bg-accent-500 text-white text-base font-heading font-medium rounded hover:bg-accent-600 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-3 text-lg font-heading font-medium text-graphite-700 hover:text-primary-700 transition-colors"
    >
      {children}
    </Link>
  );
}
