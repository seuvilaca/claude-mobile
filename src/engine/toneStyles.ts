import { colors } from '../theme/colors';
import type { Scene } from './types';

export interface ToneStyle {
  background: string;
  accent: string;
}

const toneStyles: Record<NonNullable<Scene['backgroundTone']>, ToneStyle> = {
  dawn: { background: '#3E2A3A', accent: colors.goldBright },
  night: { background: '#1B0F16', accent: '#A9B8D6' },
  chapel: { background: colors.wineDeep, accent: colors.gold },
  forest: { background: '#233326', accent: '#8FB596' },
  town: { background: '#3A2E22', accent: '#D8B37B' },
};

export function getToneStyle(tone: Scene['backgroundTone']): ToneStyle {
  if (!tone) return { background: colors.background, accent: colors.gold };
  return toneStyles[tone];
}
