import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PriorityAreaCard } from "@/components/site/PriorityAreaCard";
import {
  Leaf, CloudSun, PackagePlus, FlaskConical, Smartphone, GraduationCap,
  Users, Banknote, ShieldCheck, BadgeCheck, Store, Landmark,
} from "lucide-react";

export const Route = createFileRoute("/priority-areas")({
  head: () => ({
    meta: [
      { title: "Priority Areas — Ondo State Sustainable Cocoa MSP" },
      { name: "description", content: "Twelve priority areas guiding the platform's work — from sustainable production to policy advocacy." },
      { property: "og:title", content: "MSP Priority Areas" },
      { property: "og:description", content: "The twelve focus areas shaping cocoa sector coordination in Ondo State." },
    ],
  }),
  component: PriorityAreas,
});

const areas = [
  { title: "Sustainable Cocoa Production", Icon: Leaf, description: "Promoting agroforestry, soil health and low-impact farming practices that keep cocoa productive for generations." },
  { title: "Climate Change Adaptation", Icon: CloudSun, description: "Helping farming communities anticipate and adapt to shifting rainfall, drought and pest pressures." },
  { title: "Value Addition", Icon: PackagePlus, description: "Supporting local processing, packaging and product development so more value stays in Ondo State." },
  { title: "Research & Innovation", Icon: FlaskConical, description: "Connecting universities and research institutes with farmers to translate science into practice." },
  { title: "Digital Agriculture", Icon: Smartphone, description: "Rolling out mobile tools, digital advisory and traceability systems tailored to smallholders." },
  { title: "Farmer Training", Icon: GraduationCap, description: "Structured capacity-building programs on good agricultural, environmental and social practices." },
  { title: "Extension Services", Icon: Users, description: "Strengthening the network of field agents who translate technical guidance into farm-level action." },
  { title: "Access to Finance", Icon: Banknote, description: "Linking farmers and cooperatives with credit, insurance and blended-finance instruments." },
  { title: "Quality Assurance", Icon: ShieldCheck, description: "Improving post-harvest handling, fermentation and drying so Ondo cocoa meets premium standards." },
  { title: "Certification", Icon: BadgeCheck, description: "Supporting compliance with sustainability, organic and origin certification schemes." },
  { title: "Market Linkages", Icon: Store, description: "Connecting producers and cooperatives directly to processors, exporters and end buyers." },
  { title: "Policy Advocacy", Icon: Landmark, description: "Coordinated engagement with government to shape supportive laws, incentives and public investment." },
];

function PriorityAreas() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Where we focus"
        title="Twelve priority areas"
        description="Tap any area to learn more about how the platform coordinates action across the value chain."
        align="center"
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((a) => (
          <PriorityAreaCard key={a.title} {...a} />
        ))}
      </div>
    </section>
  );
}