import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import {
  AfricaIcon,
  GlobeIcon,
  ShieldIcon,
  ClockIcon,
  HandshakeIcon,
  SupportIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About Letacom",
  description:
    "Letacom is your trusted industrial supply partner, bridging global manufacturing with African enterprise through reliable procurement, quality assurance, and end-to-end logistics.",
};

const differentiators = [
  {
    icon: AfricaIcon,
    title: "Africa-First Focus",
    description:
      "Every solution is designed for the realities of operating on the African continent, from infrastructure to logistics.",
  },
  {
    icon: GlobeIcon,
    title: "Global Supplier Network",
    description:
      "Established relationships with verified manufacturers across China, Europe, and Asia ensure competitive pricing and quality.",
  },
  {
    icon: ShieldIcon,
    title: "Quality Assurance",
    description:
      "Rigorous pre-shipment inspections and factory audits protect your investment and eliminate supply-chain surprises.",
  },
  {
    icon: ClockIcon,
    title: "Reliable Lead Times",
    description:
      "Proactive logistics management and real-time tracking keep your projects on schedule, every time.",
  },
  {
    icon: HandshakeIcon,
    title: "Partnership Approach",
    description:
      "We operate as an extension of your procurement team, aligned to your goals and accountable for results.",
  },
  {
    icon: SupportIcon,
    title: "Ongoing Support",
    description:
      "From initial consultation through after-sales service, our team remains available to resolve issues quickly.",
  },
];

const team = [
  {
    name: "[TEAM_NAME_PLACEHOLDER]",
    role: "[TEAM_ROLE_PLACEHOLDER]",
    bio: "[TEAM_BIO_PLACEHOLDER]",
  },
  {
    name: "[TEAM_NAME_PLACEHOLDER]",
    role: "[TEAM_ROLE_PLACEHOLDER]",
    bio: "[TEAM_BIO_PLACEHOLDER]",
  },
  {
    name: "[TEAM_NAME_PLACEHOLDER]",
    role: "[TEAM_ROLE_PLACEHOLDER]",
    bio: "[TEAM_BIO_PLACEHOLDER]",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="About Us"
        title="Your Industrial Procurement Partner in Africa"
      />

      {/* Founding Narrative */}
      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <p className="text-lg text-graphite-700 leading-relaxed">
            Letacom was founded to bridge the gap between Chinese manufacturing
            excellence and the growing industrial demand across the African
            continent. We recognised that businesses operating in Africa
            needed more than a supplier — they needed a procurement partner
            who understood both sides of the supply chain.
          </p>
          <p className="mt-5 text-lg text-graphite-700 leading-relaxed">
            Today, Letacom serves as that critical link, combining deep
            knowledge of global manufacturing with on-the-ground expertise in
            African logistics, compliance, and business culture. Our team
            manages every step from sourcing to delivery, ensuring our clients
            receive the right products, at the right price, exactly when they
            need them.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-graphite-50">
        <div className="container-site">
          <SectionHeader
            eyebrow="Our Purpose"
            title="Mission & Vision"
            centered
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-graphite-300/40 rounded p-8">
              <h3 className="font-heading font-bold text-xl text-graphite-900">
                Our Mission
              </h3>
              <p className="mt-3 text-graphite-600 leading-relaxed">
                To simplify industrial procurement for African businesses by
                delivering reliable, quality-assured supply solutions backed by
                transparent communication and measurable results.
              </p>
            </div>
            <div className="bg-white border border-graphite-300/40 rounded p-8">
              <h3 className="font-heading font-bold text-xl text-graphite-900">
                Our Vision
              </h3>
              <p className="mt-3 text-graphite-600 leading-relaxed">
                To become the most trusted procurement partner for industrial
                enterprises across Africa, enabling growth by removing supply
                chain complexity and risk from our clients&apos; operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Letacom */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            eyebrow="Why Letacom"
            title="What Sets Us Apart"
            subtitle="Six reasons industrial businesses across Africa trust Letacom as their procurement partner."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded bg-primary-50 text-primary-600 mb-4">
                  <item.icon size={28} />
                </div>
                <h3 className="font-heading font-medium text-lg text-graphite-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-graphite-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address */}
      <section className="section-padding bg-graphite-50">
        <div className="container-site text-center">
          <p className="text-graphite-600">
            <span className="font-heading font-medium text-graphite-900">
              Head Office:
            </span>{" "}
            47 Meadow Avenue
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeader
            eyebrow="Our Team"
            title="The People Behind Letacom"
            subtitle="A dedicated team with decades of combined experience in procurement, logistics, and industrial supply."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-40 h-40 bg-graphite-100 rounded mx-auto mb-5" />
                <h3 className="font-heading font-medium text-lg text-graphite-900">
                  {member.name}
                </h3>
                <p className="text-sm text-accent-500 font-medium mt-1">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-graphite-500 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Partner with us"
        subtitle="Let Letacom handle the complexity of industrial procurement so you can focus on running your business."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
