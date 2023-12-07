


import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';
import React from 'react';
import { View, Text, Image,  StyleSheet } from 'react-native';
import { RootStackPramList } from '../navigation/Navigation';

export interface ProfileProps {
    route: RouteProp<RootStackPramList, 'Home'>;
    navigation: NativeStackNavigationProp<RootStackPramList, 'Home'>
}
export const Profile = ({navigation}: any) => {

    
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../../assets/images/bg2.jpeg')} style={styles.profileImage} />
        <Text style={styles.profileName}>Sadoudi H.</Text>
        <Text style={styles.profileSubtitle}>sadoud_h@etna-alternance.net</Text>
      </View>
      <Button 
        title="Modifier le profil"
        
        buttonStyle={{
            
        }}
        onPress={() => {
            navigation.navigate("EditProfile")
        }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    gap: 8,
    alignItems: 'center'
  },
  profileContainer: {
    alignItems: 'center',
  },
  editButton: {
    color: 'white'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileSubtitle: {
    fontSize: 16,
    marginTop: 5,
  },
});
