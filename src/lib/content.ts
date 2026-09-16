import { queryOptions } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type NewsRow = Tables<"news">;
export type EventRow = Tables<"events">;
export type ResourceRow = Tables<"resources">;

export const COCOA_QUALITY_DIALOGUE_ID = "cocoa-quality-standards-enforcement-dialogue";

const cocoaQualityDialogue: NewsRow = {
  id: COCOA_QUALITY_DIALOGUE_ID,
  title:
    "Stakeholders Convene in Akure for Public-Private Dialogue on Ondo State Cocoa Quality Standards Enforcement",
  excerpt:
    "Public and private cocoa-sector stakeholders met in Akure to strengthen dialogue and collective responsibility for cocoa quality standards enforcement in Ondo State.",
  body: "Stakeholders from across the public and private sectors convened in Akure for a dialogue focused on the enforcement of cocoa quality standards in Ondo State. The engagement provided a platform for participants to examine the shared responsibilities required to protect the quality, reputation and competitiveness of cocoa produced in the state.\n\nThe dialogue highlighted the importance of cooperation across the cocoa value chain. Effective quality assurance depends on coordinated action among government institutions, farmers, produce merchants, processors, exporters and other industry actors. It also requires clear standards, consistent monitoring and practical awareness among those who handle cocoa from production through marketing.\n\nFor the Ondo State Sustainable Cocoa Multi-Stakeholder Platform, the engagement reflects the value of bringing diverse actors together around issues that cannot be resolved by any single institution. Continued public-private dialogue can help build a common understanding of quality requirements, identify implementation challenges and encourage responsible practices throughout the value chain.\n\nThe meeting in Akure therefore represents an important contribution to the continuing effort to strengthen cocoa quality governance and sustain confidence in Ondo State cocoa.",
  cover_image_url: "/news/cocoa-quality-dialogue/stakeholder-group.webp",
  is_published: true,
  published_at: "2026-09-16T12:00:00+01:00",
  created_at: "2026-09-16T12:00:00+01:00",
  updated_at: "2026-09-16T12:00:00+01:00",
};

export const NEWS_GALLERIES: Record<string, Array<{ src: string; alt: string }>> = {
  [COCOA_QUALITY_DIALOGUE_ID]: [
    {
      src: "/news/cocoa-quality-dialogue/dialogue-session.webp",
      alt: "A participant addressing stakeholders during the cocoa quality standards dialogue in Akure",
    },
    {
      src: "/news/cocoa-quality-dialogue/presentation.webp",
      alt: "Facilitators concluding a presentation at the public-private dialogue",
    },
    {
      src: "/news/cocoa-quality-dialogue/participants.webp",
      alt: "Stakeholders listening during the cocoa quality standards dialogue",
    },
    {
      src: "/news/cocoa-quality-dialogue/roundtable.webp",
      alt: "Participants contributing to the cocoa quality standards discussion",
    },
    {
      src: "/news/cocoa-quality-dialogue/stakeholder-table.webp",
      alt: "Public and private sector stakeholders participating in the Akure meeting",
    },
  ],
};

export const NEWS_SOURCE_URLS: Record<string, string> = {
  [COCOA_QUALITY_DIALOGUE_ID]:
    "https://www.linkedin.com/pulse/stakeholders-convene-akure-public-private-malre",
};

export const RESOURCE_CATEGORIES = [
  { value: "meeting_report", label: "Meeting Reports" },
  { value: "policy_document", label: "Policy Documents" },
  { value: "training_manual", label: "Training Manuals" },
  { value: "extension_guide", label: "Extension Guides" },
  { value: "research_publication", label: "Research Publications" },
  { value: "presentation", label: "Presentations" },
  { value: "annual_report", label: "Annual Reports" },
] as const;

export const EVENT_TYPE_LABEL: Record<EventRow["event_type"], string> = {
  meeting: "Meetings",
  training: "Trainings",
  forum: "Forums",
  field_school: "Field Schools",
  dialogue: "Dialogues",
  conference: "Conferences",
};

export function newsListOptions(limit?: number) {
  return queryOptions({
    queryKey: ["news", "list", limit ?? "all"],
    queryFn: async () => {
      let q = supabase
        .from("news")
        .select("id, title, excerpt, cover_image_url, published_at")
        .eq("is_published", true)
        .order("published_at", { ascending: false });
      if (limit) q = q.limit(limit);
      const { data, error } = await q;
      if (error) throw error;
      const combined = [cocoaQualityDialogue, ...(data ?? [])]
        .filter(
          (item, index, items) =>
            items.findIndex((candidate) => candidate.id === item.id) === index,
        )
        .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
      return limit ? combined.slice(0, limit) : combined;
    },
  });
}

export function newsDetailOptions(id: string) {
  return queryOptions({
    queryKey: ["news", "detail", id],
    queryFn: async () => {
      if (id === COCOA_QUALITY_DIALOGUE_ID) return cocoaQualityDialogue;
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("id", id)
        .eq("is_published", true)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });
}

export function upcomingEventsOptions() {
  return queryOptions({
    queryKey: ["events", "upcoming"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("id, title, description, event_type, location, start_time, end_time")
        .eq("is_published", true)
        .gte("start_time", new Date().toISOString())
        .order("start_time", { ascending: true });
      if (error) throw error;
      return data ?? [];
    },
  });
}

export function resourcesListOptions() {
  return queryOptions({
    queryKey: ["resources", "list"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("resources")
        .select("id, title, description, file_url, category, file_type, file_size_kb, uploaded_at")
        .eq("is_published", true)
        .order("uploaded_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });
}

export function formatFileSize(kb: number | null): string {
  if (!kb) return "—";
  if (kb < 1024) return `${kb} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}
