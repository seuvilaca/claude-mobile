import type { Chapter } from '../../engine/types';
import { franciscoDeAssis } from './franciscoDeAssis';

export const chapters: Record<string, Chapter> = {
  [franciscoDeAssis.id]: franciscoDeAssis,
};

export function getChapterById(id: string): Chapter | undefined {
  return chapters[id];
}
