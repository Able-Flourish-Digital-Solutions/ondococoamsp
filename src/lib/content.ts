import { queryOptions } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type NewsRow = Tables<"news">;
export type EventRow = Tables<"events">;
export type ResourceRow = Tables<"resources">;

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
      return data ?? [];
    },
  });
}

export function newsDetailOptions(id: string) {
  return queryOptions({
    queryKey: ["news", "detail", id],
    queryFn: async () => {
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