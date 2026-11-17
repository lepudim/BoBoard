import HomeScreen from '../src/screens/HomeScreen';

// No Expo Router, o arquivo app/index.tsx é a tela inicial (rota "/").
// O desenho da tela fica em src/screens/HomeScreen.tsx.
export default function Index() {
  return <HomeScreen />;
}
