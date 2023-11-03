import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Chat } from "../screens/Chat";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "@rneui/base";
import Calendar from "../screens/Calendar";
import { Sport } from "../screens/Sport";

const Tab = createBottomTabNavigator()


const Tabs = () => {

    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    height: 70,
                    paddingBottom: 0,
                    ...styles.shadow
                }
            })}>
            <Tab.Screen name="Program"  component={Sport}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
                            <Image 
                                source={require('./../../assets/images/icons/25*25/chrono-96.png')}
                                resizeMode="contain"
                                style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: focused ? "green" : "#748c94",
                                    marginBottom: 5
                                }}
                            />
                            <View style={{width: 5, height: 5, backgroundColor: 'green', borderRadius: 50, opacity: focused ? 1 : 0}}></View>
                            
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Calendar" key="Calendar" component={Calendar}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
                            <Image 
                                source={require('./../../assets/images/icons/25*25/icons8-chart-96-2.png')}
                                resizeMode="contain"
                                style={{
                                    width: 33,
                                    height: 33,
                                    tintColor: focused ? "green" : "#748c94",
                                    marginBottom: 5
                                }}
                            />
                            <View style={{width: 5, height: 5, backgroundColor: 'green', borderRadius: 50, opacity: focused ? 1 : 0}}></View>
                            {/* <Text style={{color: focused ? 'green' : '#748C94'}}>
                                Progress
                            </Text> */}
                        </View>
                    )
                }}/>
            <Tab.Screen name="Journal" key="Journal" component={Chat}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
                            <Image 
                                source={require('./../../assets/images/icons/25*25/compass-96.png')}
                                resizeMode="contain"
                                style={{
                                    width: 31,
                                    height: 31,
                                    tintColor: focused ? "green" : "#748c94",
                                    marginBottom: 5
                                }}
                            />
                            <View style={{width: 5, height: 5, backgroundColor: 'green', borderRadius: 50, opacity: focused ? 1 : 0}}></View>
                            {/* <Text style={{color: focused ? 'green' : '#748C94'}}>
                                Discover
                            </Text> */}
                        </View>
                    )
                }}/>
            <Tab.Screen name="Chat" key="Chat" component={Chat}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
                            <Image 
                                source={require('./../../assets/images/icons/25*25/user5-96.png')}
                                resizeMode="contain"
                                style={{
                                    width: 33,
                                    height: 33,
                                    tintColor: focused ? "green" : "#748c94",
                                    marginBottom: 5
                                }}
                            />
                            <View style={{width: 5, height: 5, backgroundColor: 'green', borderRadius: 50, opacity: focused ? 1 : 0}}></View>
                            {/* <Text style={{color: focused ? 'green' : '#748C94'}}>
                                Settings
                            </Text> */}
                        </View>
                    )
                }}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
export default Tabs;