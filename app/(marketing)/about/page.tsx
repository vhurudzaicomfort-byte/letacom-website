import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { HeritageTimeline } from "@/components/sections/HeritageTimeline";
import {
  SourcingIcon,
  DesignIcon,
  TestingIcon,
  CustomisationIcon,
  PartnershipIcon,
  SupportIcon,
  ArrowRightIcon,
  AfricaContinentIcon,
  TradeRouteIcon,
  CheckIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About Letacom",
  description:
    "Built in 2024 in Pretoria. Letacom is a young Black African team carrying forward the older African pattern of trade, exchange, and partnership — sourcing globally, designing and building locally, and supporting every solution end-to-end.",
};

const capabilities = [
  { icon: SourcingIcon, title: "Global Sourcing", description: "Strategic procurement from manufacturers across Asia, Europe, and beyond." },
  { icon: DesignIcon, title: "Local Design & Manufacturing", description: "In-country design and fabrication tailored to African operating conditions." },
  { icon: TestingIcon, title: "Local Testing & Assembly", description: "Equipment tested and assembled locally before deployment." },
  { icon: CustomisationIcon, title: "Customisation", description: "Solutions engineered to client specification, end-to-end." },
  { icon: PartnershipIcon, title: "Local & Global Partnerships", description: "Trusted partnerships with local fabricators and international OEMs." },
  { icon: SupportIcon, title: "Support, Consulting & Training", description: "Installation, operator training, spares, and long-term maintenance." },
];

const promise = [
  "Bring the world's best technology home — sourced globally, deployed for African industry.",
  "Build local capability — design, manufacture, test, and assemble in South Africa, with local jobs and local skills.",
  "Customise for African conditions — equipment that works in our climate, our infrastructure, our operating realities.",
  "Train and transfer skills — every solution comes with operator training and long-term technical support.",
  "Empower the next generation — youth employment, internships, and skills development built into how Letacom grows.",
  "Give back to community — a portion of every contract supports local skills development, school partnerships, and youth tech programs in the regions we serve.",
  "Unite the continent through trade — Cape to Cairo, in the spirit of those who walked it long before us.",
];

export default function AboutPage() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="About Letacom"
        title="Built in Africa. For Africa. With the world."
        subtitle="Founded in 2024 in Pretoria, by a team committed to building Africa's industrial future on Africa's terms."
        backgroundImage={images.heroAbout}
      />

      {/* The Founding */}
      <section className="section-padding">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-heading text-xs font-medium uppercase tracking-widest text-accent-500 mb-3">
              The Founding
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-graphite-900 leading-tight">
              Pretoria, 2024. A young African team. A single conviction.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5">
            <p className="text-lg text-graphite-700 leading-relaxed">
              Letacom was founded in 2024 in Pretoria, South Africa, by a team
              of young Black African professionals with a single conviction:
              that Africa&apos;s industrial future must be built by Africans,
              with the world&apos;s best technology brought home and made to
              work for African industry.
            </p>
            <p className="text-graphite-700 leading-relaxed">
              The founders saw a gap. Across the continent, industrial
              operators — breweries, manufacturers, logistics fleets,
              distribution networks — were buying world-class equipment from
              abroad but receiving second-class support, no customisation, and
              no skills transfer. Letacom was built to close that gap: to
              source globally, design and build locally, customise to spec, and
              stay alongside clients with consulting, training, and long-term
              support.
            </p>
            <p className="text-graphite-700 leading-relaxed">
              But the deeper conviction is older than 2024.
            </p>
          </div>
        </div>
      </section>

      {/* Cape-to-Cairo Vision — Reclaimed */}
      <section className="relative bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={images.heroIndustries}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-primary-900/80" />
        <div className="relative container-site section-padding">
          <div className="flex items-center gap-3 mb-6">
            <TradeRouteIcon size={22} className="text-accent-300" />
            <p className="font-heading text-xs font-medium uppercase tracking-widest text-accent-300">
              The Cape-to-Cairo Vision — Reclaimed
            </p>
          </div>
          <div className="max-w-4xl">
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl leading-snug">
              &ldquo;The Cape-to-Cairo trade corridor existed for centuries
              before any colonial map was drawn. We are simply continuing what
              our ancestors started — Africa trading with Africa, and with the
              world, on Africa&apos;s terms.&rdquo;
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              <p className="text-primary-300 leading-relaxed">
                Long before colonial maps drew lines across Africa, the
                Cape-to-Cairo corridor was already alive — as a trade route, a
                migration path, and a thread of cultural exchange running the
                length of the continent.
              </p>
              <p className="text-primary-300 leading-relaxed">
                The African Continental Free Trade Area (AfCFTA), launched in
                2021, is the modern continuation of a Pan-African idea our
                ancestors lived for centuries. Letacom positions itself inside
                that lineage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Timeline */}
      <HeritageTimeline />

      {/* Threads of Connection */}
      <section className="section-padding">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <AfricaContinentIcon size={22} className="text-accent-500" />
              <p className="font-heading text-xs font-medium uppercase tracking-widest text-accent-500">
                Threads of Connection
              </p>
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-graphite-900 leading-tight">
              Africa was never a continent of isolated tribes.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5">
            <p className="text-lg text-graphite-700 leading-relaxed">
              Our ancestors moved, traded, intermarried, and met in great
              markets and gatherings. The Bantu peoples carried iron, language,
              and farming across the continent. Coastal cities welcomed traders
              from every horizon. Inland kingdoms exchanged goods, marriages,
              and ideas across thousands of kilometres.
            </p>
            <p className="text-graphite-700 leading-relaxed">
              Letacom is built in that older spirit — the African pattern of
              openness, exchange, and partnership. Pan-African, not
              nationalist. Inclusive of every African heritage. Confident
              enough in who we are to engage globally without losing African
              agency.
            </p>
          </div>
        </div>
      </section>

      {/* The Letacom Promise */}
      <section className="section-padding bg-graphite-100">
        <div className="container-site">
          <SectionHeader
            eyebrow="The Letacom Promise"
            title="A Seven-Point Pledge"
            subtitle="What we hold ourselves to — to clients, to communities, and to the next generation of African industry."
            centered
          />
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto">
            {promise.map((p, i) => (
              <li
                key={i}
                className="flex gap-4 bg-white border border-graphite-300/40 rounded p-5"
              >
                <span className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded bg-accent-500 text-white font-heading font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm md:text-base text-graphite-700 leading-relaxed">
                  {p}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Six Capability Pillars */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            eyebrow="How We Deliver"
            title="Six Capabilities, One Partner"
            subtitle="Every Letacom engagement runs on six interlocking capabilities — from first inquiry through ongoing support."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded p-6 border border-graphite-300/40"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-primary-900/5 rounded text-primary-700 mb-4">
                  <c.icon size={24} />
                </div>
                <h3 className="font-heading font-medium text-lg text-graphite-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-graphite-500 leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team — Collective Framing */}
      <section className="section-padding bg-graphite-100">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 relative aspect-[4/3] rounded overflow-hidden">
            <Image
              src={images.aboutTeam}
              alt="A wide industrial workshop interior — hands at work, no faces emphasised"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="font-heading text-xs font-medium uppercase tracking-widest text-accent-500 mb-3">
              The Team Behind Letacom
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-graphite-900 leading-tight">
              We are a team first.
            </h2>
            <p className="mt-5 text-graphite-700 leading-relaxed">
              Letacom is built by a team of young Black African professionals —
              engineers, sourcing specialists, technicians, and trainers — who
              share a single conviction: Africa&apos;s industrial future must
              be built by Africans, with the world&apos;s best technology
              brought home and made to work for African industry.
            </p>
            <p className="mt-4 text-graphite-700 leading-relaxed">
              The work speaks for the people behind it.
            </p>
          </div>
        </div>
      </section>

      {/* Address & Contact CTA */}
      <section className="section-padding">
        <div className="container-site grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          <div>
            <p className="font-heading text-xs font-medium uppercase tracking-widest text-accent-500 mb-3">
              Find Us
            </p>
            <h3 className="font-heading font-bold text-2xl text-graphite-900">
              Letacom South Africa
            </h3>
            <ul className="mt-5 space-y-2.5 text-graphite-700">
              <li className="flex items-start gap-2">
                <CheckIcon size={16} className="text-accent-500 mt-1 flex-shrink-0" />
                <span>47 Meadow Avenue, Equestria 0184, Pretoria, South Africa</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon size={16} className="text-accent-500 mt-1 flex-shrink-0" />
                <a href="tel:+27630769938" className="hover:text-primary-700 transition-colors">
                  +27 63 076 9938 — Calls / WhatsApp / SMS
                </a>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon size={16} className="text-accent-500 mt-1 flex-shrink-0" />
                <a href="mailto:hello@letacom.co.za" className="hover:text-primary-700 transition-colors">
                  hello@letacom.co.za
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 text-white font-heading font-medium rounded hover:bg-accent-600 transition-colors"
            >
              Talk to Our Team
              <ArrowRightIcon size={18} />
            </Link>
            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-graphite-300 text-graphite-900 font-heading font-medium rounded hover:border-primary-500 hover:text-primary-700 transition-colors"
            >
              Submit a Requirement
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Partner with us. Let's build Africa's industrial future together."
        subtitle="Sourced globally. Designed, built, and supported locally. Cape to Cairo, in the African spirit of trade."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
