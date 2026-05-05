import {
  CrownIcon,
  AfricaContinentIcon,
  ScrollIcon,
  DhowIcon,
  MigrationIcon,
  CaravanIcon,
  TradeRouteIcon,
} from "@/components/icons";

type HeritageAnchor = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  era: string;
  name: string;
  body: string;
  parallel: string;
};

const anchors: HeritageAnchor[] = [
  {
    icon: CrownIcon,
    era: "14th century",
    name: "Mansa Musa of Mali",
    body: "One of the wealthiest rulers in history. His empire's caravans moved gold, salt, books, and ideas across Africa, the Middle East, and Europe — making the Cape-to-Cairo corridor a global axis of commerce centuries before any colonial map was drawn.",
    parallel: "Today: AfCFTA — a connected continent, trading on its own terms.",
  },
  {
    icon: AfricaContinentIcon,
    era: "11th–15th century",
    name: "Great Zimbabwe",
    body: "A stone-built African city of master engineers and traders. Its merchants exchanged gold, copper, and ivory with the Swahili coast, Arabia, India, and China — proof that African industry and African global trade are not new ideas.",
    parallel: "Today: in-country design, manufacture, and assembly.",
  },
  {
    icon: ScrollIcon,
    era: "12th century onward",
    name: "Timbuktu",
    body: "A West African centre of scholarship, manuscripts, and trade. The libraries of Timbuktu remind us that African knowledge industries have existed for over a thousand years.",
    parallel: "Today: skills transfer, training, technical documentation.",
  },
  {
    icon: DhowIcon,
    era: "9th–16th century",
    name: "The Swahili Coast",
    body: "Coastal city-states — Kilwa, Mombasa, Zanzibar — where African, Arab, Persian, Indian, and Chinese traders met, intermarried, and built a shared culture. The Swahili language itself is a living monument to African openness and exchange.",
    parallel: "Today: global sourcing, local relationships.",
  },
  {
    icon: CrownIcon,
    era: "17th century, Angola",
    name: "Queen Nzinga of Ndongo & Matamba",
    body: "Diplomat, strategist, and military leader who negotiated with European powers on her own terms. A model for what it means to engage globally without losing African agency.",
    parallel: "Today: partnership, not dependency.",
  },
  {
    icon: CrownIcon,
    era: "Early 19th century",
    name: "Shaka kaSenzangakhona",
    body: "Whose reorganisation of the Zulu kingdom showed the power of African systems thinking, discipline, and scale. African industrial ambition has deep roots in African organisational genius.",
    parallel: "Today: systems integration, end-to-end delivery.",
  },
  {
    icon: MigrationIcon,
    era: "Over 3,000 years",
    name: "The Bantu Migrations",
    body: "One of history's great human movements, spreading languages, ironworking, agriculture, and trade across Sub-Saharan Africa. Letacom's vision of a connected continent is rooted in this oldest African pattern.",
    parallel: "Today: a connected continent, building together.",
  },
  {
    icon: CaravanIcon,
    era: "c. 10th century BCE",
    name: "The Queen of Sheba & King Solomon",
    body: "One of the most famously documented trade meetings in recorded history. Ethiopian tradition holds that the Queen of Sheba (Makeda) was African; her exchange with Solomon — gold, spices, wisdom — is among the earliest stories of African–global commerce.",
    parallel: "Today: African–global procurement, ancient and noble.",
  },
];

export function HeritageTimeline() {
  return (
    <section className="section-padding bg-graphite-100">
      <div className="container-site">
        <div className="flex items-center gap-3 mb-3">
          <TradeRouteIcon size={20} className="text-accent-500" />
          <p className="font-heading text-xs font-medium uppercase tracking-widest text-accent-500">
            Heritage of Trade
          </p>
        </div>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-graphite-900 leading-tight max-w-3xl">
          Africa has traded with the world for thousands of years
        </h2>
        <p className="mt-4 text-lg text-graphite-500 max-w-3xl leading-relaxed">
          Letacom is the latest chapter in a much longer African story. These
          are the historical anchors that frame our work.
        </p>
      </div>

      <div
        className="mt-10 overflow-x-auto pb-4 [scrollbar-width:thin]"
        role="region"
        aria-label="African heritage of trade — scrollable timeline"
        tabIndex={0}
      >
        <ol className="flex gap-5 px-4 md:px-6 lg:px-8 max-w-[1280px] mx-auto">
          {anchors.map((a) => {
            const Icon = a.icon;
            return (
              <li
                key={a.name}
                className="flex-shrink-0 w-[300px] md:w-[340px] bg-white border border-graphite-300/40 rounded p-6"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded bg-primary-900/5 text-primary-700 mb-4">
                  <Icon size={24} />
                </div>
                <p className="font-heading text-xs font-medium uppercase tracking-widest text-accent-500 mb-1">
                  {a.era}
                </p>
                <h3 className="font-heading font-bold text-lg text-graphite-900 leading-snug">
                  {a.name}
                </h3>
                <p className="mt-3 text-sm text-graphite-700 leading-relaxed">
                  {a.body}
                </p>
                <p className="mt-3 pt-3 border-t border-graphite-300/40 text-xs font-medium text-primary-700">
                  {a.parallel}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
