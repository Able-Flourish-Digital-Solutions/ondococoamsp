import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BenefitCard } from "@/components/site/BenefitCard";
import { Button } from "@/components/ui/button";
import {
  Network, BookOpen, Landmark, GraduationCap, Coins, FlaskConical,
  Cpu, Store, Megaphone, Lightbulb,
} from "lucide-react";

export const Route = createFileRoute("/why-join")({
  head: () => ({
    meta: [
      { title: "Why Join — Ondo State Cocoa MSP" },
      { name: "description", content: "Networking, capacity building, funding, market access and more — the benefits of joining the Ondo Cocoa MSP." },
      { property: "og:title", content: "Why Join the Ondo Cocoa MSP" },
      { property: "og:description", content: "Ten reasons stakeholders across the value chain choose to join the platform." },
    ],
  }),
  component: WhyJoin,
});

const benefits = [
  { title: "Networking opportunities", description: "Connect with peers across government, private sector, research and civil society.", Icon: Network },
  { title: "Knowledge sharing", description: "Learn from case studies, farmer field days and cross-sector working groups.", Icon: BookOpen },
  { title: "Policy engagement", description: "Shape the policies and regulations that affect the cocoa sector.", Icon: Landmark },
  { title: "Capacity building", description: "Access trainings on production, business, sustainability and leadership.", Icon: GraduationCap },
  { title: "Funding opportunities", description: "Learn about grants, blended finance and development partner programs.", Icon: Coins },
  { title: "Research collaboration", description: "Partner with universities and institutes on applied research.", Icon: FlaskConical },
  { title: "Technology transfer", description: "Adopt tested tools and innovations for farm, cooperative and processing use.", Icon: Cpu },
  { title: "Market access", description: "Discover buyers, processors and cooperative aggregation opportunities.", Icon: Store },
  { title: "Joint advocacy", description: "Speak with a coordinated voice on issues that affect the whole sector.", Icon: Megaphone },
  { title: "Innovation ecosystem", description: "Be part of a community piloting new models for a resilient cocoa economy.", Icon: Lightbulb },
];

function WhyJoin() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why join"
          title="Ten reasons to be part of the platform"
          description="Membership is open to organisations and groups working across Ondo State's cocoa value chain."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {benefits.map((b) => (
            <BenefitCard key={b.title} {...b} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Join the Platform</Link>
          </Button>
        </div>
      </section>
    </>
  );
}