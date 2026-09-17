import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export function PriorityAreaCard({
  index,
  title,
  description,
  Icon,
}: {
  index?: number;
  title: string;
  description: string;
  Icon: LucideIcon;
}) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        open && "ring-2 ring-primary/30",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </div>
      {typeof index === "number" && (
        <span className="mt-5 block text-xs font-semibold tracking-wider text-gold">
          {String(index).padStart(2, "0")}
        </span>
      )}
      <h3
        className={cn(
          "text-lg font-semibold text-foreground",
          typeof index === "number" ? "mt-1" : "mt-5",
        )}
      >
        {title}
      </h3>
      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </button>
  );
}
