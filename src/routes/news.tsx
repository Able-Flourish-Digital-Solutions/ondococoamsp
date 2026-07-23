import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Skeleton } from "@/components/ui/skeleton";
import {
  newsListOptions, upcomingEventsOptions,
  EVENT_TYPE_LABEL, type EventRow,
} from "@/lib/content";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events — Ondo State Cocoa MSP" },
      { name: "description", content: "Latest news, updates and upcoming events from the Ondo State Cocoa Multi-Stakeholder Platform." },
      { property: "og:title", content: "News & Events" },
      { property: "og:description", content: "Announcements, meetings, trainings, forums and dialogues from the Ondo Cocoa MSP." },
    ],
  }),
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(newsListOptions());
    context.queryClient.ensureQueryData(upcomingEventsOptions());
  },
  component: NewsPage,
  errorComponent: ({ error }) => <ErrorState message={error.message} />,
  pendingComponent: NewsSkeleton,
});

function NewsPage() {
  return (
    <>
      <NewsSection />
      <EventsSection />
    </>
  );
}

function NewsSection() {
  const { data: news } = useSuspenseQuery(newsListOptions());
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Latest news" title="News from the platform" />
      {news.length === 0 ? (
        <EmptyBlock label="No published news yet. Check back soon." />
      ) : (
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => (
            <Link
              key={n.id}
              to="/news/$id"
              params={{ id: n.id }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                {n.cover_image_url ? (
                  <img
                    src={n.cover_image_url}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : null}
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {new Date(n.published_at).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
                </p>
                <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-foreground">{n.title}</h3>
                {n.excerpt && <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{n.excerpt}</p>}
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                  Read more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

function EventsSection() {
  const { data: events } = useSuspenseQuery(upcomingEventsOptions());
  const grouped = events.reduce<Record<EventRow["event_type"], EventRow[]>>((acc, e) => {
    (acc[e.event_type] ||= []).push(e as EventRow);
    return acc;
  }, {} as Record<EventRow["event_type"], EventRow[]>);

  return (
    <section className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Upcoming events" title="What's coming up" />
        {events.length === 0 ? (
          <EmptyBlock label="No upcoming events scheduled." />
        ) : (
          <div className="mt-12 space-y-12">
            {(Object.keys(grouped) as EventRow["event_type"][]).map((type) => (
              <div key={type}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {EVENT_TYPE_LABEL[type]}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {grouped[type].map((e) => (
                    <div key={e.id} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-foreground">{e.title}</h4>
                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {new Date(e.start_time).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {e.location}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{e.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function EmptyBlock({ label }: { label: string }) {
  return (
    <div className="mt-10 rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center text-sm text-muted-foreground">
      {label}
    </div>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-foreground">
        Couldn't load content: {message}
      </div>
    </div>
  );
}

function NewsSkeleton() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
            <Skeleton className="aspect-[16/10] w-full" />
            <div className="space-y-3 p-6">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}