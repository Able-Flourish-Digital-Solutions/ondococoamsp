import type { LucideIcon } from "lucide-react";

export function StakeholderCard({ label, Icon }: { label: string; Icon: LucideIcon }) {
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-card shadow-sm ring-1 ring-border transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:ring-primary/40">
        <Icon className="h-9 w-9 text-primary" strokeWidth={1.75} />
      </div>
      <p className="mt-4 text-sm font-medium text-foreground">{label}</p>
    </div>
  );
}