import { ExternalLink } from "lucide-react";
import { company } from "@/lib/site";

export function MapEmbed({ className = "" }: { className?: string }) {
  const q = encodeURIComponent(company.address.mapQuery);
  return (
    <div className={`overflow-hidden rounded-3xl border border-line ${className}`}>
      <iframe
        title={`Map showing ${company.name}, ${company.address.oneLine}`}
        src={`https://www.google.com/maps?q=${q}&z=15&output=embed`}
        className="block h-80 w-full sm:h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${q}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-3 border-t border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:text-brand"
      >
        <span>{company.address.oneLine}</span>
        <ExternalLink size={16} className="shrink-0" aria-hidden />
      </a>
    </div>
  );
}
