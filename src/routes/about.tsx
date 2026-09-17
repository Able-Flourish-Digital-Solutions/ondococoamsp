import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  Handshake,
  Sprout,
  Leaf,
  HeartHandshake,
  FlaskConical,
  Users2,
  Store,
  Landmark,
  Smartphone,
  CloudSun,
} from "lucide-react";
import steeringImg from "@/assets/msp-steering-executives.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the MSP — Ondo State Cocoa Platform" },
      {
        name: "description",
        content:
          "Learn about the vision, mission and objectives of the Ondo State Sustainable Cocoa Multi-Stakeholder Platform.",
      },
      { property: "og:title", content: "About the Ondo State Sustainable Cocoa MSP" },
      {
        property: "og:description",
        content: "Vision, mission and ten strategic objectives guiding the platform.",
      },
    ],
  }),
  component: About,
});

const stakeholderList = [
  "Government agencies",
  "Private sector companies",
  "Farmer organizations",
  "NGOs",
  "International organizations",
  "Research institutions",
  "Universities",
  "Civil society organizations",
  "Financial institutions",
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
            A Multi-Stakeholder Platform (MSP) is a collaborative framework that brings together
            diverse groups of stakeholders to address common challenges, share knowledge, and
            co-create solutions. The Ondo State Sustainable Cocoa Multi-Stakeholder Platform — OSCP
            for short — applies this model to the cocoa sector.
          </p>
          <p>
            Cocoa production in Ondo State involves many actors working largely on their own:
            government agencies, farmers, cooperatives, processors, exporters, researchers,
            financiers and civil society groups each hold a piece of the solution to productivity,
            quality and sustainability challenges, but no single institution can address them alone.
            OSCP exists to close that gap — bringing every actor to one table so efforts are
            coordinated rather than duplicated or siloed.
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
            The goal of the platform is to leverage the strengths and expertise of every stakeholder
            to drive progress in areas such as value chain development, policy advocacy,
            climate-smart agriculture, digital inclusion, research and innovation, farmer
            livelihoods, and sustainable cocoa production. OSCP serves as a coordination platform
            that promotes dialogue, joint decision-making, knowledge sharing and partnerships aimed
            at improving cocoa standards, productivity, market access and sustainability.
          </p>
          <p>
            In practice, collaboration happens through regular stakeholder dialogues, working groups
            organised around the platform's priority areas, joint training and field activities, and
            shared reporting — so that decisions affecting the sector are informed by the people
            closest to the work, from farm to market.
          </p>
        </div>
      </section>

      <section className="bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-10 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Our Vision
            </p>
            <h3 className="mt-3 text-2xl leading-snug text-foreground">
              To build a globally competitive, sustainable and inclusive cocoa sector that improves
              livelihoods and promotes economic growth in Ondo State.
            </h3>
          </div>
          <div className="rounded-3xl border border-border gradient-hero p-10 text-primary-foreground shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Our Mission
            </p>
            <h3 className="mt-3 text-2xl leading-snug text-white">
              To foster collaboration among stakeholders for innovation, policy dialogue,
              sustainable cocoa production, improved market systems and resilient farming
              communities.
            </h3>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ten strategic objectives"
          title="What we are working toward"
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {objectives.map(({ t, Icon }) => (
            <div
              key={t}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm font-medium text-foreground">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="leadership" className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Steering Committee"
            description="The newly elected Steering Committee executives of the Sustainable Cocoa Multi-Stakeholder Platform (MSP), Ondo State."
          />
          <figure className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <img
              src={steeringImg.url}
              alt="Newly elected Steering Committee executives of the Sustainable Cocoa MSP, Ondo State"
              loading="lazy"
              className="h-auto w-full object-cover"
            />
            <figcaption className="px-6 py-4 text-sm text-muted-foreground">
              Steering Committee executives, inaugurated on 23 July 2026 at Royal Bird Hotel and
              Towers, Akure.
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
