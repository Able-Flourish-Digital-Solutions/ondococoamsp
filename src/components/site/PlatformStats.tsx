import { SectionHeading } from "@/components/site/SectionHeading";
import { STRUCTURAL_STATS, IMPACT_STATS } from "@/lib/platform-stats";

export function PlatformStats() {
  return (
    <div>
      <SectionHeading
        eyebrow="How the platform is organised"
        title="The Platform at a Glance"
        description="Key facts about how OSCP is structured — not a measure of impact."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {STRUCTURAL_STATS.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="font-display text-4xl font-semibold text-gradient">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {IMPACT_STATS.length > 0 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {IMPACT_STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-sm"
            >
              <p className="font-display text-4xl font-semibold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
