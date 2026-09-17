/**
 * Set VITE_SITE_URL (e.g. "https://oscp.ng") to the production domain to
 * make Open Graph / Twitter image URLs absolute, as required by most social
 * crawlers. Until it's set, toAbsoluteUrl returns the path unchanged, which
 * matches the site's current behaviour.
 */
const SITE_URL = import.meta.env.VITE_SITE_URL as string | undefined;

export function toAbsoluteUrl(path: string | null | undefined): string | undefined {
  if (!path) return undefined;
  if (!SITE_URL || /^https?:\/\//.test(path)) return path;
  return new URL(path, SITE_URL).toString();
}
