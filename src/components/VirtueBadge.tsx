import { StyleSheet, Text, View } from 'react-native';
import { virtues } from '../data/virtues';
import { colors } from '../theme/colors';
import { radius, spacing } from '../theme/spacing';
import type { VirtueId } from '../engine/types';

interface VirtueBadgeProps {
  virtueId: VirtueId;
  size?: 'sm' | 'md';
}

export function VirtueBadge({ virtueId, size = 'sm' }: VirtueBadgeProps) {
  const virtue = virtues[virtueId];
  const isSmall = size === 'sm';

  return (
    <View style={[styles.badge, isSmall && styles.badgeSmall]}>
      <Text style={isSmall ? styles.iconSmall : styles.iconMedium}>{virtue.icon}</Text>
      {!isSmall && <Text style={styles.name}>{virtue.name}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.pill,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    gap: spacing.xs,
  },
  badgeSmall: {
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  iconSmall: {
    fontSize: 14,
  },
  iconMedium: {
    fontSize: 18,
  },
  name: {
    color: colors.parchment,
    fontSize: 13,
  },
});
