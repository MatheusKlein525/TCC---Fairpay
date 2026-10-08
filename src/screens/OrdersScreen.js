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

export default function OrdersScreen({ navigation }) {
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
          PEDIDOS EM
          {'\n'}
          ANDAMENTO
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

      {/* ACOMPANHAMENTO DO PEDIDO */}
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

      {/* JANELA DE SUPORTE */}
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

            <Text style={styles.modalTitle}>
              Central de Suporte
            </Text>

            <Text style={styles.modalDescription}>
              Precisa de ajuda com seu pedido? Entre em contato com nossa equipe.
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
    padding: 15,
  },

  headerButton: {
    width: 30,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    flex: 1,
    color: colors.white,
    fontWeight: '900',
    fontStyle: 'italic',
    fontSize: 17,
    textAlign: 'center',
  },

  /* CONTEÚDO */
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