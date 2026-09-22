import { useCallback, useEffect, useState } from 'react';
import type { VirtueId } from '../engine/types';
import { loadProgress, markChapterCompleted, type ProgressState } from './progress';

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>({
    completedChapterIds: [],
    virtueCounts: {},
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const refresh = useCallback(async () => {
    const next = await loadProgress();
    setProgress(next);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    let isMounted = true;
    loadProgress().then((next) => {
      if (isMounted) {
        setProgress(next);
        setIsLoaded(true);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const completeChapter = useCallback(async (chapterId: string, earnedVirtues: VirtueId[]) => {
    const next = await markChapterCompleted(chapterId, earnedVirtues);
    setProgress(next);
    return next;
  }, []);

  return { progress, isLoaded, refresh, completeChapter };
}
