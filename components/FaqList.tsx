"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import type { Faq } from "@/lib/faqs";

export function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((f, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const btnId = `${baseId}-btn-${i}`;
        return (
          <div key={f.q}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-base font-semibold text-ink transition-colors hover:text-brand sm:px-6"
              >
                {f.q}
                <Plus size={20} aria-hidden className={`shrink-0 text-brand transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-6 sm:px-6">
                  <p className="leading-relaxed text-ink-muted">{f.a}</p>
                  {f.link && (
                    <Link href={f.link.href} tabIndex={isOpen ? 0 : -1} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-deep">
                      {f.link.label}
                      <ArrowRight size={14} aria-hidden />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
