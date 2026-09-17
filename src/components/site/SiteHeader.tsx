import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/site/BrandLogo";
import { MEMBERSHIP_FORM_URL } from "@/lib/membership";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/stakeholders", label: "Stakeholders" },
  { to: "/priority-areas", label: "Priority Areas" },
  { to: "/why-join", label: "Why Join" },
  { to: "/news", label: "News" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Ondo Sustainable Cocoa MSP home">
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{
                className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-accent",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <a href={MEMBERSHIP_FORM_URL} target="_blank" rel="noopener noreferrer">
              Become a Member
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-border/60 bg-background lg:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent"
                activeProps={{
                  className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-accent",
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <a
                href={MEMBERSHIP_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Become a Member
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
