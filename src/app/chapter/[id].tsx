import { router, Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { DialogueEngine } from '../../components/DialogueEngine';
import { getChapterById } from '../../data/chapters';
import { getSaintById } from '../../data/saints';
import { useProgress } from '../../state/useProgress';
import { colors } from '../../theme/colors';
import type { VirtueId } from '../../engine/types';

export default function ChapterScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const chapter = id ? getChapterById(id) : undefined;
  const saint = chapter ? getSaintById(chapter.saintId) : undefined;
  const { completeChapter } = useProgress();

  if (!chapter) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Capítulo não encontrado.</Text>
      </View>
    );
  }

  async function handleComplete(earnedVirtues: VirtueId[]) {
    await completeChapter(chapter!.id, earnedVirtues);
    router.back();
  }

  return (
    <>
      <Stack.Screen options={{ title: saint?.name ?? chapter.title }} />
      <DialogueEngine chapter={chapter} onComplete={handleComplete} />
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  errorText: {
    color: colors.parchment,
  },
});
