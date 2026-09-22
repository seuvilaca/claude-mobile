import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../theme/colors';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.backgroundElevated },
          headerTintColor: colors.parchment,
          headerTitleStyle: { color: colors.parchment },
          contentStyle: { backgroundColor: colors.background },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Vidas de Santos' }} />
        <Stack.Screen name="chapter/[id]" options={{ title: '' }} />
      </Stack>
    </>
  );
}
