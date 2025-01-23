export type GTAG = `G-${string}`;

export const devPaths = [
  'merge',
  'surge',
  'scourge',
  'verge',
  'purge',
  'splurge',
] as const;

export type DevPath = typeof devPaths[number];
