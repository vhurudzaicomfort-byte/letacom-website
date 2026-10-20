import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pillars } from "@/lib/solutions";

/** Four-pillar overview of Letacom solutions, linking to /solutions anchors. */
export function SolutionsGrid({ dark = false }: { dark?: boolean }) {
  return (
    <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map((p, pi) => (
        <div key={p.slug} data-reveal>
          <h3 className={`text-sm font-bold uppercase tracking-[0.16em] ${dark ? "text-[#7fa8ff]" : "text-brand"}`}>{p.name}</h3>
          <ul className="mt-6 space-y-6">
            {p.solutions.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions#${s.slug}`} className="group block">
                  <span className={`flex items-center gap-1.5 text-lg font-semibold transition-colors ${dark ? "text-white group-hover:text-[#7fa8ff]" : "text-ink group-hover:text-brand"}`}>
                    {s.title}
                    <ArrowRight size={16} className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
                  </span>
                  <span className={`mt-1 block text-sm leading-relaxed ${dark ? "text-white/60" : "text-ink-muted"}`}>{s.tagline}</span>
                </Link>
              </li>
            ))}
            {pi === pillars.length - 1 && (
              <li>
                <Link href="/services" className="group block">
                  <span className={`flex items-center gap-1.5 text-lg font-semibold ${dark ? "text-white" : "text-ink"} group-hover:text-brand`}>
                    See all services <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                  <span className={`mt-1 block text-sm ${dark ? "text-white/60" : "text-ink-muted"}`}>Ten core service lines.</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}
