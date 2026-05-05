import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

interface SolutionCardProps {
  title: string;
  description: string;
  features: string[];
  href: string;
}

export function SolutionCard({
  title,
  description,
  features,
  href,
}: SolutionCardProps) {
  return (
    <div className="bg-white border border-graphite-300/40 rounded p-6 hover:shadow-md transition-shadow">
      <h3 className="font-heading font-medium text-lg text-graphite-900">{title}</h3>
      <p className="mt-2 text-sm text-graphite-500 leading-relaxed">{description}</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-graphite-700">
            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-1.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="inline-flex items-center gap-1 mt-5 text-sm font-medium text-primary-500 hover:text-primary-700 transition-colors"
      >
        Request Solution Brief
        <ArrowRightIcon size={14} />
      </Link>
    </div>
  );
}
