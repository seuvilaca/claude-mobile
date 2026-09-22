import type { Chapter } from '../../engine/types';
import { carloAcutis } from './carloAcutis';
import { franciscoDeAssis } from './franciscoDeAssis';

export const chapters: Record<string, Chapter> = {
  [carloAcutis.id]: carloAcutis,
  [franciscoDeAssis.id]: franciscoDeAssis,
};

export function getChapterById(id: string): Chapter | undefined {
  return chapters[id];
}
