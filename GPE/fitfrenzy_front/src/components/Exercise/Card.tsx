import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Card as CardRNE, Chip, Image } from '@rneui/themed';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';





const Card = () => {


    return (
        <CardRNE containerStyle={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
            <View /* style={{borderWidth: 3}} */ style={[ {paddingVertical: 10}]}>

                <Text style={[styles.title, { marginBottom: 20 }]}>Squat</Text>
                <Chip title={<Text style={[styles.subtitle, {fontWeight: '700'}]} >Intermédiare</Text>} containerStyle={{ marginVertical: 0 }} />
                <View style={[styles.flexH, { marginTop: 10 }]}>
                    <Chip title={<>
                        <MaterialIcons name="local-fire-department" style={{color: 'white'}} size={20} />
                        {/*  <Text style={[styles.subtitle]}>Calories:</Text> */}
                        <Text style={[styles.subtitle, {fontWeight: '700', marginLeft: 5}]}>23 kcal</Text></>} 
                    />
                </View>
                <View style={[styles.flexH,   { marginTop: 10 }]}>
                    <Chip title={<>
                        <MaterialIcons name="timer" style={{color: 'white'}} size={20} />
                        {/* <Text style={[styles.subtitle]}>Length:</Text> */}
                        <Text style={[styles.subtitle, {fontWeight: '700', marginLeft: 5}]}>10 min</Text></>} 
                    />
                </View>
            </View>
            <View style={[{alignItems: 'center', justifyContent: 'center'}]}>
                <Image
                    source={require("../../../assets/images/bodyweightsquat.jpg")}
                    style={{ 
                    height:  100, 
                    width: 100,
                    resizeMode: 'contain'
                    }}
                />
            </View>
            </View>
        </CardRNE>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        //minHeight: 150
        /* alignItems: 'center',
        justifyContent: 'center', */
       
    },
    title: {
        fontSize: 36,
        fontWeight: '600',
    },
    subtitle: {
        fontSize: 16,
        color: 'white'
    },
    flexH: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent:'space-between'
    },
    border: {
        borderWidth: 1, 
        borderColor: 'red'
    }
})

export default Card;