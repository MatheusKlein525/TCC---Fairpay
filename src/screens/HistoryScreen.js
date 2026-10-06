import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  Ionicons,
} from '@expo/vector-icons';

import { colors } from '../styles/theme';

export default function HistoryScreen() {

  const purchases = [
    {
      store: 'mercado livre',
      date: '17/08/26',
      name: 'André',
      code: 'xxxxx-xxxx',
    },
    {
      store: 'shopee',
      date: '23/07/26',
      name: 'André',
      code: 'xxxxx-xxxx',
    },
  ];

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Ionicons
          name="home-outline"
          size={25}
          color={colors.white}
        />

        <Text style={styles.title}>
          Histórico de compras
        </Text>

        <Ionicons
          name="menu"
          size={25}
          color={colors.white}
        />

      </View>


      <ScrollView style={styles.list}>

        {purchases.map((purchase, index) => (

          <View
            key={index}
            style={styles.purchase}
          >

            <Text style={styles.store}>
              {purchase.store}
            </Text>

            <Text style={styles.date}>
              {purchase.date}
            </Text>

            <View style={styles.row}>

              <Text>
                {purchase.name}
              </Text>

              <Text>
                {purchase.code}
              </Text>

            </View>

          </View>

        ))}

      </ScrollView>

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

    fontSize: 16,
    fontWeight: '900',
    fontStyle: 'italic',
  },

  list: {
    margin: 15,

    backgroundColor: '#E9E5E5',
    borderRadius: 8,

    padding: 10,
  },

  purchase: {
    backgroundColor: '#F7F4F4',

    borderRadius: 8,

    padding: 12,

    marginBottom: 12,
  },

  store: {
    fontSize: 9,
    fontWeight: '700',
  },

  date: {
    fontSize: 8,
    marginBottom: 8,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    fontSize: 10,
  },

});