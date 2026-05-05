import { Metadata } from "next";
import { images } from "@/lib/images";
import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { SolutionCard } from "@/components/sections/SolutionCard";
import { solutions } from "@/lib/data/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Letacom delivers end-to-end industrial supply solutions — from sourcing and procurement through equipment delivery, systems integration, and ongoing after-sales support.",
};

export default function SolutionsPage() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Capabilities"
        title="Industrial Solutions, End to End"
        backgroundImage={images.heroSolutions}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <p className="text-lg text-graphite-700 leading-relaxed">
            Letacom takes a holistic approach to industrial supply. Rather than
            offering isolated products, we deliver complete solutions — managing
            every stage from initial supplier identification through delivery,
            commissioning, and ongoing support. Each engagement is tailored to
            your operational requirements, budget, and timeline, ensuring you
            receive measurable value at every step.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-graphite-50">
        <div className="container-site">
          <SectionHeader
            eyebrow="Our Solutions"
            title="What We Deliver"
            subtitle="Comprehensive supply solutions designed for the demands of industrial operations across Africa."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.slug}
                title={solution.title}
                description={solution.description}
                features={solution.features}
                href={`/request-quote?solution=${solution.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to streamline your supply chain?"
        subtitle="Tell us what you need and our team will prepare a tailored solution brief within 48 hours."
        ctaLabel="Request a Quote"
        ctaHref="/request-quote"
      />
    </>
  );
}
