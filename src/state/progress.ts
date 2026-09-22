import AsyncStorage from '@react-native-async-storage/async-storage';
import type { VirtueId } from '../engine/types';

const STORAGE_KEY = 'vidasdesantos:progress:v1';

export interface ProgressState {
  completedChapterIds: string[];
  virtueCounts: Partial<Record<VirtueId, number>>;
}

const emptyProgress: ProgressState = {
  completedChapterIds: [],
  virtueCounts: {},
};

export async function loadProgress(): Promise<ProgressState> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress;
    const parsed = JSON.parse(raw) as ProgressState;
    return {
      completedChapterIds: parsed.completedChapterIds ?? [],
      virtueCounts: parsed.virtueCounts ?? {},
    };
  } catch {
    return emptyProgress;
  }
}

async function saveProgress(progress: ProgressState): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export async function markChapterCompleted(
  chapterId: string,
  earnedVirtues: VirtueId[],
): Promise<ProgressState> {
  const current = await loadProgress();

  const completedChapterIds = current.completedChapterIds.includes(chapterId)
    ? current.completedChapterIds
    : [...current.completedChapterIds, chapterId];

  const virtueCounts = { ...current.virtueCounts };
  for (const virtueId of earnedVirtues) {
    virtueCounts[virtueId] = (virtueCounts[virtueId] ?? 0) + 1;
  }

  const next: ProgressState = { completedChapterIds, virtueCounts };
  await saveProgress(next);
  return next;
}

export async function resetProgress(): Promise<ProgressState> {
  await saveProgress(emptyProgress);
  return emptyProgress;
}
