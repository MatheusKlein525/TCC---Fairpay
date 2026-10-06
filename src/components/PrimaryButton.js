import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { colors } from '../styles/theme';

export default function PrimaryButton({
  title,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: 8,

    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
  },

  text: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
});