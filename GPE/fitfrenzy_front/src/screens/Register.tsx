import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
  Platform
} from 'react-native';
import { Formik, useFormikContext } from 'formik';
import * as Yup from 'yup';

import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import InputField from '../components/InputField';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LogoSVG from '../../assets/images/misc/logo.svg';
import GoogleSVG from '../../assets/images/misc/google.svg';
import Button from '../components/Button';
import { useRegisterMutation } from '../hooks/queries/useRegisterMutation';


const validationSchemaa = Yup.object().shape({
    firstname: Yup.string().required('Le prénom est obligatoire'),
    lastname: Yup.string().required('Le nom de famille est obligatoire'),
    email: Yup.string().email('Adresse e-mail invalide').required('L\'adresse e-mail est obligatoire'),
    password: Yup.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères').required('Le mot de passe est obligatoire'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Les mots de passe doivent correspondre')
      .required('La confirmation du mot de passe est obligatoire'),
    dob: Yup.date().nullable().required('La date de naissance est obligatoire'),
  });

  
const RegisterScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date de naissance');
  const [submitting, setSubmitting] = useState(false);

  const { mutate: register, isLoading, isError, isSuccess } = useRegisterMutation();
  const onRegister = async(values, { validateForm }) => {
    const errors = await validateForm(values);
    try {
        const { confirmationPassword, ...apiData } = values;

        await register({...apiData, birthday: apiData.dob}, {
            onSuccess: () => {
                navigation.navigate('Login');
            }
        });

    }catch(error) {
        console.log("Register error: " + error);
    }
  }
  /* const onRegister = useCallback(
    async(values: any, { validateForm }) => {
        console.info("onRegister")

        const errors = await validateForm(values);
        try {
            console.log(values)
            const { confirmationPassword, ...apiData } = values;

            const apiPayload = {
                ...apiData,
                birthday: apiData.dob
            }
            const response = await fetch('http://localhost:3000/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(apiPayload),
            });
    
            if (response.ok) {
                console.log('Form submitted successfully');
                navigation.navigate('Login');
            } else {
                console.error('Failed to submit form', response);
            }
        } catch (error) {
            console.error('Error submitting form', error);
        } finally {
            setSubmitting(false);
        }
    },
    []
    )

  const toggleTimePicker = useCallback(() => {
    setOpen(!open)
  }, [open]);

  const onChange = useCallback(({type}: DateTimePickerEvent, selectedDate?: Date) => {
    console.log("onchange")
    if(type == 'set') {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        
        if(Platform.OS === 'android') {
            console.info("is android")
            setDobLabel(date.toDateString());
            toggleTimePicker();
           
        }

    }
        toggleTimePicker();
    
    
  }, [open, toggleTimePicker]);


  const confirmIOSDate = () => {
    setDobLabel(date.toDateString());
    toggleTimePicker();
  }
  
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
        <Formik
            initialValues={{ 
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                confirmPassword: '',
                dob: null,
            }}
            validationSchema={validationSchemaa}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values, validateForm) => onRegister(values, validateForm)}
        >
            {({ handleChange, handleBlur, handleSubmit, setFieldValue, validateForm, values, errors }) => (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{paddingHorizontal: 25}}>
                    <View style={{alignItems: 'center'}}>
                    <Image 
                        source={require("../../assets/images/logo.png")} 
                        style={[{transform: [{rotate: '-5deg'}]}, styles.logo]}
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
                    inscrivez-vous avec
                    </Text>

                    <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
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
                    </View>

                    <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
                    Ou, inscrivez-vous par email ...
                    </Text>
                    
                    
                    <InputField
                        label={'Prénom'}
                        onChangeText={handleChange('firstname')}
                        onBlur={handleBlur('firstname')}
                        value={values.firstname}
                        error={errors.firstname}
                        icon={
                            <Ionicons
                                name="person-outline"
                                size={20}
                                color="#666"
                                style={{marginRight: 5}}
                            />
                        }
                        
                    />
                        
            
                    
                    <InputField
                        label={'Nom'}
                        onChangeText={handleChange('lastname')}
                        onBlur={handleBlur('lastname')}
                        value={values.lastname}
                        error={errors.lastname}
                        icon={
                            <Ionicons
                            name="person-outline"
                            size={20}
                            color="#666"
                            style={{marginRight: 5}}
                            />
                        }
                    />
                    
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
                    />
                   
                    <InputField
                        label={'Confirmation du mot de passe'}
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                        error={errors.confirmPassword}
                        icon={
                            <Ionicons
                            name="ios-lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{marginRight: 5}}
                            />
                        }
                        inputType="password"
                    />

                    {open && <DateTimePicker
                        mode={'date'}
                        display='spinner'
                        value={date}
                        maximumDate={new Date()}
                        minimumDate={new Date('1920-01-01')}
                        style={styles.datePicker}
                        /* onConfirm={date => {
                            setOpen(false);
                            setDate(date);
                            setDobLabel(date.toDateString());
                        }} */
                       /*  onCancel={() => {
                            setOpen(false);
                        }} */
                        onChange={(event: DateTimePickerEvent, date?: Date) => {
                            onChange(event, date)
                            setFieldValue('dob', date?.toDateString())
                        }}
                    /> }

                    {open && Platform.OS === 'ios' && (
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20}}>
                            <TouchableOpacity 
                                style={styles.btn}
                                onPress={toggleTimePicker}
                            >
                                <Text>Annuler</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.btn}
                                onPress={() => {
                                    confirmIOSDate();
                                    setFieldValue('dob', date.toDateString());
                                }}
                            >
                                <Text>Confirmer</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    {(Platform.OS === 'android' || !open ) && <Pressable onPress={toggleTimePicker} > 
                        <InputField
                            label={dobLabel}
                            onChangeText={()=> {handleChange('dob'); setFieldValue('dob', date)}}
                            onBlur={handleBlur('dob')}
                            value={values.dob ? values.dob : ''}
                            error={errors.dob}
                            editable={false}
                            onPressIn={toggleTimePicker}
                            icon={
                                <Ionicons
                                name="calendar-outline"
                                size={20}
                                color="#666"
                                style={{marginRight: 5}}
                                />
                            }
                        />
                        {/* <View
                            style={{
                                flexDirection: 'row',
                                borderBottomColor: '#ccc',
                                borderBottomWidth: 1,
                                paddingBottom: 8,
                                marginBottom: 30,
                            }}>
                            <Ionicons
                                name="calendar-outline"
                                size={20}
                                color="#666"
                                style={{marginRight: 5}}
                            />
                            <TouchableOpacity onPress={() => setOpen(true)}>
                                <Text style={{color: '#666', marginLeft: 5, marginTop: 5}}>
                                {dobLabel}
                                </Text>
                            </TouchableOpacity>
                        </View> */}
                    </Pressable> }
                    

                    <Button label={'Register'} onPress={handleSubmit} />

                    <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
                    }}>
                    <Text>Already registered?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
                    </TouchableOpacity>
                    </View>
                </ScrollView>
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
    },
    datePicker: {
        height: 120,
        marginTop: -30
    },
    btn: {
        backgroundColor: '#EEE',
        padding: 10,
        borderRadius: 50
    }
  })

export default RegisterScreen;