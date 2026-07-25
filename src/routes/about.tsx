import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  Handshake, Sprout, Leaf, HeartHandshake, FlaskConical, Users2,
  Store, Landmark, Smartphone, CloudSun,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the MSP — Ondo State Cocoa Platform" },
      { name: "description", content: "Learn about the vision, mission and objectives of the Ondo State Sustainable Cocoa Multi-Stakeholder Platform." },
      { property: "og:title", content: "About the Ondo State Sustainable Cocoa MSP" },
      { property: "og:description", content: "Vision, mission and ten strategic objectives guiding the platform." },
    ],
  }),
  component: About,
});

const stakeholderList = [
  "Government agencies", "Private sector companies", "Farmer organizations",
  "NGOs", "International organizations", "Research institutions",
  "Universities", "Civil society organizations", "Financial institutions",
  "Youth and women groups",
];

const objectives = [
  { t: "Strengthen stakeholder collaboration", Icon: Handshake },
  { t: "Improve cocoa productivity", Icon: Sprout },
  { t: "Promote sustainable cocoa production", Icon: Leaf },
  { t: "Enhance farmer livelihoods", Icon: HeartHandshake },
  { t: "Facilitate research and innovation", Icon: FlaskConical },
  { t: "Support youth and women participation", Icon: Users2 },
  { t: "Improve market access", Icon: Store },
  { t: "Strengthen policy coordination", Icon: Landmark },
  { t: "Promote digital transformation", Icon: Smartphone },
  { t: "Encourage climate-smart agriculture", Icon: CloudSun },
];

function About() {
  return (
    <>
      <section className="border-b border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">About</p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">
            A collaborative framework for Ondo State's cocoa sector
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What is MSP?" title="A shared table for shared challenges" />
        <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            A Multi-Stakeholder Platform (MSP) is a collaborative framework that
            brings together diverse groups of stakeholders to address common
            challenges, share knowledge, and co-create solutions.
          </p>
          <div>
            <p className="mb-3 font-medium text-foreground">Stakeholder categories include:</p>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {stakeholderList.map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <p>
            The goal of the platform is to leverage the strengths and expertise of
            every stakeholder to drive progress in areas such as value chain
            development, policy advocacy, climate-smart agriculture, digital
            inclusion, research and innovation, farmer livelihoods, and sustainable
            cocoa production. The Ondo State Sustainable Cocoa MSP serves as a coordination
            platform that promotes dialogue, joint decision-making, knowledge
            sharing and partnerships aimed at improving cocoa standards,
            productivity, market access and sustainability.
          </p>
        </div>
      </section>

      <section className="bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-10 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Vision</p>
            <h3 className="mt-3 text-2xl leading-snug text-foreground">
              To build a globally competitive, sustainable and inclusive cocoa
              sector that improves livelihoods and promotes economic growth in
              Ondo State.
            </h3>
          </div>
          <div className="rounded-3xl border border-border gradient-hero p-10 text-primary-foreground shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">Our Mission</p>
            <h3 className="mt-3 text-2xl leading-snug text-white">
              To foster collaboration among stakeholders for innovation, policy
              dialogue, sustainable cocoa production, improved market systems and
              resilient farming communities.
            </h3>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Ten strategic objectives" title="What we are working toward" align="center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {objectives.map(({ t, Icon }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm font-medium text-foreground">{t}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}