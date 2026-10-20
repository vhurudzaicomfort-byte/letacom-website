import Image from "next/image";
import Link from "next/link";
import { AppWindow, ArrowRight, Braces, Calculator, CreditCard, FileSpreadsheet, Globe, GraduationCap, PenTool, TerminalSquare, Workflow, Wrench, type LucideProps } from "lucide-react";
import { kindLabel, statusLabel, type Listing, type ListingStatus } from "@/lib/catalogue";
import { Button } from "./ui";

const icons = { AppWindow, Braces, Calculator, FileSpreadsheet, Globe, GraduationCap, PenTool, TerminalSquare, Workflow, Wrench };

export function CategoryIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = icons[name as keyof typeof icons] ?? AppWindow;
  return <Icon aria-hidden {...props} />;
}

export function StatusBadge({ status }: { status: ListingStatus }) {
  const styles = {
    "available-quote": "bg-emerald-50 text-emerald-700 ring-emerald-200",
    "custom-pricing": "bg-brand-soft text-brand-deep ring-brand/20",
    "coming-soon": "bg-amber-50 text-amber-800 ring-amber-200",
  }[status];
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${styles}`}>{statusLabel[status]}</span>;
}

export function quoteHref(l: Listing) {
  return `/contact?product=${l.slug}`;
}

export function ListingCard({ listing: l }: { listing: Listing }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-navy-900/[0.07]">
      <div className="relative aspect-[16/9] overflow-hidden bg-surface">
        <Image src={l.image} alt="" fill sizes="(min-width:1280px) 30vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute left-3 top-3"><StatusBadge status={l.status} /></div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">{kindLabel[l.kind]}{l.planned ? " · Planned" : ""}</p>
        <h3 className="mt-1.5 text-lg font-bold text-ink">
          <Link href={`/marketplace/${l.slug}`} className="after:absolute after:inset-0">{l.name}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{l.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
          View details <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </article>
  );
}

export function PaymentsNotice({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-col gap-4 rounded-2xl border border-line bg-surface sm:flex-row sm:items-center ${compact ? "p-4" : "p-6"}`}>
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand ring-1 ring-line">
        <CreditCard size={20} aria-hidden />
      </span>
      <div className="flex-1">
        <p className="font-bold text-ink">Online Payments Coming Soon</p>
        <p className="mt-0.5 text-sm text-ink-muted">
          We&apos;re preparing a secure online checkout experience. In the meantime, explore our digital products and services and contact our team for a personalised quotation.
        </p>
      </div>
      <Button href="/contact" className="shrink-0">Enquire Now — Request a Quote</Button>
    </div>
  );
}

export function CatalogueNote() {
  return (
    <p className="text-xs leading-relaxed text-ink-subtle">
      All listings are products and services of Letacom (Pty) Ltd, sold and supported by Letacom only. The marketplace does not host third-party sellers. Listings marked &quot;Planned&quot; are in development and not yet available.
    </p>
  );
}
