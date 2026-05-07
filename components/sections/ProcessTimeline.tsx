interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  { step: "01", title: "Inquire", description: "Submit your requirement via our RFQ form, email, or WhatsApp." },
  { step: "02", title: "Source / Design", description: "We source globally and design locally — to your specification." },
  { step: "03", title: "Test / Assemble", description: "In-country quality verification and assembly before deployment." },
  { step: "04", title: "Deliver", description: "Coordinated logistics and shipping to your facility across Africa." },
  { step: "05", title: "Train", description: "On-site operator training and skills transfer with every solution." },
  { step: "06", title: "Support", description: "Long-term aftercare, spares, and maintenance partnership." },
];

export function ProcessTimeline() {
  return (
    <div className="relative reveal">
      {/* Desktop connector line — sits behind the cards, animates draw-in via .reveal.is-visible */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-9 left-[8.333%] right-[8.333%] h-px bg-graphite-300/60 origin-left scale-x-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] [.is-visible_&]:scale-x-100"
      />

      <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 lg:gap-x-6">
        {steps.map((item, idx) => (
          <div key={item.step} className="relative">
            {/* Orange dot anchor (desktop only, sits on the connector line) */}
            <span
              aria-hidden
              className="hidden lg:block absolute top-9 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-500 ring-4 ring-graphite-100 transition-transform duration-500 [.is-visible_&]:scale-100 scale-0"
              style={{ transitionDelay: `${800 + idx * 80}ms` }}
            />
            <span className="font-heading text-4xl lg:text-5xl font-bold text-graphite-300/70 tabular-nums">
              {item.step}
            </span>
            <h3 className="font-heading font-medium text-base text-graphite-900 mt-2">
              {item.title}
            </h3>
            <p className="mt-2 text-xs text-graphite-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
