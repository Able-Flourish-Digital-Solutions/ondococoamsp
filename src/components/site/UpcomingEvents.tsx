import { Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { upcomingEventsOptions, EVENT_TYPE_LABEL } from "@/lib/content";

export function UpcomingEvents() {
  const { data: events } = useSuspenseQuery(upcomingEventsOptions());
  const upcoming = events.slice(0, 3);

  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading eyebrow="What's coming up" title="Upcoming Events" />
          <Link
            to="/news"
            className="hidden text-sm font-medium text-primary hover:underline sm:inline-flex sm:items-center"
          >
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {upcoming.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center">
            <Calendar className="mx-auto h-8 w-8 text-muted-foreground/50" />
            <p className="mt-4 text-sm text-muted-foreground">
              No upcoming events scheduled right now. Check back soon.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {upcoming.map((e) => (
              <div key={e.id} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {EVENT_TYPE_LABEL[e.event_type]}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{e.title}</h3>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 shrink-0" />
                    {new Date(e.start_time).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 shrink-0" />
                    {new Date(e.start_time).toLocaleTimeString(undefined, {
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 shrink-0" />
                    {e.location}
                  </span>
                </div>
                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{e.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
