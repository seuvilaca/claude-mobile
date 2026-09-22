import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';
import { radius, spacing } from '../theme/spacing';

interface ChoiceButtonProps {
  label: string;
  onPress: () => void;
}

export function ChoiceButton({ label, onPress }: ChoiceButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.surface,
    borderColor: colors.gold,
    borderWidth: 1,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
  },
  buttonPressed: {
    backgroundColor: colors.surfaceMuted,
  },
  label: {
    color: colors.parchment,
    fontSize: 15,
    lineHeight: 21,
  },
});
