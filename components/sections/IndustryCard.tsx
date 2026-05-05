import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import {
  BreweryIcon,
  ManufacturingIcon,
  LogisticsIcon,
  DistributionIcon,
} from "@/components/icons";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  BreweryIcon,
  ManufacturingIcon,
  LogisticsIcon,
  DistributionIcon,
};

interface IndustryCardProps {
  name: string;
  shortDescription: string;
  href: string;
  iconName: string;
}

export function IndustryCard({
  name,
  shortDescription,
  href,
  iconName,
}: IndustryCardProps) {
  const Icon = iconMap[iconName];

  return (
    <Link
      href={href}
      className="group block bg-white border border-graphite-300/40 rounded p-6 hover:border-primary-500/40 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-900/5 rounded text-primary-700 group-hover:bg-primary-700 group-hover:text-white transition-colors">
          {Icon && <Icon size={28} />}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-medium text-lg text-graphite-900 group-hover:text-primary-700 transition-colors">
            {name}
          </h3>
          <p className="mt-1 text-sm text-graphite-500 leading-relaxed">
            {shortDescription}
          </p>
          <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-primary-500 group-hover:text-primary-700 transition-colors">
            Explore
            <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
