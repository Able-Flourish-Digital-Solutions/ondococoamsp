import { Link } from "@tanstack/react-router";
import { UserPlus, Handshake, Mail, BookOpen, ArrowRight } from "lucide-react";
import { MEMBERSHIP_FORM_URL } from "@/lib/membership";

const cardClassName =
  "group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg";

function CardBody({
  Icon,
  label,
  desc,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  desc: string;
}) {
  return (
    <>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-base font-semibold text-foreground">{label}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
        Go <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </>
  );
}

const internalActions = [
  {
    label: "Partner With OSCP",
    desc: "See how organisations engage with the platform.",
    Icon: Handshake,
    to: "/why-join" as const,
  },
  {
    label: "Contact the Secretariat",
    desc: "Reach the team for questions or collaboration.",
    Icon: Mail,
    to: "/contact" as const,
  },
  {
    label: "Explore Resources",
    desc: "Browse reports, guides and publications.",
    Icon: BookOpen,
    to: "/resources" as const,
  },
];

export function EngagementCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <a
          href={MEMBERSHIP_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClassName}
        >
          <CardBody
            Icon={UserPlus}
            label="Become a Member"
            desc="Join as a Core, Support, Observer or Thematic Member."
          />
        </a>
        {internalActions.map((a) => (
          <Link key={a.label} to={a.to} className={cardClassName}>
            <CardBody Icon={a.Icon} label={a.label} desc={a.desc} />
          </Link>
        ))}
      </div>
    </section>
  );
}
