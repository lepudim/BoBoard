import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// Layout raiz do app. Aqui ficam coisas que valem para todas as telas.
// headerShown: false esconde a barra de título padrão.
export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
