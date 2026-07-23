import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Ondo State Cocoa MSP" },
      { name: "description", content: "Placeholder Privacy Policy for the Ondo State Cocoa Multi-Stakeholder Platform." },
      { property: "og:title", content: "Privacy Policy" },
      { property: "og:description", content: "Placeholder Privacy Policy for the Ondo State Cocoa MSP." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl">Privacy Policy</h1>
      <p className="mt-6 text-muted-foreground">
        This is a placeholder page. A full Privacy Policy — reviewed against the
        Nigeria Data Protection Act (NDPA 2023) — will be published here before
        launch.
      </p>
    </section>
  ),
});