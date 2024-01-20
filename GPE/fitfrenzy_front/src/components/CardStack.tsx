import { View, StyleSheet, Text, Animated, Platform } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import * as React from 'react';
import { useVideo } from '../hooks/useVideo';
import { useRef, useState } from 'react';
import { Button } from '@rneui/base';

const data = [
    {
        question: "1.Quel est ton niveau de condition physique ?",
        options: ["Sédentaire", "Pratique occasionnelle", "Pratique régulière"]
    },
    {
        question: "2.Quel type de sport as-tu déjà pratiqué et aimé ? (Choix multiples)",
        options: ["Sport athlétique","Sport de combat","Sport de raquettes" ,"Sport de jeu"],
    },
    {
        question: "3.Comment aimes-tu pratiquer un sport ?",
        options: ["En individuel", "En équipe"]
    },
    {
        question: "4.Comment aimes-tu pratiquer un sport ?",
        options: ["En individuel", "En équipe"]
    },
    {
        question: "5.Comment aimes-tu pratiquer un sport ?",
        options: ["En individuel", "En équipe"]
    },
    {
        question: "6.Comment aimes-tu pratiquer un sport ?",
        options: ["En individuel", "En équipe"]
    }
]

export interface CardStackProps {
    children: string | JSX.Element | JSX.Element[]
}

export const CardStack = (props: CardStackProps) =>{
    const { children } = props
    const [cards, setCards] = useState(data);
    const [currentCard, setCurrentCard] = useState<number>(0)
    const [activeCards, setActiveCards] = useState<number[]>([0,1,2]);

    const animation = useRef(new Animated.ValueXY()).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(0.9)).current;

    const transitionNext = function () {
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }),
          Animated.spring(scale, {
            toValue: 1,
            friction: 4,
            useNativeDriver: false,
          }),
        ]).start(() => {
          /* setData((data) => {
            return data.slice(1)
          }); */
        });
     };
     const translateX = useRef(new Animated.Value(0)).current;

    const handleNext = () => {
        //setCurrentCard(prev => prev + 1)
        setActiveCards((prev) => prev.map((value) => value + 1))
        //setCards(data.slice(currentCard + 1, currentCard + 1 + activeCards.length))
        if (currentCard < data.length - 1) {
            Animated.timing(opacity, {
                toValue: 1,
                duration: 10,
                useNativeDriver: false
            })/* .start(() => {
                opacity.setValue(1)
            }); */

            Animated.timing(translateX, {
              toValue: -400, // Assuming each card is 100 units wide
              duration: 300,
              useNativeDriver: false,
            }).start(() => {
              setCurrentCard(currentCard + 1);
              translateX.setValue(0);

              setCards((prevCards) => {
                const updatedCards = [...prevCards];
                console.log("up", updatedCards.length);
                const removedCard = updatedCards.splice(0, 1)[0];
                
                console.log("removed", removedCard)
                //updatedCards.slice(currentCard, prevCards.length);
                console.log("up", updatedCards.length);
                return updatedCards;
              });
            });
            
        }
    }
    
    const handleBack = () => {
        setCurrentCard(prev => prev - 1)
        setActiveCards((prev) => prev.map((value) => value - 1))
        setCards(data.slice(currentCard - 1, currentCard - 1 + activeCards.length))
    }

    return (
        
            <View style={styles.cardContainer}>
                {cards.reverse().map((item, index) => (
                    <Animated.View 
                        key={index}
                        /* scrollEventThrottle={16}
                        onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: xOffset } } }],
                        { useNativeDriver: true }
                        )}
                        horizontal
                        pagingEnabled */
                        style={[
                            styles.cardd,
                            {
                                bottom: (cards.length - index) * 10 ,
                                zIndex: 4 - index,
                                opacity:  index < 2 ? 1 :  1 - index * 0.20,
                                
                                transform: [ { scaleX: 1 - index / 10} , { translateX: index == 0 ? translateX : 0 } ]
                            }
                        ]}>
                        {children}
                    </Animated.View>
                ))}
            </View>
            
       
    )
}

const styles = StyleSheet.create({
  
  cardContainer: {
    position: 'relative',
    width: '100%',
    flex:  1,
    /* borderWidth: 3,
    borderColor: 'red', */
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    //position: 'absolute',
    //top: 100,
    padding: 20,
    boxShadow: '0 0.2rem 0 rgba(black, 0.2)',
    minHeight: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: '100%',
   
    position: 'absolute',
    transformOrigin: 'center top'
  },
  cardd: {
    flex: 1,
   /*  borderWidth: 3,
    borderColor: 'green', */
    width: '100%',
    height: 500,
    padding: 25,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    boxShadow: '0 0.2rem 0 rgba(black, 0.2)',
    position: 'absolute',
    backgroundColor: 'white',
    ...Platform.select({
        android: {
          elevation: 1,
        },
        ios: {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3,
        },
        web: {
          boxShadow: '0 3px 5px rgba(0,0,0,0.10), 1px 2px 5px rgba(0,0,0,0.10)',
        },
      }),
  },
  btn: {
    backgroundColor: 'green',
    margin: 10,
  }


});