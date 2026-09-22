import { router, useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SaintCard } from '../components/SaintCard';
import { VirtueBadge } from '../components/VirtueBadge';
import { saints } from '../data/saints';
import { useProgress } from '../state/useProgress';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import type { VirtueId } from '../engine/types';

export default function HomeScreen() {
  const { progress, refresh } = useProgress();

  useFocusEffect(
    useCallback(() => {
      refresh();
    }, [refresh]),
  );

  const collectedVirtueIds = Object.keys(progress.virtueCounts) as VirtueId[];

  return (
    <View style={styles.container}>
      <FlatList
        data={saints}
        keyExtractor={(saint) => saint.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Vidas de Santos</Text>
            <Text style={styles.subtitle}>
              Viva a jornada de conversão e fé dos maiores santos da Igreja.
            </Text>

            {collectedVirtueIds.length > 0 && (
              <View style={styles.virtueSection}>
                <Text style={styles.virtueSectionLabel}>Suas virtudes conquistadas</Text>
                <View style={styles.virtueRow}>
                  {collectedVirtueIds.map((virtueId) => (
                    <VirtueBadge key={virtueId} virtueId={virtueId} size="md" />
                  ))}
                </View>
              </View>
            )}
          </View>
        }
        renderItem={({ item }) => (
          <SaintCard
            saint={item}
            isCompleted={
              item.chapterId ? progress.completedChapterIds.includes(item.chapterId) : false
            }
            onPress={() => {
              if (item.chapterId) {
                router.push(`/chapter/${item.chapterId}`);
              }
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  header: {
    marginBottom: spacing.lg,
  },
  title: {
    color: colors.parchment,
    fontSize: 28,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    marginTop: spacing.xs,
    lineHeight: 20,
  },
  virtueSection: {
    marginTop: spacing.lg,
  },
  virtueSectionLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing.sm,
  },
  virtueRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
});
