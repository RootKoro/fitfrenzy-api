import React from 'react';
//import * as DraftbitExampleDataApi from '../api/DraftbitExampleDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

import { ImageBackground, StyleSheet as StyleSheets, ScrollView, TouchableOpacity, View, Image, Text, ActivityIndicator, FlatList } from 'react-native'
import Images from '../config/Images';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../themes/ThemeContext';
import { Link } from '@react-navigation/native';

const Home = props => {
  const { navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
        <ImageBackground
          resizeMode={'cover'}
          source={Images.HomeBG}
          style={
            {
              backgroundColor: "#000",
              height: '100%',
              width: '100%',
              flex: 1
            }
            
          }>
          <View style={styles.overlay} />
          <ScrollView
            bounces={true}
            contentContainerStyle={StyleSheet.applyWidth(
              { paddingBottom: 25 },
              dimensions.width
            )}
            showsVerticalScrollIndicator={false}>
            
            {/* Header */}
            <View
              style={StyleSheet.applyWidth(
                {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 16,
                    paddingLeft: 16,
                    paddingRight: 16,
                  },
                  dimensions.width
                )}
            >
              <View>
                <TouchableOpacity
                  onPress={() => {
                    try {
                      navigation.navigate('UserProfileScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Image style={styles.profileImage} source={Images.UserImage} />
                  {/* <Image
                    width={10}
                    source={Images.UserImage}
                    style={StyleSheet.applyWidth(
                      { position: 'absolute' },
                      dimensions.width
                    )}
                  /> */}
                </TouchableOpacity>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <TouchableOpacity
                  onPress={() => {
                    try {
                      navigation.navigate('MessageScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        height: 48,
                        justifyContent: 'center',
                        width: 48,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={'#ffffff'}
                      name={'ios-chatbox-ellipses-outline'}
                      size={24}
                    />
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'orange',
                          borderRadius: 5.5,
                          height: 11,
                          position: 'absolute',
                          right: 9,
                          top: 9,
                          width: 11,
                        },
                        dimensions.width
                      )}
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    try {
                      navigation.navigate('NotificationsScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        height: 48,
                        justifyContent: 'center',
                        width: 48,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={'#fff'}
                      name={'md-notifications-outline'}
                      size={24}
                    />
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'orange',
                          borderRadius: 5.5,
                          height: 11,
                          position: 'absolute',
                          right: 11,
                          top: 10,
                          width: 11,
                        },
                        dimensions.width
                      )}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View
                style={StyleSheet.applyWidth(
                  { marginTop: 31, paddingLeft: 16, paddingRight: 16 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_400Regular',
                      fontSize: 18,
                    },
                    dimensions.width
                  )}
                >
                  {'Hi, ETNA!'}
                </Text>
               
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 30,
                      marginTop: 16,
                    },
                    dimensions.width
                  )}
                >
                  {'Have you \nexercised today?'}
                </Text>
            </View>

            {/* Content */}
            <View
            style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Custom Color_3'],
                  borderRadius: 0,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  flex: 1,
                  marginTop: 25,
                  paddingTop: 20,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 20,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Custom Color_4'],
                      borderRadius: 15,
                      height: 130,
                      justifyContent: 'center',
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingTop: 20,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_2'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 18,
                      },
                      dimensions.width
                    )}
                  >
                    {'Healthy life belongs \nto everyone'}
                  </Text>
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors['Custom Color_5'],
                        borderRadius: 20,
                        height: 32,
                        justifyContent: 'center',
                        marginTop: 20,
                        width: 124,
                      },
                      dimensions.width
                    )}
                  > 
                    <TouchableOpacity>
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Custom Color_2'],
                            fontFamily: 'Inter_400Regular',
                            fontSize: 12,
                          },
                          dimensions.width
                        )}
                      >
                        {'Start Exercising'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Image
                  resizeMode={'cover'}
                  source={
                    Images.PortraitSmilingAfroAmericanSportsManStretchingHisMuscularArmsBeforeWorkoutBySeaUsingMusicAppHisSmartphone1
                  }
                  style={StyleSheet.applyWidth(
                    {
                      bottom: 0,
                      height: 100,
                      position: 'absolute',
                      right: 0,
                      width: 100,
                    },
                    dimensions.width
                  )}
                />
              </View>

              {/* Category */}
              <View
                style={StyleSheet.applyWidth(
                  { marginTop: 20, paddingLeft: 16, paddingRight: 16 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_500Medium',
                      fontSize: 18,
                    },
                    dimensions.width
                  )}
                >
                {'Category'}
                </Text>
                <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'space-evenly' },
                  dimensions.width
                )}
                >
                <TouchableOpacity
                  style={StyleSheet.applyWidth(
                    { marginTop: 16 },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      { borderRadius: 10 },
                      dimensions.width
                    )}
                  >
                    <Image
                      resizeMode={'cover'}
                      source={Images.CategoryHand}
                      style={StyleSheet.applyWidth(
                        { height: 100, width: 74 },
                        dimensions.width
                      )}
                    />
                  </View>

                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderRadius: 15,
                        height: 95,
                        justifyContent: 'center',
                        left: 0,
                        position: 'absolute',
                        top: 0,
                        width: 74,
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Custom Color_2'],
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 15,
                        },
                        dimensions.width
                      )}
                    >
                      {'Hand'}
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={StyleSheet.applyWidth(
                    { marginTop: 16 },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      { borderRadius: 15 },
                      dimensions.width
                    )}
                  >
                    <Image
                      resizeMode={'cover'}
                      source={Images.Rectangle22429}
                      style={StyleSheet.applyWidth(
                        { height: 100, width: 74 },
                        dimensions.width
                      )}
                    />
                  </View>

                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        height: 95,
                        justifyContent: 'center',
                        left: 0,
                        position: 'absolute',
                        top: 0,
                        width: 74,
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Custom Color_2'],
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 15,
                        },
                        dimensions.width
                      )}
                    >
                      {'Legs'}
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={StyleSheet.applyWidth(
                    { marginTop: 16 },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      { borderRadius: 15 },
                      dimensions.width
                    )}
                  >
                    <Image
                      resizeMode={'cover'}
                      source={Images.Rectangle224291}
                      style={StyleSheet.applyWidth(
                        { height: 100, width: 74 },
                        dimensions.width
                      )}
                    />
                  </View>

                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        height: 95,
                        justifyContent: 'center',
                        left: 0,
                        position: 'absolute',
                        top: 0,
                        width: 74,
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Custom Color_2'],
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 15,
                        },
                        dimensions.width
                      )}
                    >
                      {'Jump'}
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={StyleSheet.applyWidth(
                    { marginTop: 16 },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      { borderRadius: 15 },
                      dimensions.width
                    )}
                  >
                    <Image
                      resizeMode={'cover'}
                      source={Images.Rectangle224293}
                      style={StyleSheet.applyWidth(
                        { height: 100, width: 74 },
                        dimensions.width
                      )}
                    />
                  </View>

                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        height: 95,
                        justifyContent: 'center',
                        left: 0,
                        position: 'absolute',
                        top: 0,
                        width: 74,
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Custom Color_2'],
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 15,
                        },
                        dimensions.width
                      )}
                    >
                      {'Yoga'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              </View>
              {/* Popular Workout */}

              <View
                style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
              >
                {/* Header */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingLeft: 16,
                      paddingRight: 24,
                    },
                    dimensions.width
                  )}
                >
                  {/* Section Heading */}
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_2'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 18,
                      },
                      dimensions.width
                    )}
                  >
                    {'Popular Workout'}
                  </Text>
                  {/* See all */}
                  <Link
                    onPress={() => {
                      try {
                        navigation.navigate('WorkoutListAllScreen');
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    to={{ screen: 'WorkoutDetails' }}
                    style={StyleSheet.applyWidth(
                      { color: theme.colors['Custom Color_2'] },
                      dimensions.width
                    )}
                  >
                    See all
                  </Link>  
                </View>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      marginTop: 8,
                      overflow: 'hidden',
                    },
                    dimensions.width
                  )}
                >
                  <ScrollView
                    bounces={true}
                    contentContainerStyle={StyleSheet.applyWidth(
                      { paddingBottom: 20, paddingLeft: 16, paddingRight: 16 },
                      dimensions.width
                    )}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                  >
                   {/*  <DraftbitExampleDataApi.FetchUsersGET limit={4}>
                      {({ loading, error, data, refetchUsers }) => {
                        const fetchData = data?.json;
                        if (loading) {
                          return <ActivityIndicator />;
                        }

                        if (error || data?.status < 200 || data?.status >= 300) {
                          return <ActivityIndicator />;
                        }

                        return (
                          <FlatList
                            contentContainerStyle={StyleSheet.applyWidth(
                              { flex: 1, flexDirection: 'row' },
                              dimensions.width
                            )}
                            data={fetchData}
                            horizontal={true}
                            keyExtractor={listData =>
                              listData?.id ||
                              listData?.uuid ||
                              JSON.stringify(listData)
                            }
                            listKey={'oTAGkalu'}
                            numColumns={1}
                            renderItem={({ item }) => {
                              const listData = item;
                              return (
                                <TouchableOpacity
                                  onPress={() => {
                                    try {
                                      navigation.navigate('WorkoutDetailsScreen');
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  style={StyleSheet.applyWidth(
                                    { marginRight: 30, marginTop: 16 },
                                    dimensions.width
                                  )}
                                >
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderRadius: 8,
                                        height: 181,
                                        width: 172,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <View
                                      style={StyleSheet.applyWidth(
                                        { borderRadius: 8, overflow: 'hidden' },
                                        dimensions.width
                                      )}
                                    >
                                      <ImageBackground
                                        resizeMode={'cover'}
                                        source={Images.CategoryHand}
                                        style={StyleSheet.applyWidth(
                                          { height: 128, width: 172 },
                                          dimensions.width
                                        )}
                                      >
                                        <FlatList
                                          contentContainerStyle={StyleSheet.applyWidth(
                                            { flexDirection: 'row' },
                                            dimensions.width
                                          )}
                                          data={Constants['Tags']}
                                          horizontal={false}
                                          inverted={false}
                                          keyExtractor={listData =>
                                            listData?.id ||
                                            listData?.uuid ||
                                            JSON.stringify(listData)
                                          }
                                          listKey={JSON.stringify(
                                            Constants['Tags']
                                          )}
                                          numColumns={1}
                                          renderItem={({ item }) => {
                                            const listData = item;
                                            return (
                                              <View
                                                style={StyleSheet.applyWidth(
                                                  {
                                                    backgroundColor:
                                                      theme.colors[
                                                        'text placeholder'
                                                      ],
                                                    borderRadius: 4,
                                                    marginBottom: 5,
                                                    marginLeft: 10,
                                                    marginTop: 10,
                                                    paddingBottom: 5,
                                                    paddingLeft: 8,
                                                    paddingRight: 8,
                                                    paddingTop: 5,
                                                  },
                                                  dimensions.width
                                                )}
                                              >
                                                <Text
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      color:
                                                        theme.colors[
                                                          'Custom #ffffff'
                                                        ],
                                                      fontFamily:
                                                        'Inter_400Regular',
                                                      fontSize: 12,
                                                    },
                                                    dimensions.width
                                                  )}
                                                >
                                                  {listData}
                                                </Text>
                                              </View>
                                            );
                                          }}
                                        />
                                      </ImageBackground>
                                    </View>

                                    <Text
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: theme.colors['Custom Color_2'],
                                          fontFamily: 'Inter_600SemiBold',
                                          fontSize: 15,
                                          marginTop: 10,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'Up and Down Stairs'}
                                    </Text>

                                    <Text
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: theme.colors['Custom Color_2'],
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: 12,
                                          marginTop: 8,
                                          opacity: 0.5,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'Train your thighs and legs'}
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                              );
                            }}
                          />
                        );
                      }}
                    </DraftbitExampleDataApi.FetchUsersGET> */}
                  </ScrollView>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
        
    </View>
  )
}


const styles = StyleSheets.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:"center",
    alignItems:"center"
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  overlay: {
    ...StyleSheets.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
  }
})

export default Home;
