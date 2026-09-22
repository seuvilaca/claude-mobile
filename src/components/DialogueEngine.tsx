import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ChoiceButton } from './ChoiceButton';
import { VirtueBadge } from './VirtueBadge';
import { getToneStyle } from '../engine/toneStyles';
import type { Chapter, VirtueId } from '../engine/types';
import { colors } from '../theme/colors';
import { radius, spacing } from '../theme/spacing';

interface DialogueEngineProps {
  chapter: Chapter;
  onComplete: (earnedVirtues: VirtueId[]) => void;
}

export function DialogueEngine({ chapter, onComplete }: DialogueEngineProps) {
  const [sceneId, setSceneId] = useState(chapter.startSceneId);
  const [earnedVirtues, setEarnedVirtues] = useState<VirtueId[]>([]);

  const scene = chapter.scenes[sceneId];
  const tone = useMemo(() => getToneStyle(scene?.backgroundTone), [scene?.backgroundTone]);

  if (!scene) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Não foi possível carregar esta cena.</Text>
      </View>
    );
  }

  function goTo(nextSceneId: string, virtueAward?: VirtueId) {
    if (virtueAward) {
      setEarnedVirtues((prev) => [...prev, virtueAward]);
    }
    setSceneId(nextSceneId);
  }

  function handleFinish() {
    const finalVirtues = scene.virtueAward
      ? [...earnedVirtues, scene.virtueAward]
      : earnedVirtues;
    onComplete(finalVirtues);
  }

  return (
    <View style={[styles.container, { backgroundColor: tone.background }]}>
      {earnedVirtues.length > 0 && (
        <View style={styles.virtueRow}>
          {earnedVirtues.map((virtueId, index) => (
            <VirtueBadge key={`${virtueId}-${index}`} virtueId={virtueId} />
          ))}
        </View>
      )}

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.card, { borderColor: tone.accent }]}>
          {scene.speaker && (
            <Text style={[styles.speaker, { color: tone.accent }]}>{scene.speaker}</Text>
          )}
          <Text style={styles.sceneText}>{scene.text}</Text>
        </View>
      </ScrollView>

      <View style={styles.actions}>
        {scene.isEnding ? (
          <Pressable style={styles.finishButton} onPress={handleFinish} accessibilityRole="button">
            <Text style={styles.finishLabel}>Concluir capítulo</Text>
          </Pressable>
        ) : scene.choices && scene.choices.length > 0 ? (
          scene.choices.map((choice) => (
            <ChoiceButton
              key={choice.next + choice.text}
              label={choice.text}
              onPress={() => goTo(choice.next, choice.virtueAward)}
            />
          ))
        ) : scene.next ? (
          <Pressable
            style={styles.finishButton}
            onPress={() => goTo(scene.next as string, scene.virtueAward)}
            accessibilityRole="button"
          >
            <Text style={styles.finishLabel}>Continuar</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  errorText: {
    color: colors.parchment,
  },
  virtueRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginBottom: spacing.md,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(0,0,0,0.28)',
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  speaker: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: spacing.sm,
  },
  sceneText: {
    color: colors.parchment,
    fontSize: 17,
    lineHeight: 26,
  },
  actions: {
    marginTop: spacing.lg,
  },
  finishButton: {
    backgroundColor: colors.gold,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  finishLabel: {
    color: colors.textOnGold,
    fontSize: 16,
    fontWeight: '700',
  },
});
