import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Container } from './src/Styles/globals';
import AddEvent from './src/Screens/AddEvent';
import EventDatails from './src/Screens/EventDetails';

export default function App() {
  return (
    <Container>
      <AddEvent />
      <StatusBar style="auto" />
    </Container>
  );
}
 