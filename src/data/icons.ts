// PNG app icons rendered at build time from public/favicon.svg by src/pages/[icon].png.ts.
export const appIcons = [
  { name: 'apple-touch-icon', size: 180, inManifest: false },
  { name: 'icon-192', size: 192, inManifest: true },
  { name: 'icon-512', size: 512, inManifest: true },
] as const;

export type AppIcon = (typeof appIcons)[number];
