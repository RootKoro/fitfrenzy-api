import { StyleSheet } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import RootStackScreens from './src/navigation/Navigation';
import * as SplashScreen from 'expo-splash-screen';
import Splash from './src/screens/Splash'
import * as Font from 'expo-font';


export default function App({navigation}: any) {
  const [isSplashVisible, setSplashVisible] = useState(true);
  
  useEffect(() => {
    //SplashScreen.preventAutoHideAsync();
    const loadFonts = async () => {
      await Font.loadAsync({
        'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        
      });
    };
    loadFonts();
   
    // Simulate an async task, for example, loading data or performing authentication
    setTimeout(() => {
      setSplashVisible(false)
      //SplashScreen.hideAsync();
      //navigation.navigate('Home'); // Replace 'Home' with the screen you want to navigate to
    }, 400); // Adjust the duration as needed
  }, []);

  return (
      <NavigationContainer>
        {isSplashVisible ? <Splash /> : <RootStackScreens /> }
      </NavigationContainer>
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
