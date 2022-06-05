import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { HomeView } from './src/screens/HomeView'

export default function App() {
  return (
    <HomeView />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
