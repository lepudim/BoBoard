import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

type MenuButtonProps = {
  label: string;
  onPress: () => void;
  primary?: boolean;
};

// Botão reutilizável do menu. "primary" deixa o botão preenchido (ação principal).
function MenuButton({ label, onPress, primary = false }: MenuButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        primary ? styles.buttonPrimary : styles.buttonOutlined,
        pressed && styles.buttonPressed,
      ]}
    >
      <Text style={[styles.buttonText, primary ? styles.textOnPrimary : styles.textOutlined]}>
        {label}
      </Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  // Aviso temporário. Nas próximas etapas, cada botão vai abrir sua tela.
  const comingSoon = () => Alert.alert('Em breve');

  return (
    <View style={styles.container}>
      {/* Nome do projeto: maior que qualquer outro texto da tela */}
      <Text style={styles.title}>BoBoard</Text>

      <View style={styles.menu}>
        <MenuButton label="Criar mapa" primary onPress={comingSoon} />
        <MenuButton label="Inventário" onPress={comingSoon} />
        <MenuButton label="Termos de Serviço" onPress={comingSoon} />
        <MenuButton label="Ajude o projeto!" onPress={comingSoon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 56,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 48,
  },
  menu: {
    width: '100%',
    gap: 16,
  },
  button: {
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonOutlined: {
    borderWidth: 1,
    borderColor: colors.outline,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 18,
  },
  textOnPrimary: {
    color: colors.onPrimary,
    fontWeight: '600',
  },
  textOutlined: {
    color: colors.primary,
  },
});
