// Horizontal trust strip of placeholder OEM/partner wordmarks.
// FLAG FOR CLIENT: replace these with real partner logos before public launch.

const oems = [
  "BREWTECH",
  "FOSTECH",
  "KOMATSU PARTS",
  "SIEMENS COMPONENTS",
  "DOOSAN",
  "EUROTEC",
  "ASIA PRECISION",
  "AFRICA SUPPLY",
];

export function PartnersStrip() {
  return (
    <section className="bg-white border-y border-graphite-300/30 py-8 md:py-10">
      <div className="container-site">
        <p className="text-center font-heading text-[11px] md:text-xs font-medium uppercase tracking-[0.22em] text-ink-subtle mb-6">
          We source from verified OEMs across Asia &amp; Europe
        </p>
        <div className="flex items-center justify-center gap-x-8 gap-y-4 flex-wrap md:gap-x-12">
          {oems.map((name) => (
            <span
              key={name}
              className="partner-logo font-heading text-sm md:text-base font-bold tracking-[0.18em] text-graphite-700 select-none cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
