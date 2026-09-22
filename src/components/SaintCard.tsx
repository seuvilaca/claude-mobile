import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Saint } from '../engine/types';
import { colors } from '../theme/colors';
import { radius, spacing } from '../theme/spacing';

interface SaintCardProps {
  saint: Saint;
  isCompleted: boolean;
  onPress: () => void;
}

export function SaintCard({ saint, isCompleted, onPress }: SaintCardProps) {
  const isLocked = saint.status === 'comingSoon';

  return (
    <Pressable
      onPress={isLocked ? undefined : onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.card,
        { borderColor: isLocked ? colors.locked : saint.accentColor },
        pressed && !isLocked && styles.cardPressed,
      ]}
    >
      <View style={[styles.avatar, { backgroundColor: isLocked ? colors.surfaceMuted : saint.accentColor }]}>
        <Text style={styles.avatarInitial}>{saint.name.charAt(0)}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{saint.name}</Text>
        <Text style={styles.title}>{saint.title}</Text>
        <Text style={styles.years}>{saint.years}</Text>
      </View>

      <View style={styles.statusColumn}>
        {isLocked ? (
          <Text style={styles.lockedLabel}>Em breve</Text>
        ) : isCompleted ? (
          <Text style={styles.completedLabel}>✓ Concluído</Text>
        ) : (
          <Text style={styles.playLabel}>Jogar</Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    gap: spacing.md,
  },
  cardPressed: {
    backgroundColor: colors.surfaceMuted,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitial: {
    color: colors.parchment,
    fontSize: 22,
    fontWeight: '700',
  },
  info: {
    flex: 1,
  },
  name: {
    color: colors.parchment,
    fontSize: 16,
    fontWeight: '700',
  },
  title: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
  years: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 2,
    opacity: 0.8,
  },
  statusColumn: {
    alignItems: 'flex-end',
  },
  lockedLabel: {
    color: colors.locked,
    fontSize: 12,
    fontStyle: 'italic',
  },
  completedLabel: {
    color: colors.success,
    fontSize: 12,
    fontWeight: '700',
  },
  playLabel: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: '700',
  },
});
