import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  resourcesListOptions, RESOURCE_CATEGORIES,
  formatFileSize, type ResourceRow,
} from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Ondo State Sustainable Cocoa MSP" },
      { name: "description", content: "Download meeting reports, policy documents, training manuals and research publications from the Ondo State Sustainable Cocoa MSP." },
      { property: "og:title", content: "MSP Resource Library" },
      { property: "og:description", content: "Reports, policies, training manuals and research publications." },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(resourcesListOptions()),
  component: ResourcesPage,
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm text-destructive">Couldn't load resources: {error.message}</p>
    </div>
  ),
  pendingComponent: () => (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="space-y-3">
        {[0, 1, 2, 3].map((i) => <Skeleton key={i} className="h-24 w-full rounded-2xl" />)}
      </div>
    </section>
  ),
});

function ResourcesPage() {
  const { data: resources } = useSuspenseQuery(resourcesListOptions());
  const [filter, setFilter] = useState<ResourceRow["category"] | "all">("all");

  const visible = filter === "all" ? resources : resources.filter((r) => r.category === filter);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Resource library"
        title="Reports, policies and training materials"
        description="Browse and download materials produced by the platform and its working groups."
      />

      <div className="mt-10 flex flex-wrap gap-2">
        <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>All</FilterChip>
        {RESOURCE_CATEGORIES.map((c) => (
          <FilterChip
            key={c.value}
            active={filter === c.value}
            onClick={() => setFilter(c.value)}
          >
            {c.label}
          </FilterChip>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center text-sm text-muted-foreground">
          No resources in this category yet.
        </div>
      ) : (
        <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          {visible.map((r) => (
            <div key={r.id} className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{r.title}</h3>
                  {r.description && <p className="mt-1 text-sm text-muted-foreground">{r.description}</p>}
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="uppercase tracking-wider">{r.file_type ?? "File"}</span>
                    <span>{formatFileSize(r.file_size_kb)}</span>
                    <span>
                      {new Date(r.uploaded_at).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}
                    </span>
                  </div>
                </div>
              </div>
              <Button asChild variant="outline" className="shrink-0">
                <a href={r.file_url} target="_blank" rel="noreferrer">
                  <Download className="mr-1.5 h-4 w-4" /> Download
                </a>
              </Button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground/80 hover:bg-accent",
      )}
    >
      {children}
    </button>
  );
}