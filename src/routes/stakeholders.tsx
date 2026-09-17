import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StakeholderCard } from "@/components/site/StakeholderCard";
import {
  Landmark,
  Wheat,
  Users,
  PackageOpen,
  Factory,
  Ship,
  FlaskConical,
  GraduationCap,
  Banknote,
  Globe2,
  HeartHandshake,
  Megaphone,
  Rocket,
  Flower2,
} from "lucide-react";

export const Route = createFileRoute("/stakeholders")({
  head: () => ({
    meta: [
      { title: "Stakeholders — Ondo State Sustainable Cocoa MSP" },
      {
        name: "description",
        content:
          "The government, farmer, private sector, research and civil society groups that make up the Ondo State Sustainable Cocoa MSP.",
      },
      { property: "og:title", content: "MSP Stakeholders" },
      {
        property: "og:description",
        content: "Meet the fourteen stakeholder groups shaping Ondo State's cocoa sector.",
      },
    ],
  }),
  component: Stakeholders,
});

const categories = [
  {
    title: "Government & Regulatory Institutions",
    groups: [{ label: "Government", Icon: Landmark }],
  },
  {
    title: "Farmers & Producer Organisations",
    groups: [
      { label: "Farmers", Icon: Wheat },
      { label: "Cooperatives", Icon: Users },
    ],
  },
  {
    title: "Merchants, Processors & Exporters",
    groups: [
      { label: "Input Suppliers", Icon: PackageOpen },
      { label: "Processors", Icon: Factory },
      { label: "Exporters", Icon: Ship },
    ],
  },
  {
    title: "Research & Academic Institutions",
    groups: [
      { label: "Researchers", Icon: FlaskConical },
      { label: "Universities", Icon: GraduationCap },
    ],
  },
  {
    title: "Development Partners & NGOs",
    groups: [
      { label: "Development Partners", Icon: Globe2 },
      { label: "NGOs", Icon: HeartHandshake },
    ],
  },
  {
    title: "Financial Institutions",
    groups: [{ label: "Financial Institutions", Icon: Banknote }],
  },
  {
    title: "Civil Society & Community Actors",
    groups: [
      { label: "Civil Society", Icon: Megaphone },
      { label: "Youth Organizations", Icon: Rocket },
      { label: "Women Groups", Icon: Flower2 },
    ],
  },
];

function Stakeholders() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Who is at the table"
        title="Fourteen stakeholder groups, one shared platform"
        description="From government and farmer cooperatives to researchers, financiers and civil society — the MSP brings together every voice needed to advance Ondo's cocoa sector."
        align="center"
      />
      <div className="mt-16 space-y-14">
        {categories.map((category) => (
          <div key={category.title}>
            <h2 className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              {category.title}
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-8">
              {category.groups.map((g) => (
                <StakeholderCard key={g.label} label={g.label} Icon={g.Icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
