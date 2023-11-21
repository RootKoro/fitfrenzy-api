import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import { Formik, useFormikContext } from 'formik';
import * as yup from 'yup';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

//import LoginSVG from '../../assets/images/.svg';
import LogoSVG from '../../assets/images/misc/logo.svg';
import GoogleSVG from '../../assets/images/misc/google.svg';
//import FacebookSVG from '../assets/images/misc/facebook.svg';


import Button from '../components/Button';
import InputField from '../components/InputField';
import { ResizeMode } from 'expo-av';


const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
});

const Login = ({navigation} : any) => {
  const [submitting, setSubmitting] = useState(false);
  
  const onLogin = useCallback(async(values: any) => {
    try {
      console.log(values)
      const { confirmationPassword, ...apiData } = values;

      const apiPayload = {
          ...apiData,
          birthday: apiData.dob
      }
      const response = await fetch('http://localhost:3000/auth/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(apiPayload),
      });

      if (response.ok) {
          console.log('Form submitted successfully');
          navigation.navigate('Survey');
      } else {
          console.error('Failed to submit form', response);
      }
  } catch (error) {
      console.error('Error submitting form', error);
  } finally {
      setSubmitting(false);
  }
  }, [])
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
      <Formik
            initialValues={{ 
                email: '',
                password: '',
            }}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={values => onLogin(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors }) => (
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <LogoSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          />
          
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 18,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Connectez-vous à votre compte
        </Text>

        
        <InputField
          label={'E-mail'}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          error={errors.email}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Mot de passe'}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          error={errors.password}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
          fieldButtonLabel={"Oublié?"}
          //fieldButtonFunction={() => {}}
        />
        
        <Button label={"Connexion"} onPress={handleSubmit} />
          
       
        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Ou, connectez-vous avec ...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
            width: '100%'
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity> */}
          
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Nouveau sur l'application ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Créer un compte</Text>
          </TouchableOpacity>
        </View>  
      </View>
      )}
      </Formik>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  logo: {
    width: 250,
    height: 150
  }
})

export default Login;