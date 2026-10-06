import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  Ionicons,
} from '@expo/vector-icons';

import { colors } from '../styles/theme';

export default function SupportScreen() {

  const problems = [
    'lentidão ou travamento em telas',
    'dificuldade de lentidão no reembolso',
    'erro ao processar transferência',
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
          Suporte
        </Text>

        <Ionicons
          name="menu"
          size={25}
          color={colors.white}
        />

      </View>


      <View style={styles.content}>

        <View style={styles.searchContainer}>

          <Ionicons
            name="search"
            size={18}
            color="#999"
          />

          <TextInput
            placeholder="pesquisar problema"
            placeholderTextColor="#999"
            style={styles.search}
          />

        </View>


        {problems.map((problem, index) => (

          <TouchableOpacity
            key={index}
            style={styles.problem}
          >

            <View style={styles.iconCircle}>

              <Ionicons
                name="help-outline"
                size={30}
                color={colors.secondary}
              />

            </View>

            <Text style={styles.problemText}>
              {problem}
            </Text>

          </TouchableOpacity>

        ))}


        <Text style={styles.contact}>
          contato direto com suporte
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

    fontSize: 16,
    fontWeight: '900',
    fontStyle: 'italic',
  },

  content: {
    padding: 20,
  },

  searchContainer: {
    backgroundColor: '#EEE',

    borderRadius: 8,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 10,

    height: 38,

    marginBottom: 20,
  },

  search: {
    flex: 1,
    marginLeft: 8,
  },

  problem: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 18,
  },

  iconCircle: {
    width: 55,
    height: 55,

    borderRadius: 30,

    backgroundColor: '#DDD',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 10,
  },

  problemText: {
    backgroundColor: '#EEE',

    borderRadius: 15,

    paddingVertical: 8,
    paddingHorizontal: 12,

    fontSize: 8,
  },

  contact: {
    alignSelf: 'center',

    marginTop: 20,

    fontSize: 9,
    textDecorationLine: 'underline',
  },

});