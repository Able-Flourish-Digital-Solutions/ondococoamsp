import type { LucideIcon } from "lucide-react";

export function BenefitCard({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: LucideIcon;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}