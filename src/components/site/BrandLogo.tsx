import { cn } from "@/lib/utils";
import oscpLogo from "@/assets/oscp-logo.png";

export function BrandLogo({
  variant = "header",
  className,
}: {
  variant?: "header" | "footer";
  className?: string;
}) {
  const dark = variant === "footer";
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <img
        src={oscpLogo}
        alt=""
        className="h-9 w-9 shrink-0 object-contain"
        width={36}
        height={36}
      />
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-display text-sm font-semibold",
            dark ? "text-secondary-foreground" : "text-foreground",
          )}
        >
          Ondo Sustainable Cocoa MSP
        </span>
        <span
          className={cn(
            "text-[10px] uppercase tracking-wider",
            dark ? "text-secondary-foreground/70" : "text-muted-foreground",
          )}
        >
          Multi-Stakeholder Platform
        </span>
      </span>
    </span>
  );
}
