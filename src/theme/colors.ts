export const colors = {
  background: '#241017',
  backgroundElevated: '#3B1F2B',
  surface: '#4A2837',
  surfaceMuted: '#5E3546',

  parchment: '#F6ECD9',
  parchmentMuted: '#E4D3B4',

  gold: '#D4AF37',
  goldBright: '#F1D27A',
  wine: '#6B1E2E',
  wineDeep: '#4A1420',

  textPrimary: '#F6ECD9',
  textSecondary: '#C9B79C',
  textOnGold: '#2B1810',

  locked: '#7A6A6F',
  success: '#6E8B5C',
} as const;

export type ThemeColors = typeof colors;
