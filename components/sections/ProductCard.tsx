import Link from "next/link";

interface ProductCardProps {
  name: string;
  shortDescription: string;
  categorySlug: string;
}

export function ProductCard({
  name,
  shortDescription,
  categorySlug,
}: ProductCardProps) {
  return (
    <div className="group bg-white border border-graphite-300/40 rounded overflow-hidden hover:shadow-md transition-shadow">
      {/* Placeholder image area */}
      <div className="aspect-[4/3] bg-graphite-100 flex items-center justify-center">
        <span className="text-xs text-graphite-500 font-medium">[Product Image]</span>
      </div>
      <div className="p-4">
        <h4 className="font-heading font-medium text-sm text-graphite-900 group-hover:text-primary-700 transition-colors">
          {name}
        </h4>
        <p className="mt-1 text-xs text-graphite-500 leading-relaxed">
          {shortDescription}
        </p>
        <Link
          href={`/request-quote?category=${categorySlug}`}
          className="inline-block mt-3 text-xs font-medium text-primary-500 hover:text-primary-700 transition-colors"
        >
          Request Quote
        </Link>
      </div>
    </div>
  );
}
