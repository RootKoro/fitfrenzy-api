import * as React from 'react';
import { View, StyleSheet, Button, ScrollView, Text, Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { useVideo } from '../hooks/useVideo';
import {Calendar, CalendarList, Agenda, CalendarProvider, WeekCalendar} from 'react-native-calendars';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Chat } from './Chat';
import { Home } from './Prog';
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


/* const updateTabHeight = (event) => {
  const { height } = event.nativeEvent.layout;
  if(tabPageHeight === 0){
    setTabPageHeight(height);
  }
} */






export default function Statics() {

  const { ref, status, onPlaybackStatusUpdate, onTogglePlaying } = useVideo()
  const widthAndHeight = 250
  const series = [123, 321, 123, 789, 537]
  const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00']

  const d = [10, 5, 90, 30, 20, 10, 80];
  const datapoints = d.map((datapoint) => datapoint);

  const minValue = 5;
const maxValue = 90;

function* yLabel() {
  yield* [minValue, '', maxValue];
}
  const yLabelIterator = yLabel();
  

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
<View style={{padding: 15}}>
  <Text>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", 'Sun'],
      datasets: [
        {
          data: datapoints,
        },
        {
          data: [0],
          withDots: false,
        },
        {
          data: [100],
          withDots: false,
        },
      ]
    }}
    width={Dimensions.get('screen').width-30} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix="%"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 0, // optional, defaults to 2dp
      barPercentage: .8,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      formatYLabel: () => yLabelIterator.next().value,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }, 
    }}
    //
    fromZero
    //bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
            {/* <Text style={styles.fonts}>Normal Text</Text> */}
          
          <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-around', 
            marginVertical: 15,
            
          }}>
            <Card containerStyle={{
              backgroundColor: 'white',
              borderRadius: 10,
              margin: 0
            }}>
              <Card.Title>FONTS</Card.Title>
              <CircularProgress
                value={30}
                radius={50}
                activeStrokeColor={'#2465FD'}
                activeStrokeSecondaryColor={'#C25AFF'}
              />
            </Card>
            <Card containerStyle={{
              backgroundColor: 'white',
              borderRadius: 10,
              margin: 0

            }}>
              <Card.Title>FONTS</Card.Title>
              <CircularProgress
                value={85}
                radius={50}
                activeStrokeColor={'#2465FD'}
                activeStrokeSecondaryColor={'#C25AFF'}
              />
            </Card>
            <Card containerStyle={{
              backgroundColor: 'white',
              borderRadius: 10,
              margin: 0
            }}>
              <Card.Title>FONTS</Card.Title>
              <CircularProgress
                value={66}
                radius={50}
                title='Kcal'
                activeStrokeColor={'#2465FD'}
                activeStrokeSecondaryColor={'#C25AFF'}
              />
            </Card>
            
            </View>
            
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
