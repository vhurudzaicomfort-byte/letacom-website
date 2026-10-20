"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import type { Category, Listing, ListingStatus } from "@/lib/catalogue";
import { statusLabel } from "@/lib/catalogue";
import { ListingCard } from "./marketplace";

export function MarketplaceBrowser({ listings, categories, initialCategory = "all" }: { listings: Listing[]; categories: Category[]; initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [status, setStatus] = useState<ListingStatus | "all">("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return listings.filter(
      (l) =>
        (category === "all" || l.category === category) &&
        (status === "all" || l.status === status) &&
        (!q || [l.name, l.summary, l.description, ...l.features].join(" ").toLowerCase().includes(q)),
    );
  }, [listings, query, category, status]);

  const chip = (active: boolean) =>
    `whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-all ${active ? "bg-navy-900 text-white shadow-sm" : "bg-white text-ink-muted ring-1 ring-line hover:text-ink hover:ring-ink/25"}`;

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">Search the marketplace</span>
          <Search size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-subtle" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search software, APIs, tools, templates..."
            className="w-full rounded-xl border border-line bg-white py-3 pl-11 pr-10 text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-subtle hover:text-ink">
              <X size={16} />
            </button>
          )}
        </label>
        <label className="relative sm:w-64">
          <span className="sr-only">Filter by availability</span>
          <SlidersHorizontal size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-subtle" aria-hidden />
          <select value={status} onChange={(e) => setStatus(e.target.value as ListingStatus | "all")} className="w-full appearance-none rounded-xl border border-line bg-white py-3 pl-10 pr-4 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20">
            <option value="all">All availability</option>
            {(Object.keys(statusLabel) as ListingStatus[]).map((s) => (
              <option key={s} value={s}>{statusLabel[s]}</option>
            ))}
          </select>
        </label>
      </div>

      <div role="group" aria-label="Filter by category" className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        <button type="button" aria-pressed={category === "all"} onClick={() => setCategory("all")} className={chip(category === "all")}>All categories</button>
        {categories.map((c) => (
          <button key={c.slug} type="button" aria-pressed={category === c.slug} onClick={() => setCategory(c.slug)} className={chip(category === c.slug)}>
            {c.name}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-ink-muted" aria-live="polite">
        {results.length} {results.length === 1 ? "listing" : "listings"}
      </p>
      {results.length ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((l) => <ListingCard key={l.slug} listing={l} />)}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-line p-10 text-center text-ink-muted">
          No listings match your search. Try another term, or <a href="/contact" className="font-semibold text-brand">request a custom quote</a>.
        </div>
      )}
    </div>
  );
}
