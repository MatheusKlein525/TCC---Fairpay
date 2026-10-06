import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  Ionicons,
} from '@expo/vector-icons';

import { colors } from '../styles/theme';

export default function AddBalanceScreen() {

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Ionicons
          name="home-outline"
          size={25}
          color={colors.white}
        />

        <Text style={styles.title}>
          adicionar saldo
        </Text>

        <Ionicons
          name="notifications-outline"
          size={25}
          color={colors.white}
        />

      </View>


      <View style={styles.content}>

        <View style={styles.balanceCard}>

          <Text style={styles.balanceTitle}>
            Saldo:
          </Text>

          <Text style={styles.balance}>
            R$****** 👁
          </Text>


          <View style={styles.buttons}>

            <TouchableOpacity style={styles.smallButton}>
              <Text>adicionar saldo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.smallButton}>
              <Text>resgatar código</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  header: {
    height: 112,
    backgroundColor: colors.primary,

    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    padding: 15,
  },

  title: {
    color: colors.white,

    fontSize: 17,
    fontWeight: '900',
    fontStyle: 'italic',
  },

  content: {
    padding: 15,
  },

  balanceCard: {
    backgroundColor: '#E9E5E5',

    borderRadius: 8,

    padding: 15,
  },

  balanceTitle: {
    fontSize: 16,
    fontWeight: '700',
  },

  balance: {
    fontSize: 17,
    fontWeight: '700',

    marginTop: 10,
  },

  buttons: {
    flexDirection: 'row',
    gap: 10,

    marginTop: 15,
  },

  smallButton: {
    backgroundColor: '#AAA0A0',

    borderRadius: 7,

    paddingVertical: 8,
    paddingHorizontal: 10,
  },

});