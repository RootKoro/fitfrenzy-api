import * as React from 'react';
import { View, StyleSheet, Button, ScrollView, Text, Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { useVideo } from '../hooks/useVideo';
import {Calendar as CalendarNative, CalendarList, Agenda, CalendarProvider, WeekCalendar} from 'react-native-calendars';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Chat } from './Chat';
import { Home } from './Home';
import { Card } from '@rneui/themed';
import CircularProgress from 'react-native-circular-progress-indicator';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";





const Monthly = () => {
  return (
    <CalendarNative 
        enableSwipeMonths={true}
        markedDates={{
            '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
            '2012-05-17': {marked: true},
            '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2012-05-19': {disabled: true, disableTouchEvent: true}
        }}
    />
  )
}

type TopScreens = {
  Weekly: undefined,
  Monthly: undefined,
}

const Swip = createMaterialTopTabNavigator<TopScreens>();


const Calendar = () => {

  
  return (
    <View style={styles.container}>
      <ScrollView
        //onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
        //scrollEventThrottle={16}
         style={{  width: '100%'}}
         
        >
          {/* <View style={{
            flex: 1, 
            minHeight: '100%',
            height: '100%'
          }}>
            
          
            <Swip.Navigator screenOptions={{
              lazy:true,
            }}>
              <Swip.Screen name="Weekly" component={tabPageScreen1} />
              <Swip.Screen name="Monthly" component={Monthly} />
            </Swip.Navigator>
          </View> */}
    <Monthly />

    </ScrollView>
          
    </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* minHeight: 1, 
    minWidth: 1, */
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  fonts: {
    marginBottom: 8,
  },
});

export default Calendar;