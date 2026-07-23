import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Linkedin, Youtube, Leaf } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-display text-base font-semibold">Ondo Cocoa MSP</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-secondary-foreground/80">
            Coordinating stakeholders across Ondo State's cocoa value chain to
            improve productivity, sustainability, and livelihoods.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary-foreground/10 transition-colors hover:bg-secondary-foreground/20"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="About">
          <FLink to="/about">Our Story</FLink>
          <FLink to="/stakeholders">Stakeholders</FLink>
          <FLink to="/priority-areas">Priority Areas</FLink>
          <FLink to="/why-join">Why Join</FLink>
        </FooterCol>

        <FooterCol title="Resources">
          <FLink to="/news">News & Events</FLink>
          <FLink to="/resources">Resource Library</FLink>
        </FooterCol>

        <FooterCol title="Contact">
          <FLink to="/contact">Get in touch</FLink>
          <span className="text-sm text-secondary-foreground/80">Secretariat, Akure, Ondo State</span>
          <span className="text-sm text-secondary-foreground/80">info@ondococoamsp.ng</span>
        </FooterCol>
      </div>

      <div className="border-t border-secondary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-secondary-foreground/70 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} Ondo State Cocoa Multi-Stakeholder Platform. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-secondary-foreground">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-secondary-foreground">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-secondary-foreground/90">{title}</h3>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground">
      {children}
    </Link>
  );
}