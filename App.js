import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import AddEvent from './src/Screens/AddEvent';

export default function App() {
  return (
    <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <AddEvent/>
      <StatusBar style="auto" />
    </View>
  );
}
