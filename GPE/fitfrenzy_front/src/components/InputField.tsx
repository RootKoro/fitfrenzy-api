import { FormikErrors } from 'formik';
import React, { ChangeEvent } from 'react';
import {View, Text, TouchableOpacity, TextInput, KeyboardTypeOptions} from 'react-native';

export interface InputFieldProps {
    label: string;
    editable?: boolean
    icon: any;
    inputType?: string;
    keyboardType?: KeyboardTypeOptions | undefined;
    fieldButtonLabel?: string;
    fieldButtonFunction?: () => void;
    onChangeText?: (e: string | ChangeEvent<any>) => void
    onBlur?: (e: any) => any
    value?: string 
    error?: string | FormikErrors<any>
    onPressIn?: () => void
}

export default function InputField({
  label,
  editable = true,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  onChangeText,
  onBlur,
  value,
  error,
  onPressIn
}: InputFieldProps) {

  return (
    <View style={{
      marginBottom: 20,
    }}>

   
      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingBottom: 10,
          marginBottom: 5
          
        }}
      >
        {icon}
        {inputType == 'password' ? (
          <TextInput
            placeholder={label}
            editable={editable}
            keyboardType={keyboardType}
            autoCapitalize="none"
            style={{flex: 1, paddingVertical: 0}}
            secureTextEntry={true}
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
            onPressIn={onPressIn}
          />
        ) : (
          <TextInput
            placeholder={label}
            editable={editable}
            keyboardType={keyboardType}
            autoCapitalize="none"
            style={{flex: 1, paddingVertical: 0}}
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
            onPressIn={onPressIn}
          />
        )}
        <TouchableOpacity onPress={fieldButtonFunction}>
          <Text style={{color: '#AD40AF', fontWeight: '700'}}>{fieldButtonLabel}</Text>
        </TouchableOpacity>
      </View>
      {error && <Text style={{ color: 'red' }}>{error.toString()}</Text>}
    </View>
  );
}