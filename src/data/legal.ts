// Block types shared by the long-form legal pages (privacy, cookies), rendered by LegalPage.astro.
// Text may hold `{token}` markers; the page decides where each token links (see LegalInline.astro).
export type LegalBlock =
  | { p: string }
  | { list: string[] }
  | { facts: { label: string; value: string }[] }
  | { table: { head: string[]; rows: string[][] } };

export interface LegalSection {
  id: string;
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalLink {
  href: string;
  label: string;
  rel?: string;
}
