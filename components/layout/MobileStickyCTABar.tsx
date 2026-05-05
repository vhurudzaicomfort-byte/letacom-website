"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "@/components/icons";

export function MobileStickyCTABar() {
  const pathname = usePathname();
  if (pathname?.startsWith("/request-quote")) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 lg:hidden bg-white border-t border-graphite-300/40 shadow-[0_-4px_12px_rgba(0,0,0,0.04)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="px-4 py-3">
        <Link
          href="/request-quote"
          className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-accent-500 text-white font-heading font-medium rounded hover:bg-accent-600 transition-colors"
        >
          Request a Quote
          <ArrowRightIcon size={16} />
        </Link>
      </div>
    </div>
  );
}
