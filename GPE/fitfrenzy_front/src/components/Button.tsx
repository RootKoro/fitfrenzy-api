import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export interface ButtonProps {
    label: string,
    onPress?: (event: any) => void
}

export default function Button({label, onPress} : ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#AD40AF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: '#fff',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}