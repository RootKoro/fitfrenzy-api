import "./ReactotronConfig"
import { StyleSheet } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import RootStackScreens from './src/navigation/Navigation';
import * as SplashScreen from 'expo-splash-screen';
import Splash from './src/screens/Splash'
import * as Font from 'expo-font';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux'
import store from './src/redux/store';

export default function App({navigation}: any) {
  const [isSplashVisible, setSplashVisible] = useState(true);
  const queryClient = new QueryClient();

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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          {isSplashVisible ? <Splash /> : <RootStackScreens /> }
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
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
