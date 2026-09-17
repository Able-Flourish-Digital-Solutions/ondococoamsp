export interface PlatformStat {
  value: string;
  label: string;
}

/** Structural facts about how the platform is organised — not impact metrics. */
export const STRUCTURAL_STATS: PlatformStat[] = [
  { value: "10", label: "Strategic objectives" },
  { value: "14", label: "Stakeholder groups" },
  { value: "12", label: "Priority areas" },
  { value: "1", label: "Shared vision" },
];

/**
 * Real impact metrics (farmers reached, organisations represented, dialogues
 * convened, trainings delivered, communities reached, resources published)
 * belong here once verified figures are available. Do not populate with
 * estimates — leave empty and this section stays hidden until real data
 * is supplied. See PlatformStats.tsx for the rendering logic.
 */
export const IMPACT_STATS: PlatformStat[] = [];
