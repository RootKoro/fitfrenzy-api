import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/navigation';

export default function App() {
  return (
    <NavigationContainer >
      <Navigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:4,
    color:"white",
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
