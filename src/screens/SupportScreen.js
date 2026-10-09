import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/theme';

export default function SupportScreen({ navigation }) {
  const [supportVisible, setSupportVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const problems = [
    {
      id: '1',
      title: 'Lentidão ou travamento de telas',
      description:
        'Telas demorando para carregar ou parando de responder.',
      icon: 'phone-portrait-outline',
      keywords: 'lentidão travamento tela carregar lento',
    },
    {
      id: '2',
      title: 'Problemas com reembolso',
      description:
        'Dificuldade para solicitar ou demora no recebimento.',
      icon: 'wallet-outline',
      keywords: 'reembolso dinheiro demora solicitar',
    },
    {
      id: '3',
      title: 'Erro ao procurar transferência',
      description:
        'Transferências que não aparecem ou falhas na pesquisa.',
      icon: 'search-outline',
      keywords: 'transferência transferência erro procurar buscar',
    },
  ];

  const filteredProblems = problems.filter((problem) =>
    `${problem.title} ${problem.description} ${problem.keywords}`
      .toLowerCase()
      .includes(searchText.trim().toLowerCase())
  );

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
            size={25}
            color={colors.white}
          />
        </TouchableOpacity>

        <Text style={styles.title}>SUPORTE</Text>

        <View style={styles.headerButton}>
          <Ionicons
            name="help-circle-outline"
            size={25}
            color={colors.white}
          />
        </View>
      </View>

      {/* CONTEÚDO */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.heading}>
          Como podemos ajudar?
        </Text>

        <Text style={styles.subtitle}>
          Encontre orientações para os problemas mais comuns.
        </Text>

        {/* PESQUISA */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={20}
            color="#777777"
          />

          <TextInput
            placeholder="Pesquisar problema"
            placeholderTextColor="#888888"
            style={styles.search}
            value={searchText}
            onChangeText={setSearchText}
            accessibilityLabel="Pesquisar problemas de suporte"
          />

          {searchText.length > 0 && (
            <TouchableOpacity
              onPress={() => setSearchText('')}
              accessibilityLabel="Limpar pesquisa"
            >
              <Ionicons
                name="close-circle"
                size={20}
                color="#777777"
              />
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.sectionTitle}>
          Problemas recorrentes
        </Text>

        {/* CARTÕES DE PROBLEMAS */}
        {filteredProblems.map((problem) => (
          <View key={problem.id} style={styles.problemCard}>
            <View style={styles.iconCircle}>
              <Ionicons
                name={problem.icon}
                size={26}
                color={colors.primary}
              />
            </View>

            <View style={styles.problemInfo}>
              <Text style={styles.problemTitle}>
                {problem.title}
              </Text>

              <Text style={styles.problemDescription}>
                {problem.description}
              </Text>
            </View>
          </View>
        ))}

        {filteredProblems.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons
              name="search-outline"
              size={32}
              color="#888888"
            />
            <Text style={styles.emptyTitle}>
              Nenhum problema encontrado
            </Text>
            <Text style={styles.emptyDescription}>
              Tente pesquisar com outras palavras ou entre em
              contato com nossa equipe.
            </Text>
          </View>
        )}
      </ScrollView>

      {/* RODAPÉ AZUL DE CONTATO */}
      <View style={styles.footer}>
        <View style={styles.footerInfo}>
          <Ionicons
            name="headset-outline"
            size={30}
            color="#FFFFFF"
          />

          <View style={styles.footerTextContainer}>
            <Text style={styles.footerTitle}>
              Precisa de mais ajuda?
            </Text>

            <Text style={styles.footerDescription}>
              Nossa equipe está pronta para atender você.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => setSupportVisible(true)}
          accessibilityRole="button"
          accessibilityLabel="Entrar em contato com o suporte"
        >
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={19}
            color={colors.primary}
          />

          <Text style={styles.contactButtonText}>
            Falar com o suporte
          </Text>

          <Ionicons
            name="chevron-forward"
            size={19}
            color={colors.primary}
          />
        </TouchableOpacity>
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
    backgroundColor: '#F7F9FC',
  },

  header: {
    height: 112,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingBottom: 15,
  },

  headerButton: {
    width: 35,
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

  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 24,
  },

  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#202D40',
  },

  subtitle: {
    fontSize: 14,
    color: '#687386',
    lineHeight: 21,
    marginTop: 7,
    marginBottom: 22,
  },

  searchContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E6EF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    height: 48,
    marginBottom: 26,
  },

  search: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#263448',
    outlineStyle: 'none',
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#263448',
    marginBottom: 14,
  },

  problemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E8EDF4',
    gap: 13,
  },

  iconCircle: {
    width: 49,
    height: 49,
    borderRadius: 14,
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  problemInfo: {
    flex: 1,
  },

  problemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#263448',
    marginBottom: 5,
  },

  problemDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: '#687386',
  },

  emptyState: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
  },

  emptyTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#263448',
    marginTop: 10,
  },

  emptyDescription: {
    fontSize: 13,
    color: '#687386',
    textAlign: 'center',
    lineHeight: 19,
    marginTop: 7,
  },

  /* RODAPÉ */
  footer: {
    backgroundColor: colors.primary,
    paddingHorizontal: 22,
    paddingTop: 19,
    paddingBottom: 22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  footerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 17,
  },

  footerTextContainer: {
    flex: 1,
  },

  footerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footerDescription: {
    color: '#E5EEFF',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },

  contactButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 11,
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    gap: 10,
  },

  contactButtonText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
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