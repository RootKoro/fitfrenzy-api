import React, { useCallback, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import the back icon from Expo Icons
import { BottomSheet, Button, Header } from '@rneui/themed';
import {LinearGradient} from 'expo-linear-gradient';
import { rgba } from 'polished'
import { ListItem } from '@rneui/themed';
import { Separator } from '../components/Separator';
import FastImage from 'react-native-fast-image';
import { Image } from '@rneui/themed';
import { Video, ResizeMode } from 'expo-av';
import { useVideo } from '../hooks/useVideo';


export const Sport = () => {
  const screenHeight = Dimensions.get('window').height
  const [scrollY] = useState(new Animated.Value(0))
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(true)
  const [requirementsExpanded, setRequirementsExpanded] = useState(false)
  
  const { ref, status, onPlaybackStatusUpdate, onTogglePlaying } = useVideo()
  
  const [isVisible, setIsVisible] = useState(false);
  const closeBottomSheet = useCallback(() => {
    setIsVisible(false)
  }, []);

  const toggleHeaderExpansion = () => {
    setIsHeaderExpanded(!isHeaderExpanded);
  };

  const contentOpacity = scrollY.interpolate({
    inputRange: [0, screenHeight * 0.35],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];


  return (
    <View style={styles.container}>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content" // or directly
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Header Title', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      {/* Don't commit this! */}
      {/* <View> 
        <Image
        source={require("../../assets/images/bg2.jpeg")}
        style={{ height: 100, width: '100%', resizeMode: 'cover' }}
        />
        <Animated.View style={[styles.fadeInView, { opacity: contentOpacity }]}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>LEVEL 1</Text>
            <View style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20
              }
            ]}>
                {isHeaderExpanded && <Text style={[styles.headerDescription]}>6 Exercises</Text>}
                <Text style={[styles.headerDescription]}>25 min</Text>
            </View>
            <LinearGradient
              colors={[rgba('white', 0), 'white']}
            />
          </View>
        </Animated.View>
      </View> */}

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
        scrollEventThrottle={16}
      >
        <View>
          <Image
            source={require("../../assets/images/bg2.jpeg")}
            style={{ 
              height: screenHeight * 0.35, 
              width: '100%', 
              resizeMode: 'cover'
            }}
          />
        </View>
        <View style={[{flexDirection: 'row', justifyContent: 'space-between'}, styles.section]} >
          <View key="1" style={{flexDirection: 'column', gap: 3}}>
            <Text style={styles.placeholderText}>Level</Text>
            <Text style={styles.boldText}>Level 1</Text>
          </View>
          <View key="2" style={{flexDirection: 'column', gap: 3}}>
            <Text style={styles.placeholderText}>Duration</Text>
            <Text style={styles.boldText}>25 min</Text>
          </View>
          <View key="3" style={{flexDirection: 'column', gap: 3}}>
            <Text style={styles.placeholderText}>Calories</Text>
            <Text style={styles.boldText}>465 Cal</Text>
          </View>
        </View>

        <View style={[styles.section]}>
          <ListItem.Accordion
            content={
              <>
                <ListItem.Content style={{paddingLeft: -13}}>
                    <ListItem.Title style={{paddingLeft: 0}}>Requirements</ListItem.Title>
                </ListItem.Content>
              </>
            }
            style={{ marginLeft: -14}}
            isExpanded={requirementsExpanded}
            onPress={() => setRequirementsExpanded(!requirementsExpanded)}
          >
            <Text>
              D’autre part, le sport permet d’avoir un bon moral. Lorsque quelqu’un fait du sport, il va oublier ses problèmes, comme par exemple le stress, l’angoisse, la tristesse… Donc, il va avoir un bon moral. C’est le deuxième avantage du sport.
              Par ailleurs, le sport assure beaucoup d’autres bienfaits tels que : moins de maladies, un plus grand dynamisme, un esprit sain dans un corps sain, un plus grande sympathie, un sommeil reposant, moins …
            </Text>
          </ListItem.Accordion>
        </View>

        <View style={styles.cardList}>
          {[...Array(10).keys()].map((ele, index) => (
            <TouchableOpacity style={[{width: '100%'}]} activeOpacity={1} onPress={() => setIsVisible(true)} key={index}>
              <View style={[{alignItems: "center"}]}>
                <View  style={styles.card} >
                  <Image 
                      style={{ 
                        width: 150,
                        height: 120,
                        flex: 1
                      }}
                      source={require("../../assets/images/bodyweightsquat.jpg")}
                  />  
                  <View style={{gap: 15, marginTop: 40}}>
                    <Text style={styles.boldText}>Body Weight Squat</Text>
                    <Text style={styles.placeholderText}>00:30</Text>
                  </View>
                </View>
                <Separator width={'90%'}/>
              </View>
            </TouchableOpacity>
          ))}
          

        </View>         
      </ScrollView>
      <BottomSheet 
          containerStyle={styles.bottomSheetContainerStyle} 
          isVisible={isVisible}
                      
        >
          <ScrollView
            style={[{top: 200}]}
            contentContainerStyle={styles.contentContainer}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
            scrollEventThrottle={16}
          >
            <Video
              ref={ref}
              style={styles.video}
              source={require("../../assets/images/bodyweightsquat.mp4")}
              resizeMode={ResizeMode.COVER}
              isLooping
              onPlaybackStatusUpdate={onPlaybackStatusUpdate}
              shouldPlay={ true }
            />       
            {list.map((l, i) => (
                <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                <ListItem.Content>
                    <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                </ListItem.Content>
                </ListItem>
            ))}
          </ScrollView>
          <View style={styles.bottomSheetCloseSticky}>
            <Button onPress={closeBottomSheet}>Close</Button>
          </View>
        </BottomSheet> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerImage: {
    width: '100%'
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  section: {
    //borderWidth: 1,
    //borderColor: 'red',
    //marginBottom: 15,
    padding: 20
  },
  headerContent: {
    position: 'absolute',
    bottom: 0,
    padding: 20,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: 'black', // Shadow color
    shadowOffset: { width: 0, height: -20 }, // Shadow offset
    shadowOpacity: .5, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5,
    width: "100%",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  headerDescription: {
    fontSize: 16,
    marginTop: 5,
    color: 'white',
  },
  contentContainer: {
  
  },
  cardList: {
    marginTop: 10,
    alignItems: 'center',
    /* borderWidth: 1,
    borderColor: 'green', */
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    padding: 0,
    /* borderWidth: 1,
    borderColor: 'brown', */
    //borderRadius: 8,
    marginBottom: 10,
    width: '100%'
  },
  fadeInView: {
    flex: 1,
    backgroundColor: 'red',
  },
  placeholderText: {
    fontSize: 13,
    color: 'gray'
  },
  boldText: {
    fontSize: 18,
    fontWeight: '700'
  },
  text: {
    fontSize: 18
  },
  border: {
    borderWidth: 1,
    borderColor: 'red',
  },
  /* imageItem: { // for image of react-native-element
    aspectRatio: 1,
    width: 150,
    height: 120,
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
  }, */
  video: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
    height: 300
  },
  bottomSheetContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
    borderWidth: 10,
    borderColor: 'green'
  },
  bottomSheetCloseSticky: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 100
  }
});
