import React from 'react';

import {
  TextInput,
  StyleSheet,
} from 'react-native';

import { colors } from '../styles/theme';

export default function Input({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#BDBDBD"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 48,

    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 8,

    paddingHorizontal: 14,

    marginBottom: 14,

    color: colors.text,
    backgroundColor: colors.white,
  },
});