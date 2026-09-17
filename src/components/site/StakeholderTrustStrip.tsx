import { Landmark, Wheat, Store, FlaskConical, Globe2, Megaphone, Banknote } from "lucide-react";

const groups = [
  { label: "Government", Icon: Landmark },
  { label: "Farmers", Icon: Wheat },
  { label: "Private Sector", Icon: Store },
  { label: "Research & Academia", Icon: FlaskConical },
  { label: "Development Partners", Icon: Globe2 },
  { label: "Civil Society", Icon: Megaphone },
  { label: "Financial Institutions", Icon: Banknote },
];

export function StakeholderTrustStrip() {
  return (
    <section
      className="border-b border-border/60 bg-card/40"
      aria-label="Who the platform brings together"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:justify-between">
          {groups.map(({ label, Icon }) => (
            <div key={label} className="flex items-center gap-2.5 text-foreground/80">
              <Icon className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
              <span className="text-xs font-medium uppercase tracking-wider sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
