import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { COLORS } from '../constants';

const Splash = () => {


    

    

    return (
        <ImageBackground source={require('../../assets/images/associations_sport.jpg')} style={styles.backgroundImage}>
            <View style={styles.overlay}> </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the opacity as needed
        padding: 20,
        justifyContent: 'center',
    },
    container : {
        flex: 1,
        padding: 40,
        paddingTop: 120,
        //backgroundColor: 'white',
        
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        
    },
    btn : {
        position: 'relative',
        height: 58,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
        backgroundColor: COLORS.selected,
        marginBottom: 20
    },
    btnOutlined : {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: COLORS.selected,
        '&:hover': {
            borderColor: 'white'
        }
    }
    


})

export default Splash;