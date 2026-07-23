import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Ondo State Cocoa MSP" },
      { name: "description", content: "Placeholder Terms of Use for the Ondo State Cocoa Multi-Stakeholder Platform." },
      { property: "og:title", content: "Terms of Use" },
      { property: "og:description", content: "Placeholder Terms of Use for the Ondo State Cocoa MSP." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl">Terms of Use</h1>
      <p className="mt-6 text-muted-foreground">
        This is a placeholder page. Full Terms of Use will be published here
        before launch.
      </p>
    </section>
  ),
});