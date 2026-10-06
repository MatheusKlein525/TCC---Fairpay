import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  Ionicons,
} from '@expo/vector-icons';

import { colors } from '../styles/theme';

export default function OrdersScreen() {

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Ionicons
          name="home-outline"
          size={25}
          color={colors.white}
        />

        <Text style={styles.title}>
          PEDIDOS EM
          {'\n'}
          ANDAMENTO
        </Text>

        <Ionicons
          name="notifications-outline"
          size={25}
          color={colors.white}
        />

      </View>


      <View style={styles.content}>

        <Text style={styles.smallTitle}>
          SEU PEDIDO JÁ ESTÁ
          {'\n'}
          CHEGANDO
        </Text>


        <View style={styles.tracking}>

          <Ionicons name="arrow-forward" size={22} />

          <Ionicons name="checkmark" size={22} color="green" />

          <Ionicons name="arrow-forward" size={22} />

          <Ionicons name="checkmark" size={22} color="green" />

          <Ionicons name="arrow-forward" size={22} />

          <Ionicons name="home-outline" size={22} />

        </View>


        <Text style={styles.delivery}>
          SUA ENTREGA JÁ SE ENCONTRA NA SUA CIDADE
        </Text>

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
    fontWeight: '900',
    fontStyle: 'italic',

    fontSize: 17,
    textAlign: 'center',
  },

  content: {
    margin: 15,

    backgroundColor: '#F1EEEE',

    borderRadius: 10,

    padding: 10,
  },

  smallTitle: {
    fontSize: 9,
    fontWeight: '600',
  },

  tracking: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    marginTop: 20,
  },

  delivery: {
    fontSize: 7,
    marginTop: 20,
  },

});