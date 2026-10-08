
import React from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { colors } from '../styles/theme';

export default function HistoryScreen({ navigation }) {

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

      {/* CABEÇALHO */}

      <View style={styles.header}>

        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons
            name="home-outline"
            size={25}
            color={colors.white}
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          HISTÓRICO DE COMPRAS
        </Text>

        <TouchableOpacity style={styles.headerButton}>
          <Ionicons
            name="menu"
            size={25}
            color={colors.white}
          />
        </TouchableOpacity>

      </View>

      {/* LISTA DE COMPRAS */}

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

  /* CABEÇALHO PADRONIZADO */

  header: {
    height: 112,
    backgroundColor: colors.primary,

    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    paddingHorizontal: 15,
    paddingBottom: 15,
  },

  headerButton: {
    width: 30,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    flex: 1,
    color: '#FFFFFF',

    fontSize: 20,
    fontWeight: 'bold',

    textAlign: 'center',
  },

  /* LISTA */

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
  },

});
