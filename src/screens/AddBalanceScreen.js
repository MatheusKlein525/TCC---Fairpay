import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { colors } from '../styles/theme';

export default function AddBalanceScreen({ navigation }) {
  const [supportVisible, setSupportVisible] = useState(false);

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
          ADICIONAR SALDO
        </Text>

        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => setSupportVisible(true)}
          accessibilityLabel="Abrir suporte"
        >
          <Ionicons
            name="notifications-outline"
            size={25}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>

      {/* CONTEÚDO */}
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

      {/* MODAL DE SUPORTE */}
      <Modal
        visible={supportVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setSupportVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSupportVisible(false)}
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

            <Text style={styles.modalTitle}>
              Central de Suporte
            </Text>

            <Text style={styles.modalDescription}>
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
                <Text style={styles.phoneNumber}>
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
                <Text style={styles.phoneNumber}>
                  (11) 4000-5678
                </Text>
              </View>
            </View>

            <Text style={styles.demoNotice}>
              Números fictícios para demonstração do projeto.
            </Text>

            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setSupportVisible(false)}
            >
              <Text style={styles.closeModalButtonText}>
                Fechar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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

  /* CONTEÚDO */
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

  /* JANELA DE SUPORTE */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  modalCard: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },

  closeButton: {
    alignSelf: 'flex-end',
    padding: 4,
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 12,
  },

  modalDescription: {
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

  phoneNumber: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 3,
  },

  demoNotice: {
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