import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StakeholderCard } from "@/components/site/StakeholderCard";
import {
  Landmark, Wheat, Users, PackageOpen, Factory, Ship, FlaskConical,
  GraduationCap, Banknote, Globe2, HeartHandshake, Megaphone, Rocket, Flower2,
} from "lucide-react";

export const Route = createFileRoute("/stakeholders")({
  head: () => ({
    meta: [
      { title: "Stakeholders — Ondo State Sustainable Cocoa MSP" },
      { name: "description", content: "The government, farmer, private sector, research and civil society groups that make up the Ondo State Sustainable Cocoa MSP." },
      { property: "og:title", content: "MSP Stakeholders" },
      { property: "og:description", content: "Meet the fourteen stakeholder groups shaping Ondo State's cocoa sector." },
    ],
  }),
  component: Stakeholders,
});

const groups = [
  { label: "Government", Icon: Landmark },
  { label: "Farmers", Icon: Wheat },
  { label: "Cooperatives", Icon: Users },
  { label: "Input Suppliers", Icon: PackageOpen },
  { label: "Processors", Icon: Factory },
  { label: "Exporters", Icon: Ship },
  { label: "Researchers", Icon: FlaskConical },
  { label: "Universities", Icon: GraduationCap },
  { label: "Financial Institutions", Icon: Banknote },
  { label: "Development Partners", Icon: Globe2 },
  { label: "NGOs", Icon: HeartHandshake },
  { label: "Civil Society", Icon: Megaphone },
  { label: "Youth Organizations", Icon: Rocket },
  { label: "Women Groups", Icon: Flower2 },
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
      <div className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {groups.map((g) => (
          <StakeholderCard key={g.label} label={g.label} Icon={g.Icon} />
        ))}
      </div>
    </section>
  );
}