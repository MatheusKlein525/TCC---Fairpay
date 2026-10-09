import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/theme';

export default function OrdersScreen({ navigation }) {
  const [supportVisible, setSupportVisible] = useState(false);

  const steps = [
    {
      title: 'Pedido confirmado',
      description: 'Seu pedido foi recebido.',
      icon: 'checkmark-circle',
      completed: true,
    },
    {
      title: 'Pedido preparado',
      description: 'Tudo pronto para o envio.',
      icon: 'cube',
      completed: true,
    },
    {
      title: 'Em transporte',
      description: 'O pedido chegou à sua cidade.',
      icon: 'bicycle',
      completed: true,
    },
    {
      title: 'Entrega realizada',
      description: 'Aguardando a entrega do pedido.',
      icon: 'home',
      completed: false,
    },
  ];

  return (
    <View style={styles.container}>
      {/* CABEÇALHO */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate('Home')}
          accessibilityRole="button"
          accessibilityLabel="Voltar para a página inicial"
        >
          <Ionicons
            name="home-outline"
            size={24}
            color={colors.white}
          />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.title}>MEUS PEDIDOS</Text>
          <Text style={styles.headerSubtitle}>
            Acompanhe sua entrega
          </Text>
        </View>

        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => setSupportVisible(true)}
          accessibilityRole="button"
          accessibilityLabel="Abrir suporte"
        >
          <Ionicons
            name="headset-outline"
            size={24}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* MENSAGEM DE STATUS */}
        <View style={styles.statusHeader}>
          <View>
            <Text style={styles.greeting}>Olá!</Text>
            <Text style={styles.pageTitle}>
              Seu pedido está a caminho
            </Text>
          </View>

          <View style={styles.statusIcon}>
            <Ionicons
              name="cube-outline"
              size={27}
              color={colors.primary}
            />
          </View>
        </View>

        {/* CARTÃO PRINCIPAL */}
        <View style={styles.orderCard}>
          <View style={styles.orderCardTop}>
            <View style={styles.orderIcon}>
              <Ionicons
                name="bag-check-outline"
                size={25}
                color={colors.primary}
              />
            </View>

            <View style={styles.orderInfo}>
              <Text style={styles.orderLabel}>
                STATUS DO PEDIDO
              </Text>
              <Text style={styles.orderStatus}>
                Em transporte
              </Text>
            </View>

            <View style={styles.statusBadge}>
              <View style={styles.statusDot} />
              <Text style={styles.statusBadgeText}>
                Ativo
              </Text>
            </View>
          </View>

          <View style={styles.cardDivider} />

          <View style={styles.locationRow}>
            <Ionicons
              name="location-outline"
              size={21}
              color={colors.primary}
            />
            <View style={styles.locationInfo}>
              <Text style={styles.locationTitle}>
                Seu pedido chegou à sua cidade
              </Text>
              <Text style={styles.locationDescription}>
                A próxima etapa é a entrega no destino.
              </Text>
            </View>
          </View>
        </View>

        {/* LINHA DO TEMPO */}
        <View style={styles.timelineCard}>
          <Text style={styles.sectionTitle}>
            Acompanhe as etapas
          </Text>

          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <View style={styles.stepRow} key={step.title}>
                <View style={styles.stepVisual}>
                  <View
                    style={[
                      styles.stepIcon,
                      step.completed
                        ? styles.stepIconCompleted
                        : styles.stepIconPending,
                    ]}
                  >
                    <Ionicons
                      name={step.icon}
                      size={19}
                      color={
                        step.completed
                          ? '#FFFFFF'
                          : '#8B98AA'
                      }
                    />
                  </View>

                  {!isLast && (
                    <View
                      style={[
                        styles.stepLine,
                        step.completed && styles.stepLineCompleted,
                      ]}
                    />
                  )}
                </View>

                <View style={styles.stepInfo}>
                  <Text
                    style={[
                      styles.stepTitle,
                      !step.completed && styles.stepTitlePending,
                    ]}
                  >
                    {step.title}
                  </Text>

                  <Text style={styles.stepDescription}>
                    {step.description}
                  </Text>
                </View>

                {step.completed && (
                  <Ionicons
                    name="checkmark-circle"
                    size={20}
                    color="#20A66A"
                  />
                )}
              </View>
            );
          })}
        </View>

        {/* AVISO */}
        <View style={styles.infoBox}>
          <Ionicons
            name="information-circle-outline"
            size={23}
            color={colors.primary}
          />

          <Text style={styles.infoText}>
            As informações de acompanhamento são ilustrativas
            nesta versão de demonstração do FairPay.
          </Text>
        </View>
      </ScrollView>

      {/* RODAPÉ DE SUPORTE */}
      <View style={styles.footer}>
        <View style={styles.footerInfo}>
          <Ionicons
            name="headset-outline"
            size={27}
            color="#FFFFFF"
          />

          <View style={styles.footerTextContainer}>
            <Text style={styles.footerTitle}>
              Precisa de ajuda?
            </Text>
            <Text style={styles.footerDescription}>
              Fale com nossa equipe de suporte.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => setSupportVisible(true)}
          accessibilityRole="button"
          accessibilityLabel="Entrar em contato com o suporte"
        >
          <Text style={styles.contactButtonText}>
            Contatar suporte
          </Text>
          <Ionicons
            name="arrow-forward"
            size={19}
            color={colors.primary}
          />
        </TouchableOpacity>
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
              accessibilityRole="button"
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
              Precisa de ajuda com seu pedido? Entre em contato
              com nossa equipe.
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
    backgroundColor: '#F5F7FB',
  },

  /* CABEÇALHO */
  header: {
    minHeight: 112,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 25,
    paddingBottom: 16,
  },

  headerButton: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 8,
  },

  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },

  headerSubtitle: {
    color: '#E4EDFF',
    fontSize: 12,
    marginTop: 4,
  },

  scroll: {
    flex: 1,
  },

  content: {
    padding: 20,
    paddingBottom: 25,
  },

  /* TÍTULO DA PÁGINA */
  statusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  greeting: {
    fontSize: 13,
    color: '#7A8798',
    marginBottom: 4,
  },

  pageTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#243247',
    flexShrink: 1,
  },

  statusIcon: {
    width: 49,
    height: 49,
    borderRadius: 16,
    backgroundColor: '#E5EEFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  /* CARTÃO DO PEDIDO */
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E7ECF4',
  },

  orderCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  orderIcon: {
    width: 47,
    height: 47,
    borderRadius: 14,
    backgroundColor: '#EAF1FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  orderInfo: {
    flex: 1,
  },

  orderLabel: {
    fontSize: 10,
    color: '#7A8798',
    fontWeight: 'bold',
    letterSpacing: 0.8,
  },

  orderStatus: {
    fontSize: 17,
    color: '#243247',
    fontWeight: 'bold',
    marginTop: 4,
  },

  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5F7ED',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: 5,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#20A66A',
    marginRight: 5,
  },

  statusBadgeText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#16804E',
  },

  cardDivider: {
    height: 1,
    backgroundColor: '#EDF0F5',
    marginVertical: 17,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },

  locationInfo: {
    flex: 1,
  },

  locationTitle: {
    color: '#344258',
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: 19,
  },

  locationDescription: {
    color: '#7A8798',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },

  /* ETAPAS */
  timelineCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E7ECF4',
    marginBottom: 16,
  },

  sectionTitle: {
    color: '#243247',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 21,
  },

  stepRow: {
    flexDirection: 'row',
    minHeight: 73,
    alignItems: 'flex-start',
  },

  stepVisual: {
    width: 36,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginRight: 12,
  },

  stepIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },

  stepIconCompleted: {
    backgroundColor: colors.primary,
  },

  stepIconPending: {
    backgroundColor: '#EDF0F5',
  },

  stepLine: {
    width: 2,
    flex: 1,
    minHeight: 28,
    backgroundColor: '#DCE2EC',
  },

  stepLineCompleted: {
    backgroundColor: colors.primary,
  },

  stepInfo: {
    flex: 1,
    paddingTop: 2,
    paddingBottom: 17,
  },

  stepTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2A394F',
  },

  stepTitlePending: {
    color: '#8994A5',
  },

  stepDescription: {
    fontSize: 12,
    color: '#7A8798',
    lineHeight: 17,
    marginTop: 4,
  },

  /* AVISO */
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    backgroundColor: '#EAF1FF',
    padding: 14,
    borderRadius: 12,
  },

  infoText: {
    flex: 1,
    color: '#435674',
    fontSize: 12,
    lineHeight: 18,
  },

  /* RODAPÉ AZUL */
  footer: {
    backgroundColor: colors.primary,
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 21,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  footerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 15,
  },

  footerTextContainer: {
    flex: 1,
  },

  footerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  footerDescription: {
    fontSize: 12,
    color: '#E5EEFF',
    marginTop: 4,
  },

  contactButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 11,
    minHeight: 47,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  contactButtonText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },

  /* MODAL */
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
    lineHeight: 20,
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