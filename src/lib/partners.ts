export interface Partner {
  name: string;
  /** Path under src/assets/partners/ once an approved logo file is supplied. */
  logoSrc?: string;
}

/**
 * Confirmed partners only — sourced from the existing MEMBERSHIP_PARTNERS
 * credit line (see src/lib/membership.ts). Do not add an organisation here
 * until it is a confirmed OSCP partner; do not source logo images from the
 * web — request the official file from the partner or the Secretariat and
 * drop it under src/assets/partners/.
 */
export const PARTNERS: Partner[] = [
  { name: "GIZ" },
  { name: "European Union (EU)" },
  { name: "BMZ" },
];
