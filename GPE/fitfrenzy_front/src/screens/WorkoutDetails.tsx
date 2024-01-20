
import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

import { ImageBackground, StyleSheet as StyleSheets, ScrollView, TouchableOpacity, View, Image, Text, ActivityIndicator, FlatList } from 'react-native'
import Images from '../config/Images';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../themes/ThemeContext';
import { Link } from '@react-navigation/native';

const WorkoutDetails = (props) => {
    const { navigation } = props;
    const dimensions = useWindowDimensions();
    const Constants = GlobalVariables.useValues();
    const Variables = Constants;
    const { theme } = useTheme();

    return (
        <View 
            style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color'],
              justifyContent: 'space-between',
              flex: 1
            },
            dimensions.width
          )}>
            <Text>dfdsfd</Text>
            <ScrollView
                bounces={true}
                contentContainerStyle={StyleSheet.applyWidth(
                {
                    left: 0,
                    paddingBottom: 30,
                    //position: 'absolute',
                    right: 0,
                    top: 0,
                
                },
                dimensions.width
                )}
                //showsVerticalScrollIndicator={false}
            >
                
                <Image
                resizeMode={'cover'}
                source={Images.Rectangle22440}
                style={StyleSheet.applyWidth(
                    { height: 260, width: '100%' },
                    dimensions.width
                )}
                />
                {/* Details */}
                <View
                style={StyleSheet.applyWidth(
                    { marginTop: 30, paddingLeft: 20, paddingRight: 20, backgroundColor: '' },
                    dimensions.width
                )}
                >
                    <Text
                        style={StyleSheet.applyWidth(
                        {
                            color: theme.colors['Custom Color_2'],
                            fontFamily: 'Inter_500Medium',
                            fontSize: 22,
                        },
                        dimensions.width
                        )}
                    >
                        {'Up and Down Stairs'}
                    </Text>

                <View
                    style={StyleSheet.applyWidth(
                    {
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingRight: 10,
                    },
                    dimensions.width
                    )}
                >
                    {/* Left View */}
                    <View
                    style={StyleSheet.applyWidth(
                        { alignItems: 'center', flexDirection: 'row', marginTop: 22 },
                        dimensions.width
                    )}
                    >
                    <View
                        style={StyleSheet.applyWidth(
                        {
                            alignItems: 'center',
                            backgroundColor: theme.colors['Custom Color_7'],
                            borderRadius: 8,
                            height: 40,
                            justifyContent: 'center',
                            width: 40,
                        },
                        dimensions.width
                        )}
                    >
                        <Image
                        resizeMode={'cover'}
                        source={Images.BxStopwatch1}
                        style={StyleSheet.applyWidth(
                            { height: 24, width: 24 },
                            dimensions.width
                        )}
                        />
                    </View>

                    <Text
                        style={StyleSheet.applyWidth(
                        {
                            color: theme.colors['Custom Color_2'],
                            fontFamily: 'Inter_400Regular',
                            marginLeft: 10,
                            opacity: 0.5,
                        },
                        dimensions.width
                        )}
                    >
                        {'59  minutes'}
                    </Text>
                    </View>
                    {/* Right View */}
                    <View
                    style={StyleSheet.applyWidth(
                        { alignItems: 'center', flexDirection: 'row', marginTop: 22 },
                        dimensions.width
                    )}
                    >
                    <View
                        style={StyleSheet.applyWidth(
                        {
                            alignItems: 'center',
                            backgroundColor: theme.colors['Custom Color_7'],
                            borderRadius: 8,
                            height: 40,
                            justifyContent: 'center',
                            width: 40,
                        },
                        dimensions.width
                        )}
                    >
                        <Image
                        resizeMode={'cover'}
                        source={Images.BxVideoRecording1}
                        style={StyleSheet.applyWidth(
                            { height: 24, width: 24 },
                            dimensions.width
                        )}
                        />
                    </View>

                    <Text
                        style={StyleSheet.applyWidth(
                        {
                            color: theme.colors['Custom Color_2'],
                            fontFamily: 'Inter_400Regular',
                            marginLeft: 10,
                            opacity: 0.5,
                        },
                        dimensions.width
                        )}
                    >
                        {'9 Step Videos'}
                    </Text>
                    </View>
                </View>
            </View>
        {/* Users Joined */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 30, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* User count */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                marginBottom: 16,
              },
              dimensions.width
            )}
          >
            {'120+ People have joined'}
          </Text>

          {/* <DraftbitExampleDataApi.FetchUsersGET limit={7}>
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
                    { flexDirection: 'row' },
                    dimensions.width
                  )}
                  data={fetchData}
                  horizontal={true}
                  inverted={false}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  listKey={'zoNhMa5S'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <CircleImage
                        size={48}
                        source={{ uri: `${listData?.avatar}` }}
                        style={StyleSheet.applyWidth(
                          { marginRight: 8 },
                          dimensions.width
                        )}
                      />
                    );
                  }}
                />
              );
            }}
          </DraftbitExampleDataApi.FetchUsersGET> */}
        </View>
        {/* Description */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 30, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* Heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
              },
              dimensions.width
            )}
          >
            {'Description'}
          </Text>
          {/* Details */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_300Light',
                lineHeight: 20,
                marginTop: 8,
                opacity: 0.5,
              },
              dimensions.width
            )}
          >
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
            }
          </Text>
        </View>
        {/* Workout List */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 30 }, dimensions.width)}
        >
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
              {'List Videos'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                justifyContent: 'space-evenly',
                marginTop: 8,
                overflow: 'hidden',
                paddingLeft: 20,
                paddingRight: 20,
              },
              dimensions.width
            )}
          >
          {/*   <DraftbitExampleDataApi.FetchUsersGET limit={2}>
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
                      { flex: 1 },
                      dimensions.width
                    )}
                    data={fetchData}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    listKey={'bshFTDkd'}
                    numColumns={1}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            try {
                              navigation.navigate('PlayWorkoutPlaylistScreen');
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={StyleSheet.applyWidth(
                            { marginTop: 16 },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderRadius: 8,
                                flexDirection: 'row',
                                height: 80,
                                justifyContent: 'space-between',
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'flex-start',
                                  flex: 1,
                                  flexDirection: 'row',
                                },
                                dimensions.width
                              )}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  { borderRadius: 10, overflow: 'hidden' },
                                  dimensions.width
                                )}
                              >
                                <Image
                                  resizeMode={'cover'}
                                  source={Images.CategoryHand}
                                  style={StyleSheet.applyWidth(
                                    { height: 80, width: 70 },
                                    dimensions.width
                                  )}
                                />
                              </View>

                              <View
                                style={StyleSheet.applyWidth(
                                  { flex: 1, marginLeft: 16, marginRight: 16 },
                                  dimensions.width
                                )}
                              >
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
                                  {'Doing leg stretch'}
                                </Text>

                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Custom Color_2'],
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 12,
                                      lineHeight: 17,
                                      marginTop: 8,
                                      opacity: 0.5,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Finish this exercise in 15 minutes'}
                                </Text>
                              </View>
                            </View>

                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  height: 48,
                                  justifyContent: 'center',
                                  width: 48,
                                },
                                dimensions.width
                              )}
                            >
                              <Touchable>
                                <Image
                                  resizeMode={'cover'}
                                  source={Images.Progress}
                                  style={StyleSheet.applyWidth(
                                    { height: 36, width: 36 },
                                    dimensions.width
                                  )}
                                />
                              </Touchable>
                            </View>
                          </View>
                        </Touchable>
                      );
                    }}
                  />
                );
              }}
            </DraftbitExampleDataApi.FetchUsersGET> */}
          </View>
        </View>
            </ScrollView>
            {/* Header */}
            <View
                style={StyleSheet.applyWidth(
                {
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: 48,
                    justifyContent: 'center',
                    left: 0,
                    marginTop: 12,
                    paddingLeft: 16,
                    paddingRight: 16,
                    position: 'absolute',
                    right: 0,
                    top: 0,
                },
                dimensions.width
                )}
            >
                {/* Back Click */}
                <View
                style={StyleSheet.applyWidth(
                    {
                    alignItems: 'center',
                    height: 48,
                    justifyContent: 'center',
                    left: 16,
                    position: 'absolute',
                    top: 0,
                    width: 48,
                    },
                    dimensions.width
                )}
                >
                <TouchableOpacity
                    onPress={() => {
                    try {
                        navigation.goBack();
                    } catch (err) {
                        console.error(err);
                    }
                    }}
                >
                    {/* <Circle bgColor={theme.colors['Custom Color']} size={50}>
                    <Icon
                        color={theme.colors['Custom Color_2']}
                        name={'Ionicons/arrow-back-sharp'}
                        size={24}
                    />
                    </Circle> */}
                </TouchableOpacity>
                </View>
                {/* Screen Heading */}
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
                {'Workout Detail'}
                </Text>
            </View>
        </View>
    )

}


const styles = StyleSheets.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent:"center",
      alignItems:"center",
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
  
  export default WorkoutDetails;