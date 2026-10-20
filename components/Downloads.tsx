import { Download, FileText } from "lucide-react";
import { downloads } from "@/lib/site";

export function Downloads() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {downloads.map((d) => (
        <a
          key={d.href}
          href={d.href}
          download
          className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-navy-900/5"
        >
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
            <FileText size={22} aria-hidden />
          </span>
          <span className="flex-1">
            <span className="block font-bold text-ink">{d.label}</span>
            <span className="block text-sm text-ink-muted">{d.description}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
            <Download size={16} aria-hidden /> {d.file}
          </span>
        </a>
      ))}
    </div>
  );
}
