import type { Metadata } from "next";
import Image from "next/image";
import { Award, BarChart3, BookOpen, ClipboardCheck, Users, Video } from "lucide-react";
import { Button, CTABand, CheckList, PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Learning Management Systems & E-Learning Platforms South Africa",
  description: "LMS and e-learning platform development in South Africa: online course platforms, corporate training portals, assessments and certificates by Letacom (Pty) Ltd.",
  alternates: { canonical: "/learning-platforms" },
};

const features = [
  { icon: BookOpen, title: "Course management", text: "Structure courses into modules and lessons with text, documents and media." },
  { icon: Video, title: "Multimedia lessons", text: "Video, downloadable resources and interactive content." },
  { icon: ClipboardCheck, title: "Assessments", text: "Quizzes and assignments with automatic or facilitator marking." },
  { icon: BarChart3, title: "Progress tracking", text: "Learner progress, completion and results reporting for administrators." },
  { icon: Award, title: "Certificates", text: "Automatically issued certificates of completion." },
  { icon: Users, title: "User management", text: "Learner, facilitator and administrator roles with secure sign-in." },
];

export default function LearningPage() {
  return (
    <>
      <PageHero crumbs={[{ href: "/learning-platforms", label: "Learning Platforms" }]}
        eyebrow="Learning platforms"
        title="Online learning platforms that are simple to run"
        intro="We implement and customise learning management systems (LMS) for training providers, schools, NGOs and corporate teams, so you can deliver, track and certify learning online."
        image="/media/online-learning.jpg"
      >
        <Button href="/contact?service=Learning%20Management%20Systems">Request a Quote</Button>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Platform features" title="Everything needed to deliver learning online" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-line p-6">
              <Icon size={24} className="text-brand" aria-hidden />
              <h3 className="mt-4 font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/media/online-learning.jpg" alt="Learner taking an online course" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Who it is for" title="Built for educators and trainers" />
            <CheckList
              className="mb-8"
              items={[
                "Training providers and skills development organisations",
                "Schools, tutors and education programmes",
                "Corporate onboarding and compliance training",
                "Non-profit and community learning initiatives",
              ]}
            />
            <h3 className="mb-3 font-bold text-ink">What you receive</h3>
            <CheckList items={["Configured LMS on secure hosting", "Branding and custom domain", "Course structure set-up", "Administrator training", "Ongoing support options"]} />
          </div>
        </div>
      </Section>
      <CTABand title="Planning an online learning programme?" />
    </>
  );
}
