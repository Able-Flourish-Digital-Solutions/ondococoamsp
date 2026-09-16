import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  COCOA_QUALITY_DIALOGUE_ID,
  NEWS_GALLERIES,
  NEWS_SOURCE_URLS,
  newsDetailOptions,
  type NewsRow,
} from "@/lib/content";
import groupImg1 from "@/assets/msp-inauguration-group-1.jpg.asset.json";
import groupImg2 from "@/assets/msp-inauguration-group-2.jpg.asset.json";

export const Route = createFileRoute("/news/$id")({
  head: ({ loaderData }: { loaderData?: NewsRow }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.title} — Ondo State Sustainable Cocoa MSP`;
    const desc = loaderData.excerpt ?? loaderData.title;
    const img = loaderData.cover_image_url;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: desc },
        ...(img ? [
          { property: "og:image", content: img },
          { name: "twitter:image", content: img },
        ] : []),
      ],
    };
  },
  loader: async ({ context, params }) => {
    const data = await context.queryClient.ensureQueryData(newsDetailOptions(params.id));
    if (!data) throw notFound();
    return data as NewsRow;
  },
  component: NewsDetail,
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm text-destructive">Couldn't load article: {error.message}</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <h1 className="text-3xl">Article not found</h1>
      <p className="mt-3 text-muted-foreground">This article may have been removed or unpublished.</p>
      <Link to="/news" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        <ArrowLeft className="h-4 w-4" /> Back to news
      </Link>
    </div>
  ),
});

function NewsDetail() {
  const { id } = Route.useParams();
  const { data } = useSuspenseQuery(newsDetailOptions(id));
  if (!data) return null;
  const gallery = NEWS_GALLERIES[data.id] ?? [];
  const sourceUrl = NEWS_SOURCE_URLS[data.id];
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link to="/news" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> All news
      </Link>
      <p className="mt-8 text-xs uppercase tracking-wider text-primary">
        {new Date(data.published_at).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <h1 className="mt-2 text-4xl leading-tight sm:text-5xl">{data.title}</h1>
      {data.excerpt && <p className="mt-4 text-lg text-muted-foreground">{data.excerpt}</p>}
      {data.cover_image_url && (
        <img
          src={data.cover_image_url}
          alt={
            data.id === COCOA_QUALITY_DIALOGUE_ID
              ? "Public and private cocoa-sector stakeholders gathered for the cocoa quality standards dialogue in Akure"
              : ""
          }
          className="mt-10 aspect-[16/9] w-full rounded-2xl object-cover"
        />
      )}
      <div className="prose prose-neutral mt-10 max-w-none text-base leading-relaxed text-foreground/90">
        {data.body.split("\n").map((p, i) => (
          <p key={i} className="mb-5">{p}</p>
        ))}
      </div>
      {gallery.length > 0 && (
        <section className="mt-12" aria-labelledby="event-gallery-heading">
          <h2 id="event-gallery-heading" className="text-2xl font-semibold">
            Event gallery
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {gallery.map((image, index) => (
              <figure
                key={image.src}
                className={`overflow-hidden rounded-2xl border border-border bg-card ${index === 0 ? "sm:col-span-2" : ""}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-[16/9] h-full w-full object-cover"
                />
              </figure>
            ))}
          </div>
        </section>
      )}
      {sourceUrl && (
        <p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
          >
            Read the original LinkedIn report <ExternalLink className="h-4 w-4" />
          </a>
        </p>
      )}
      {data.title.toLowerCase().includes("inauguration") && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={groupImg1.url}
              alt="Participants at the Cocoa Stakeholder Meeting and Inauguration in Akure"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={groupImg2.url}
              alt="Stakeholders convened at the Sustainable Cocoa MSP inauguration, Royal Bird Hotel, Akure"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      )}
    </article>
  );
}
