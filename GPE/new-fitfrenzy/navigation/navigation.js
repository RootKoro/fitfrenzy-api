import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import Calendar from '../screens/calendar';
import Chat from '../screens/chat';
import JournalScreen from '../screens/journalScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarItemStyle:{
        // backgroundColor:'#00ff00',
        // margin:5,
        // borderRadius:10,
        padding:6
      },
    //   headerStyle: {
    //     backgroundColor: '#000',
    //     borderWidth:0,
    //     borderColor:"black"
    //  } ,
      headerShown: false,
      tabBarStyle:{
        backgroundColor:'#fff',
        height:60,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:90,
        margin:5,
      // paddingHorizontal: 5,
        paddingTop: 0,
      // backgroundColor: 'rgba(34,36,40,1)',
        position: 'absolute',
      // borderTopWidth: 0,
      },
 
      tabBarIcon: ({ focused, color, size }) => {

        let iconName;
        if (route.name === 'Acceuil') {

          iconName = focused ? 'home' : 'home-outline';

        } else if (route.name === 'Calendar') {

          iconName = focused ? 'calendar' : 'calendar-outline';

        }
        else if (route.name === 'Journal') {

          iconName = focused ? 'newspaper' : 'newspaper-outline';

        } else if (route.name === 'Chat') {
          iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';

        }

        return <Ionicons name={iconName} size={size} color={color} />;

      },

    })}

    tabBarOptions={{

      activeTintColor: 'black',

      inactiveTintColor: 'gray',
      
    }}>
      <Tab.Screen name="Acceuil" component={HomeScreen}   />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Journal" component={JournalScreen} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})