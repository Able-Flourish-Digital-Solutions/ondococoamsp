import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { newsDetailOptions } from "@/lib/content";

export const Route = createFileRoute("/news/$id")({
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.title} — Ondo Cocoa MSP`;
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
    return data;
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
          alt=""
          className="mt-10 aspect-[16/9] w-full rounded-2xl object-cover"
        />
      )}
      <div className="prose prose-neutral mt-10 max-w-none text-base leading-relaxed text-foreground/90">
        {data.body.split("\n").map((p, i) => (
          <p key={i} className="mb-5">{p}</p>
        ))}
      </div>
    </article>
  );
}