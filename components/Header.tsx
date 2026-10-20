"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const pathname = usePathname();

  const open = openPath === pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-3 after:-bottom-[13px] after:h-0.5 after:origin-left after:rounded-full after:bg-brand after:transition-transform after:duration-300 ${active ? "text-brand after:scale-x-100" : "text-ink-muted after:scale-x-0 hover:text-ink hover:after:scale-x-100"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden rounded-lg bg-navy-900 px-4 py-2 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand sm:inline-flex">
            Request a Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpenPath(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink hover:bg-surface xl:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-white px-4 pb-6 pt-2 xl:hidden">
          {[...nav, { href: "/contact", label: "Contact" }].map((item) => (
            <Link key={item.href} href={item.href} className="block rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-surface">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-3 flex justify-center rounded-lg bg-brand px-4 py-3 font-semibold text-white">
            Request a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
