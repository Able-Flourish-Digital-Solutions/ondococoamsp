import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowRight, Users, Target, Sparkles, Calendar } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { newsListOptions } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ondo State Cocoa MSP — Strengthening the Cocoa Value Chain" },
      { name: "description", content: "A coordination platform uniting government, farmers, private sector and partners to advance sustainable cocoa production in Ondo State." },
      { property: "og:title", content: "Ondo State Cocoa Multi-Stakeholder Platform" },
      { property: "og:description", content: "A coordination platform uniting government, farmers, private sector and partners to advance sustainable cocoa production in Ondo State." },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(newsListOptions(3)),
  component: Index,
});

const previews = [
  { to: "/about", label: "About", title: "What is the MSP?", desc: "A collaborative framework to co-create solutions for the cocoa sector.", Icon: Users },
  { to: "/priority-areas", label: "Priority Areas", title: "Where we focus", desc: "Twelve priority areas from sustainable production to market linkages.", Icon: Target },
  { to: "/why-join", label: "Why Join", title: "Benefits of joining", desc: "Networking, capacity building, funding and policy engagement.", Icon: Sparkles },
];

function Index() {
  return (
    <>
      <Hero />

      {/* About preview */}
      <section id="about-preview" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About the platform"
              title="One coordinated table for Ondo's cocoa sector"
              description="The MSP convenes government agencies, farmer organizations, private companies, researchers, financiers and civil society to align efforts, share knowledge and drive measurable change across the value chain."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/about">Learn more <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/stakeholders">Meet the stakeholders</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { k: "10", v: "Strategic objectives" },
              { k: "14", v: "Stakeholder groups" },
              { k: "12", v: "Priority areas" },
              { k: "1", v: "Shared vision" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="font-display text-4xl font-semibold text-gradient">{s.k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview cards */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Explore" title="Discover the platform" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {previews.map((p) => (
              <Link key={p.to} to={p.to} className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-hero text-primary-foreground">
                  <p.Icon className="h-5 w-5" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-primary">{p.label}</p>
                <h3 className="mt-1 text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <span className="mt-5 inline-flex items-center text-sm font-medium text-primary">
                  Read more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest news placeholder */}
      <LatestNews />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl gradient-hero px-8 py-16 text-center text-primary-foreground sm:px-16">
          <h2 className="text-3xl text-white sm:text-4xl">Be part of Ondo's cocoa future</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/85">
            Join a coordinated network of stakeholders working together to build a
            sustainable, competitive and inclusive cocoa sector.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Join the Platform</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Link to="/why-join">See the benefits</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function LatestNews() {
  const { data: news } = useSuspenseQuery(newsListOptions(3));
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-6">
        <SectionHeading eyebrow="Latest news" title="News & Events" />
        <Link to="/news" className="hidden text-sm font-medium text-primary hover:underline sm:inline-flex sm:items-center">
          View all <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      {news.length === 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-dashed border-border bg-card/50 p-6">
              <div className="flex h-40 items-center justify-center rounded-lg bg-muted">
                <Calendar className="h-8 w-8 text-muted-foreground/50" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">Coming soon</p>
              <p className="mt-1 text-base font-medium text-foreground/70">News updates will appear here.</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {news.map((n) => (
            <Link
              key={n.id}
              to="/news/$id"
              params={{ id: n.id }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                {n.cover_image_url && (
                  <img src={n.cover_image_url} alt="" loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                )}
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {new Date(n.published_at).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
                </p>
                <h3 className="mt-2 line-clamp-2 text-base font-semibold text-foreground">{n.title}</h3>
                {n.excerpt && <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{n.excerpt}</p>}
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
