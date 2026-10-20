import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { company } from "@/lib/site";

export type Crumb = { href: string; label: string };

export function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  const all = [{ href: "/", label: "Home" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: `${company.url}${c.href === "/" ? "" : c.href}` })),
  };
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${dark ? "text-white/60" : "text-ink-subtle"}`}>
        {all.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={14} aria-hidden />}
            {i === all.length - 1 ? (
              <span aria-current="page" className={dark ? "text-white/90" : "text-ink"}>{c.label}</span>
            ) : (
              <Link href={c.href} className={dark ? "hover:text-white" : "hover:text-brand"}>{c.label}</Link>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
