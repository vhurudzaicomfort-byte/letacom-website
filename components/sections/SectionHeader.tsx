interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`font-heading text-xs font-medium uppercase tracking-widest mb-3 ${
            light ? "text-accent-300" : "text-accent-500"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading font-bold text-3xl md:text-4xl leading-tight ${
          light ? "text-white" : "text-graphite-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-primary-300" : "text-graphite-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
