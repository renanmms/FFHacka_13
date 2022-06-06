import { StatusBar } from 'expo-status-bar';

import { StyleSheet } from 'react-native';
import { HomeView } from './src/screens/HomeView'

export default function App() {
  return (
    <HomeView />

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
 