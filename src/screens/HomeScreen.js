import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/theme';

export default function HomeScreen({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  return (
    <View style={styles.container}>
      {/* CABEÇALHO */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={openMenu}
        >
          <Ionicons
            name="home-outline"
            size={27}
            color={colors.white}
          />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>
            PEDIDOS EM
            {'\n'}
            ANDAMENTO
          </Text>
        </View>

        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => setNotificationsOpen(true)}
        >
          <Ionicons
            name="notifications-outline"
            size={25}
            color={colors.white}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.headerButton}
          onPress={openMenu}
        >
          <Ionicons
            name="menu"
            size={29}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>

      {/* CONTEÚDO PRINCIPAL */}
      <View style={styles.content}>
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
        <View style={styles.menuOverlay}>
          <View style={styles.sideMenu}>
            <View style={styles.menuHeader}>
              <Text style={styles.logoText}>F</Text>

              <TouchableOpacity
                onPress={() => {
                  setMenuOpen(false);
                  setNotificationsOpen(true);
                }}
              >
                <Ionicons
                  name="notifications-outline"
                  size={26}
                  color={colors.white}
                />
              </TouchableOpacity>
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

              <Text style={styles.menuText}>
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

              <Text style={styles.menuText}>Suporte</Text>
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
                color={colors.black}
              />

              <Text style={styles.menuText}>Sair</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.closeArea}
            onPress={() => setMenuOpen(false)}
            activeOpacity={1}
          />
        </View>
      )}

      {/* JANELA PADRONIZADA DE SUPORTE */}
      {notificationsOpen && (
        <View style={styles.supportOverlay}>
          <TouchableOpacity
            style={styles.overlayBackground}
            onPress={() => setNotificationsOpen(false)}
            activeOpacity={1}
          />

          <View style={styles.supportModal}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setNotificationsOpen(false)}
              accessibilityLabel="Fechar suporte"
            >
              <Ionicons
                name="close"
                size={25}
                color="#555555"
              />
            </TouchableOpacity>

            <Ionicons
              name="headset-outline"
              size={42}
              color={colors.primary}
            />

            <Text style={styles.supportTitle}>
              Central de Suporte
            </Text>

            <Text style={styles.supportDescription}>
              Precisa de ajuda? Entre em contato com nossa equipe.
            </Text>

            <View style={styles.phoneCard}>
              <Ionicons
                name="call-outline"
                size={22}
                color={colors.primary}
              />

              <View style={styles.phoneTextContainer}>
                <Text style={styles.phoneLabel}>
                  Atendimento geral
                </Text>

                <Text style={styles.phoneText}>
                  (11) 4000-1234
                </Text>
              </View>
            </View>

            <View style={styles.phoneCard}>
              <Ionicons
                name="call-outline"
                size={22}
                color={colors.primary}
              />

              <View style={styles.phoneTextContainer}>
                <Text style={styles.phoneLabel}>
                  Suporte financeiro
                </Text>

                <Text style={styles.phoneText}>
                  (11) 4000-5678
                </Text>
              </View>
            </View>

            <Text style={styles.supportNote}>
              Números fictícios para demonstração do projeto.
            </Text>

            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setNotificationsOpen(false)}
            >
              <Text style={styles.closeModalButtonText}>
                Fechar
              </Text>
            </TouchableOpacity>
          </View>
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

  /* CABEÇALHO */
  header: {
    height: 112,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 15,
  },

  headerButton: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  /* CONTEÚDO */
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

  /* MENU LATERAL */
  menuOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    zIndex: 10,
    elevation: 10,
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

  menuText: {
    color: colors.black,
    fontSize: 14,
  },

  logout: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },

  /* SOBREPOSIÇÃO DE SUPORTE */
  supportOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
    elevation: 20,
  },

  overlayBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  supportModal: {
    width: '85%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    elevation: 12,
  },

  closeButton: {
    alignSelf: 'flex-end',
    padding: 4,
  },

  supportTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 12,
  },

  supportDescription: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 18,
  },

  phoneCard: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F5FA',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    gap: 12,
  },

  phoneTextContainer: {
    flex: 1,
  },

  phoneLabel: {
    fontSize: 13,
    color: '#666666',
  },

  phoneText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 3,
  },

  supportNote: {
    fontSize: 11,
    color: '#888888',
    textAlign: 'center',
    marginTop: 5,
  },

  closeModalButton: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 9,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 18,
  },

  closeModalButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});