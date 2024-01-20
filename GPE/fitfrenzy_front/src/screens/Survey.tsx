import React, { useEffect, useRef, useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated, ScrollView, StyleSheet, FlatList, Platform, Dimensions } from 'react-native'
import { COLORS, SIZES } from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CardStack } from '../components/CardStack';
import { CheckBox } from '@rneui/base';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useScrollDetection }  from '../hooks/useScrollDetection';

const data = [
    {
        question: "Quel est ton niveau de condition physique ?",
        //options: ["Sédentaire", "Pratique occasionnelle", "Pratique régulière"],
        options: [
            { text: "Sédentaire", icon: "signal-cellular-1"},
            { text: "Pratique occasionnelle", icon: "signal-cellular-2" },
            { text: "Pratique régulière", icon: "signal-cellular-3" }
        ],
        type: 'singleselect',
    },
     {
        question: "Quel type de sport as-tu déjà pratiqué et aimé ?",
        options: [
            { text: "Sport athlétique", icon: "shoe-print"},
            { text: "Sport de combat", icon: "boxing-glove" },
            { text: "Sport de raquettes", icon: "table-tennis" },
            { text: "Sport de jeu", icon: "gamepad-variant" },
        ],
        type: "multiselect"
    },
    {
        question: "Comment aimes-tu pratiquer un sport ?",
        options: [
            {
                text: "En individuel",
                icon: "bicycle", // Add your appropriate icon name
              },
              {
                text: "En équipe",
                icon: "soccer", // Add your appropriate icon name
              },
        ],
        type: "singleselect"
    },
    {        
        question: "Quels types d'efforts physiques aimes-tu ?",
        options: [
            { text: "Cardio", icon: "cards-heart" },
            { text: "Endurance", icon: "timer" },
            { text: "Vitesse", icon: "flash" },
            { text: "Souplesse", icon: "arrow-decision" },
            { text: "Précision", icon: "bullseye-arrow" },
            { text: "Agilité", icon: "arrow-left-right-bold" },
            { text: "Force", icon: "dumbbell" },
        ],
        type: "multiselect",
    },
    {
        question: "Quels sont tes objectifs dans la pratique d'un sport ?",
        options: [
            { text: "Te divertir", icon: "gamepad-variant" },
            { text: "Te dépasser", icon: "trending-up" }
        ]
    },
    {
    question: "Quelle est ta disponibilité hebdomadaire ?",
    options: [
        { text: "Lundi", icon: "calendar-today" },
        { text: "Mardi", icon: "calendar-today" },
        { text: "Mercredi", icon: "calendar-today" },
        { text: "Jeudi", icon: "calendar-today" },
        { text: "Vendredi", icon: "calendar-today" },
        { text: "Samedi", icon: "calendar-today" },
        { text: "Dimanche", icon: "calendar-today" },
    ],
    type: "multiselect"
    },
    {
        question: "A quel moment de la journée préfères-tu t’entraîner ?",
        options: [
            
            { text: "Le matin", icon: "weather-sunset" }, 
            { text: "L’après-midi", icon: "white-balance-sunny" }, 
            { text: "Le soir", icon: "moon-waning-crescent" }
        ]
    },
    {
        question: "Combien de temps peux-tu consacrer à chaque séance d’entraînement ?",
        options: [
            { text: "30 min", icon: "timer" }, 
            { text: "1h", icon: "timer" }, 
            { text: "1h30", icon: "timer" }, 
            { text: "2h", icon: "timer" },
        ]
    },
]

const Survey = () => {

    const allQuestions = data;
    const [answers, setAnswers] = useState({})
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState<string[]>([]);
    const [correctOption, setCorrectOption] = useState<string | null>(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)
    
    const currentQuestion = allQuestions[currentQuestionIndex];
    
    const [selectedIndex, setIndex] = React.useState<number | null>(null);
    const [selectedIndexes, setIndexes] = React.useState<number[]>([]);

   
    const [isContentVisible, setIsContentVisible] = useState(true);
    
    const { scrollViewRef, onLayout, onContentSizeChange, isScrollEnabled } = useScrollDetection({});
    const legs = isScrollEnabled;


  /*   const handleLayout = (event: any) => {
        const { height } = event.nativeEvent.layout;
        checkExceedViewport(height);
    }; */
    //console.log("visible : ",isContentVisible);
    const checkExceedViewport = (height: number) => {
        // You can adjust the threshold value (e.g., 20) based on your requirement
        const threshold = 20;
        const windowHeight = Dimensions.get('window').height;
        const exceedViewport = height > windowHeight - threshold;
        console.log("windowHeight : ",windowHeight)
        console.log("height : ",height)
        console.log("exceedViewport : ",exceedViewport)
        setIsContentVisible(!exceedViewport);
      };

    const validateAnswer = (selectedOption: string, index: number, type: string = "single") => {
        //console.log(selectedOption)
        
        
        if(type === "single") {
            console.info("Single option selected");
            setCurrentOptionSelected([selectedOption])
            setShowNextButton(true)
            setIndex(index)
            setAnswers(prevAnwsers => ({...prevAnwsers, [currentQuestionIndex] : selectedOption }))
        } else {
            console.info("Multiple options selected")
            if(selectedIndexes?.includes(index)) {
                const updatedIndexes = selectedIndexes?.filter(i => i !== index)
                setIndexes(updatedIndexes)
            }else {
                setIndexes(prev => [...prev, index])
            }
            if(currentOptionSelected.includes(selectedOption)) {
                //console.log("hhhh");
                const updatedCurrentOption = currentOptionSelected?.filter(i => i!== selectedOption)
                setCurrentOptionSelected(updatedCurrentOption);
                setShowNextButton(!!updatedCurrentOption.length)
                setAnswers(prevAnswers => ({...prevAnswers, [currentQuestionIndex]: updatedCurrentOption}))
            }else {
                //console.log("jjjj");
                setCurrentOptionSelected([...currentOptionSelected, selectedOption])
                setShowNextButton(true)
                setAnswers(prevAnswers => ({...prevAnswers, [currentQuestionIndex]: [...currentOptionSelected, selectedOption]}))
            }
            
        }
    }


    
    console.log(isScrollEnabled)
    
    /* console.log("currentOptionSelected", currentOptionSelected)
    console.log("shownexButton", showNextButton);
    console.log(answers); */
    const handleNext = () => {
        if(currentQuestionIndex == allQuestions.length-1){
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected([]);
            setIndexes([])
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
            setIndex(null);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected([]);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const renderQuestion = () => {
        return (
            <View style={[  {
                marginTop: 40,
                marginBottom: 30,
                paddingVertical: 20,
                //borderWidth: 1,        
                borderColor: '#E1E1E1',
                backgroundColor: '#fff',
                paddingHorizontal: 10,
            }]}>
                {/* Question Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start'
                }}>
                    <Text style={{color: COLORS.black, fontSize: 20, opacity: 0.6, marginRight: 2}}>Question {currentQuestionIndex+1}</Text>
                    <Text style={{color: COLORS.black, fontSize: 18, opacity: 0.6}}>/ {allQuestions.length}</Text>
                </View>

                {/* Question */}
                <Text style={{
                    color: COLORS.black,
                    fontSize: Platform.OS === 'ios'? 38 : 32,
                    marginTop: 10,
                    textAlign: 'left',
                    fontWeight: '500'
                }}>{allQuestions[currentQuestionIndex]?.question}</Text>
               {/*  <View style={{marginTop: 20}}>
                    <Image 
                    source={require('../../assets/images/survey/listsports.png')}
                    resizeMethod='scale' 
                    style={{ 
                        height: 200, 
                        width: '100%',
                        borderRadius: 20
                    }} />
                </View> */}
            </View>
        )
    }

    
    const renderOptions = () => {
        return (
            <ScrollView
                ref={scrollViewRef}
                style={styles.container} 
                onLayout={onLayout} 
                onContentSizeChange={onContentSizeChange}
            >
            <View 
            style={{ 
                marginVertical: 0,
                width: '100%',
                display: 'flex',
                flex: 1,
                flexDirection: currentQuestion?.options.length <= 4 ? 'column' : 'row',
                flexWrap: currentQuestion?.options.length <= 4 ? 'nowrap' : 'wrap',
                alignItems: currentQuestion?.options.length <= 4 ? 'stretch' : 'center',
                justifyContent: currentQuestion?.options.length <= 4 ? 'center' : 'flex-start',
            }}
            >
                
                {
                    currentQuestion?.options.map(({text: option, icon}, index) => ( 
                        <TouchableOpacity 
                            onPress={()=> validateAnswer(option, index, currentQuestion?.type == "multiselect" ? "multiselect" : "single")}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={[{
                                borderWidth: currentOptionSelected.includes(option) ? 2 : 1,
                                
                                borderColor: currentOptionSelected.includes(option) ? COLORS.selected : '#E1E1E1',
                                backgroundColor: currentOptionSelected.includes(option) ? COLORS.white : COLORS.white,
                                height: 66,
                                marginRight: currentQuestion?.options.length <= 4 ? 0 : 4,
                                //width: option.length > 4 ? 30 : 'auto',
                                borderRadius: 7,
                                flexDirection: 'row',
                                alignItems: 'center', 
                                justifyContent: 'space-between',
                                paddingHorizontal: 0,
                                paddingRight: currentQuestion?.options.length <= 4 ? 0 : 0,
                                marginVertical: currentQuestion?.options.length <= 4 ? 10 : 10
                            }]}
                        >
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center', 
                                justifyContent: 'space-between',
                                paddingLeft: 18,
                                
                            }}>
                                <MaterialCommunityIcons
                                 name={icon} 
                                 color={currentOptionSelected.includes(option) ? COLORS.selected : COLORS.black}
                                 size={currentQuestion?.options.length <= 4 ? 24 : 22} 
                                 style={{marginRight: 10}} />
                                {/* <Icon 
                                    name={"signal-cellular-alt-"} 
                                    color="#616161" 
                                    size={22} 
                                    style={{marginRight: 12}}
                                /> */}
                                <Text style={{
                                    fontSize: currentQuestion?.options.length <= 4 ? 20 : 19, 
                                    color: currentOptionSelected.includes(option) ? COLORS.selected : COLORS.black
                                    }}>{option}</Text>
                            </View>
                            <View>
                                {currentQuestion?.type == "multiselect" ? 
                                    <CheckBox 
                                        checked={selectedIndexes?.includes(index)}
                                        onPress={() => validateAnswer(option, index, "multiselect")}
                                        checkedColor={COLORS.selected}
                                        iconType="material-community"
                                        checkedIcon="checkbox-marked"
                                        uncheckedIcon="checkbox-blank-outline"
                                        containerStyle={ currentQuestion.options.length <= 4 ? {} : {margin: 0, padding: 0}}

                                    /> :
                                    <CheckBox
                                        checked={selectedIndex === index}
                                        onPress={() => validateAnswer(option, index)}
                                        iconType="material-community"
                                        checkedIcon="radiobox-marked"
                                        uncheckedIcon="radiobox-blank"
                                        checkedColor={COLORS.selected}
                                        
                                        containerStyle={{
                                            backgroundColor : 'transparent',
                                        }}
                                    />
                                }
                            </View>
                            {/* Show Check Or Cross Icon based on correct answer*/}
                            {/*
                                option==correctOption ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        backgroundColor: COLORS.success,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ): option == currentOptionSelected ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        backgroundColor: COLORS.error,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="close" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : null
                            */}

                        </TouchableOpacity>
                    
                    ))
                }
            </View>
            </ScrollView>
        )
    }

    const renderNextButton = () => {
        if(showNextButton){
            return (

                    <TouchableOpacity
                    onPress={handleNext}
                    style={[
                        styles.nextButton,
                    ]}>
                        <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>Next</Text>
                    </TouchableOpacity>
            )
        }else{
            return null
        }

        
    }


    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })

    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 7,
                borderRadius: 5,
                backgroundColor: '#E1E1E1',

            }}>
                <Animated.View style={[{
                    height: 7,
                    borderRadius: 5,
                    backgroundColor: 'orange'
                },{
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
        )
    }


    return (
       <SafeAreaView style={{
           flex: 1
       }}>
           <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
           <View style={{
               flex: 1,
               paddingVertical: 40,
               paddingHorizontal: 16,
               backgroundColor: COLORS.white,
               position:'relative'
           }}>

               {/* ProgressBar */}
               { renderProgressBar() }

                
                {/* Question */}
                {renderQuestion()}

                {/* Options */}
                {renderOptions()}
                
              

               {/* Next Button */}
               {renderNextButton()}

               
               <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showScoreModal}
               >
                   <View style={{
                       flex: 1,
                       backgroundColor: COLORS.primary,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>
                       <View style={{
                           backgroundColor: COLORS.white,
                           width: '90%',
                           borderRadius: 20,
                           padding: 20,
                           alignItems: 'center'
                       }}>
                           <Text style={{fontSize: 30, fontWeight: 'bold'}}>Congratulations!</Text>

                           
                           
                           <TouchableOpacity
                           onPress={restartQuiz}
                           style={{
                               backgroundColor: COLORS.accent,
                               padding: 20, width: '100%', borderRadius: 20
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.white, fontSize: 20
                               }}>Welcome</Text>
                           </TouchableOpacity>

                       </View>

                   </View>
               </Modal>

               {/* Background Image */}
               {/* <Image
                    source={require('../../assets/images/DottedBG.png')}
                    style={{
                        width: SIZES.width,
                        height: 130,
                        zIndex: -1,
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        opacity: 0.5
                    }}
                    resizeMode={'contain'}
                /> */}

           </View>
       </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 45,
    },
    nextButton: {
        position: 'absolute', 
        bottom: 20,
        //marginTop: 20,
        margin: 'auto',
        left: 16,
        right: 16,
        height: 62,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: COLORS.selected
    },

    imageContainer: {
        
        
    },

    questionCard: {
        ...Platform.select({
            android: {
              elevation: 3
            },
            ios: {
              shadowColor: 'rgba(0, 0, 0, 0.04)',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 1,
              shadowRadius: 18,
            },
            web: {
                //boxShadow: 'rgba(17, 17, 26, 0.1) 0px 0px 16px'
                boxShadow: 'rgba(0, 0, 0, 0.04) 0px 12px 18px -13px'
            },
          }),
    }
});

export default Survey

