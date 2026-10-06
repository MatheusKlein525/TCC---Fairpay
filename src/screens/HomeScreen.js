import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import {
  Ionicons,
} from '@expo/vector-icons';

import { colors } from '../styles/theme';

export default function HomeScreen({ navigation }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={styles.container}>

      {/* CONTEÚDO PRINCIPAL */}

      <View style={styles.header}>

        <TouchableOpacity
          onPress={() => setMenuOpen(true)}
        >
          <Ionicons
            name="menu"
            size={28}
            color={colors.white}
          />
        </TouchableOpacity>

        <TextInput
          placeholder="pesquisar"
          placeholderTextColor="#AAA"
          style={styles.search}
        />

        <Ionicons
          name="notifications-outline"
          size={25}
          color={colors.white}
        />

      </View>


      <View style={styles.content}>

        {/* PEDIDOS */}

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Orders')}
        >

          <Text style={styles.cardTitle}>
            Pedidos em
            {'\n'}
            andamento
          </Text>

          <Ionicons
            name="bag-outline"
            size={65}
            color={colors.primary}
          />

        </TouchableOpacity>


        {/* SALDO */}

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('AddBalance')}
        >

          <Text style={styles.cardTitle}>
            adicionar
            {'\n'}
            saldo
          </Text>

          <Ionicons
            name="add-circle-outline"
            size={55}
            color={colors.secondary}
          />

        </TouchableOpacity>

      </View>


      {/* MENU LATERAL */}

      {menuOpen && (
        <View style={styles.overlay}>

          <View style={styles.sideMenu}>

            <View style={styles.menuHeader}>

              <Text style={styles.logoText}>
                F
              </Text>

              <Ionicons
                name="notifications-outline"
                size={26}
                color={colors.white}
              />

            </View>


            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => {
                setMenuOpen(false);
                navigation.navigate('History');
              }}
            >

              <Ionicons
                name="time-outline"
                size={22}
                color={colors.black}
              />

              <Text>
                Histórico de
                {'\n'}
                compras
              </Text>

            </TouchableOpacity>


            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => {
                setMenuOpen(false);
                navigation.navigate('Support');
              }}
            >

              <Ionicons
                name="headset-outline"
                size={22}
                color={colors.black}
              />

              <Text>
                Suporte
              </Text>

            </TouchableOpacity>


            <TouchableOpacity
              style={styles.logout}
              onPress={() => {
                setMenuOpen(false);
                navigation.replace('Login');
              }}
            >

              <Ionicons
                name="log-out-outline"
                size={20}
              />

              <Text>
                Sair
              </Text>

            </TouchableOpacity>

          </View>

          {/* área escura para fechar o menu */}

          <TouchableOpacity
            style={styles.closeArea}
            onPress={() => setMenuOpen(false)}
          />

        </View>
      )}

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

    paddingHorizontal: 12,
    paddingBottom: 15,

    gap: 10,
  },

  search: {
    flex: 1,
    height: 34,

    backgroundColor: colors.white,
    borderRadius: 7,

    paddingHorizontal: 12,

    fontSize: 12,
  },

  content: {
    flex: 1,
    padding: 25,
    gap: 10,
  },

  card: {
    minHeight: 145,

    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 8,

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 5,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',

    marginBottom: 5,
  },

  overlay: {
    position: 'absolute',

    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    flexDirection: 'row',
  },

  sideMenu: {
    width: '70%',
    backgroundColor: colors.white,
    elevation: 10,
  },

  closeArea: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  menuHeader: {
    height: 105,

    backgroundColor: colors.primary,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 20,
  },

  logoText: {
    color: colors.white,
    fontSize: 50,
    fontWeight: '900',
    fontStyle: 'italic',
  },

  menuButton: {
    marginHorizontal: 20,
    marginTop: 100,

    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,

    padding: 8,

    flexDirection: 'row',
    alignItems: 'center',

    gap: 8,
  },

  logout: {
    position: 'absolute',

    bottom: 30,
    left: 20,
    right: 20,

    borderWidth: 1,
    borderColor: '#AAA',
    borderRadius: 8,

    padding: 10,

    flexDirection: 'row',
    gap: 8,
  },

});