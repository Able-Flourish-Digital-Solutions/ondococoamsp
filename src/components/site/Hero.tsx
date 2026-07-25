import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-cocoa.jpg";
import { MEMBERSHIP_FORM_URL } from "@/lib/membership";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Cocoa plantation with ripe pods in golden sunlight"
          className="h-full w-full object-cover"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.24_0.05_155/0.85)] via-[oklch(0.28_0.05_120/0.72)] to-[oklch(0.30_0.08_55/0.75)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Ondo State, Nigeria
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Strengthening Ondo State's Cocoa Value Chain Through Collaboration
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            The Ondo State Sustainable Cocoa Multi-Stakeholder Platform (MSP) brings together
            government, farmers, private sector actors, development partners,
            researchers, financial institutions and civil society to jointly
            improve cocoa production, sustainability, quality and livelihoods.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <a href={MEMBERSHIP_FORM_URL} target="_blank" rel="noopener noreferrer">
                Register for OSCP Membership <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a href="#about-preview">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}