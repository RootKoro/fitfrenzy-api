import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Chat } from "../screens/Chat";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon, Image } from "@rneui/base";
import Statics from "../screens/Statics";
import { Sport } from "../screens/Sport";
import { Settings } from "../screens/Settings";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import Survey from "../screens/Survey";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { useSelector } from "react-redux";
import { useUserProfile } from "../hooks/queries/useUserQuery";
import { CompositeNavigationProp } from "@react-navigation/native";
import Splash from "../screens/Splash";
import Loading from "../screens/Loading";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Prog } from "../screens/Prog";
import Calendar from "react-native-calendars/src/calendar";
import Home from "../screens/Home";
import WorkoutDetails from "../screens/WorkoutDetails";

type BottomTabParams = {
    Program: undefined,
    AnalyticsStackGroup: undefined,
    Journal: undefined,
    Chat: undefined,
    Home: undefined,
    Settings: { top: number},
    WorkoutDetails: undefined
};

const Tab = createBottomTabNavigator<BottomTabParams>()

export type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParams, 'Settings'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const RootTabScreens = ({navigation}: any) => {

    return(
        <Tab.Navigator initialRouteName="Home"
            screenOptions={({ route, navigation }) => ({
                headerShown: true,
                headerTitle: "",
               /*  headerLeft: () => (
                    <View style={{marginLeft: 10}}>
                        <Button radius={"sm"} type="clear">
                            <Icon name="menu" color="black" />
                        </Button>
                    </View>
                ),
                headerRight: () => (
                    <View style={{marginLeft: 10, flexDirection: 'row'}}>
                        <Button radius={"sm"} type="clear">
                            <Icon name="notifications-none" color="black" />
                        </Button>
                    </View>
                ), */
                /* tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "ios-information-circle";
                    if (route.name === 'Program') {
                        iconName = focused? 'ios-information-circle' : 'ios-information-circle-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={"red"} />;
                }, */
                tabBarShowLabel: false,   
                tabBarStyle:{
                   /*  position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20, */
                    backgroundColor: 'white',
                    borderRadius: 15,
                    height: 70,
                    paddingBottom: 0,
                    ...styles.shadow
                },
            })}>
            <Tab.Screen name="Home" key="home" component={Home}/>
            <Tab.Screen name="WorkoutDetails" key="WorkoutDetails" component={WorkoutDetails}
                options={{
                    title: 'Sport',
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
            <Tab.Screen name="AnalyticsStackGroup" key="AnalyticsStackGroup" component={AnalyticsStackGroup}
                options={{
                    headerShown: false,
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
            <Tab.Screen name="Settings" key="Settings" component={Settings} initialParams={{ top: 5 }}
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
                }}/>{/* {() => <Settings route={route} navigation={navigation} />}</Tab.Screen> */}
        </Tab.Navigator>
    )
}

export default RootTabScreens;

const AnalyticsStack = createNativeStackNavigator<any>();

const AnalyticsStackGroup = ({ navigation }: any) => {
    return (
        <AnalyticsStack.Navigator
            screenOptions={{
                headerShown: true,
                /* cardStyle: {
                    backgroundColor: 'white',
                    borderRadius: 15,
                    height: 70,
                    paddingBottom: 0,
                    ...styles.shadow
                }, */
            }}
        >
            <AnalyticsStack.Screen name="Statics" key="Statics" 
                component={Statics} 
                options={{
                    headerShown: true,
                    headerRight: () => (
                        <View style={{marginLeft: 10, flexDirection: 'row'}}>
                            {true && 
                                <Button radius={"sm"} type="clear" onPress={() => navigation.navigate('Calendar')}>
                                    <Icon name="calendar-today" color="black" />
                                </Button> 
                            }
                        </View>
                    ),
                }}/>
            <AnalyticsStack.Screen name="Calendar" key="Calendar" component={Calendar} />
        </AnalyticsStack.Navigator>
    )
}
export type RootStackParamList = {
    Splash: any
    Loading: any
    Register: any
    Login: any
    CardStack: any
    Survey: any
    Main: any
    EditProfile: undefined,
    WorkoutDetails: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackScreens = ({ navigation }: any) => {
    //const {refetch : getUserProfile, data: d, isSuccess} = useUserProfile();
    const { userToken: isLoggedIn, userInfo } = useSelector((state: any) => state.auth)
    const { data: user, isLoading } = useUserProfile();

    return (
        <RootStack.Navigator
            screenOptions={({ route }) => ({
                headerShown:  true,
                title: 'eer',
                headerLeft: () => (
                    <View style={{marginLeft: 10}}>
                        <Button radius={"sm"} type="clear">
                            <Icon name="menu" color="black" />
                        </Button>
                    </View>
                ),
                headerRight: () => (
                    <View style={{marginLeft: 10, flexDirection: 'row'}}>
                        <Button radius={"sm"} type="clear">
                            <Icon name="notifications-none" color="black" />
                        </Button>
                    </View>
                ),
            })}>
            {!isLoggedIn ? (
                <>
                    <RootStack.Screen name="Login" component={Login} />
                    <RootStack.Screen name="Register" component={Register} />
                </>
            ) : (
                <>
                    {isLoading ? (
                        <RootStack.Screen name="Loading" component={Loading} />
                    ) : (
                        userInfo.surveyAnswered == false && (
                            <RootStack.Screen name="Survey" component={Survey} />
                        )
                    )}
                    
                    {/* <RootStack.Screen name="Main" component={Tabs}/> */}    
                    <RootStack.Screen name="EditProfile" component={Chat} />
{/*                     <RootStack.Screen name="WorkoutDetails" component={WorkoutDetails} />
 */}                    {/* <RootStack.Screen name="CardStack" component={CardStack} /> */}
                </>
            )}
        </RootStack.Navigator>
    )
};

export { RootStackScreens };



// Stack 

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
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
