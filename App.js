import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import EventDatails from './src/screens/EventDetails';

export default function App() {
  return (
    <View>
      <EventDatails />
      <StatusBar style="auto" />
    </View>
  );
}

