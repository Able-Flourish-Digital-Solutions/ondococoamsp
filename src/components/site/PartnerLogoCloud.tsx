import { SectionHeading } from "@/components/site/SectionHeading";
import { PARTNERS } from "@/lib/partners";

export function PartnerLogoCloud() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Our network"
        title="Working Together for Sustainable Cocoa"
        description="OSCP brings together public institutions, farmer organisations, private-sector actors, researchers, development partners and other stakeholders working across Ondo State's cocoa value chain."
        align="center"
      />
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        {PARTNERS.map((partner) => (
          <div
            key={partner.name}
            className="flex h-16 min-w-[10rem] items-center justify-center rounded-xl border border-border bg-card px-6 grayscale transition-all duration-300 hover:grayscale-0 hover:shadow-md"
          >
            {partner.logoSrc ? (
              <img
                src={partner.logoSrc}
                alt={partner.name}
                className="max-h-8 w-auto object-contain"
                loading="lazy"
              />
            ) : (
              <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {partner.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
