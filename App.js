import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import AddParking from './src/screens/AddParking';
import EventDatails from './src/screens/EventDetails';

export default function App() {
  return (
    <View>
      <AddParking />
      <StatusBar style="auto" />
    </View>
  );
}

