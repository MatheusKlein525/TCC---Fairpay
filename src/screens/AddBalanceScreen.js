
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/theme';

const BLUE = colors.primary;
const DARK_BLUE = colors.primary;
const LIGHT_BLUE = '#EEEEFF';
const BACKGROUND = '#F7F7FC';
const TEXT = colors.text;
const GRAY = colors.gray;
const BORDER = '#E1E1F5';

export default function AddBalanceScreen({ navigation }) {
  const [currentScreen, setCurrentScreen] = useState('wallet');
  const [supportVisible, setSupportVisible] = useState(false);
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Pix');
  const [redeemCode, setRedeemCode] = useState('');

  const goBack = () => {
    if (currentScreen !== 'wallet') {
      setCurrentScreen('wallet');
      return;
    }
    navigation.goBack();
  };

  const formatAmount = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (!numbers) return '';

    return (Number(numbers) / 100).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleContinueAdd = () => {
    const numericAmount = Number(
      amount.replace(/\./g, '').replace(',', '.')
    );

    if (!amount || numericAmount <= 0) {
      Alert.alert('Valor inválido', 'Digite um valor para continuar.');
      return;
    }

    Alert.alert(
      'Prévia da operação',
      `Valor: R$ ${amount}\nForma de pagamento: ${paymentMethod}\n\nNenhum pagamento foi realizado.`,
      [{ text: 'Entendi' }]
    );
  };

  const handleRedeem = () => {
    if (!redeemCode.trim()) {
      Alert.alert('Código não informado', 'Digite seu código para continuar.');
      return;
    }

    Alert.alert(
      'Código informado',
      'A validação de códigos ainda não está disponível. Nenhum saldo foi adicionado.',
      [{ text: 'Entendi' }]
    );
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={goBack}
          accessibilityRole="button"
        >
          <Ionicons
            name={currentScreen === 'wallet' ? 'arrow-back' : 'chevron-back'}
            size={23}
            color={colors.white}
          />
        </TouchableOpacity>

        <View style={styles.headerTitles}>
          <Text style={styles.headerTitle}>
            {currentScreen === 'wallet'
              ? 'MINHA CARTEIRA'
              : currentScreen === 'add'
              ? 'ADICIONAR SALDO'
              : 'RESGATAR CÓDIGO'}
          </Text>

          <Text style={styles.headerSubtitle}>
            {currentScreen === 'wallet'
              ? 'Gerencie seu saldo'
              : currentScreen === 'add'
              ? 'Escolha como adicionar'
              : 'Insira seu código'}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => setSupportVisible(true)}
          accessibilityRole="button"
          accessibilityLabel="Abrir suporte"
        >
          <Ionicons
            name="headset-outline"
            size={23}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderWallet = () => (
    <>
      <Text style={styles.pageTitle}>Sua carteira</Text>
      <Text style={styles.pageDescription}>
        Consulte seu saldo e escolha uma operação.
      </Text>

      <View style={styles.balanceCard}>
        <View style={styles.balanceTop}>
          <View style={styles.balanceIcon}>
            <Ionicons
              name="wallet-outline"
              size={25}
              color={colors.white}
            />
          </View>

          <TouchableOpacity
            onPress={() => setBalanceVisible(!balanceVisible)}
            accessibilityRole="button"
            accessibilityLabel={
              balanceVisible ? 'Ocultar saldo' : 'Mostrar saldo'
            }
          >
            <Ionicons
              name={balanceVisible ? 'eye-off-outline' : 'eye-outline'}
              size={23}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.balanceLabel}>Saldo disponível</Text>
        <Text style={styles.balanceValue}>
          {balanceVisible ? 'R$ — — —' : 'R$ ••••••'}
        </Text>
        <Text style={styles.balanceCaption}>Sua carteira FairPay</Text>
      </View>

      <Text style={styles.sectionTitle}>O que deseja fazer?</Text>

      <TouchableOpacity
        style={styles.actionCard}
        onPress={() => setCurrentScreen('add')}
        accessibilityRole="button"
      >
        <View style={styles.actionIcon}>
          <Ionicons name="add-circle-outline" size={29} color={BLUE} />
        </View>

        <View style={styles.actionText}>
          <Text style={styles.actionTitle}>Adicionar saldo</Text>
          <Text style={styles.actionDescription}>
            Informe o valor e escolha uma forma de pagamento.
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color={GRAY} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionCard}
        onPress={() => setCurrentScreen('redeem')}
        accessibilityRole="button"
      >
        <View style={styles.redeemIcon}>
          <Ionicons name="ticket-outline" size={28} color="#15965B" />
        </View>

        <View style={styles.actionText}>
          <Text style={styles.actionTitle}>Resgatar código</Text>
          <Text style={styles.actionDescription}>
            Digite um código para consultar o resgate.
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color={GRAY} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('History')}
        accessibilityRole="button"
      >
        <Ionicons name="time-outline" size={20} color={BLUE} />
        <Text style={styles.secondaryButtonText}>Ver histórico</Text>
      </TouchableOpacity>
    </>
  );

  const renderAddBalance = () => (
    <>
      <View style={styles.screenHeading}>
        <View style={styles.largeIcon}>
          <Ionicons name="add-circle-outline" size={35} color={BLUE} />
        </View>

        <Text style={styles.pageTitle}>Adicionar saldo</Text>
        <Text style={styles.pageDescription}>
          Informe o valor que deseja adicionar à sua carteira.
        </Text>
      </View>

      <View style={styles.formCard}>
        <Text style={styles.inputLabel}>Valor desejado</Text>

        <View style={styles.amountInputContainer}>
          <Text style={styles.currencyPrefix}>R$</Text>
          <TextInput
            style={styles.amountInput}
            value={amount}
            onChangeText={(value) => setAmount(formatAmount(value))}
            placeholder="0,00"
            placeholderTextColor="#A0AEC0"
            keyboardType="number-pad"
            accessibilityLabel="Valor para adicionar"
          />
        </View>

        <Text style={styles.helperText}>Digite o valor em reais.</Text>

        <Text style={[styles.inputLabel, { marginTop: 26 }]}>
          Forma de pagamento
        </Text>

        {[
          {
            name: 'Pix',
            description: 'Pagamento instantâneo',
            icon: 'qr-code-outline',
          },
          {
            name: 'Cartão',
            description: 'Cartão de crédito ou débito',
            icon: 'card-outline',
          },
          {
            name: 'Boleto',
            description: 'Pagamento por boleto bancário',
            icon: 'barcode-outline',
          },
        ].map((method) => {
          const selected = paymentMethod === method.name;

          return (
            <TouchableOpacity
              key={method.name}
              style={[
                styles.paymentOption,
                selected && styles.paymentOptionSelected,
              ]}
              onPress={() => setPaymentMethod(method.name)}
              accessibilityRole="radio"
              accessibilityState={{ selected }}
            >
              <Ionicons
                name={method.icon}
                size={25}
                color={selected ? BLUE : GRAY}
              />

              <View style={styles.paymentText}>
                <Text style={styles.paymentTitle}>{method.name}</Text>
                <Text style={styles.paymentDescription}>
                  {method.description}
                </Text>
              </View>

              <Ionicons
                name={selected ? 'radio-button-on' : 'radio-button-off'}
                size={22}
                color={selected ? BLUE : '#A0AEC0'}
              />
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleContinueAdd}
          accessibilityRole="button"
        >
          <Text style={styles.primaryButtonText}>Continuar</Text>
          <Ionicons
            name="arrow-forward"
            size={20}
            color={colors.white}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backTextButton}
          onPress={() => setCurrentScreen('wallet')}
        >
          <Text style={styles.backText}>Voltar para a carteira</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  const renderRedeemCode = () => (
    <>
      <View style={styles.screenHeading}>
        <View style={styles.redeemLargeIcon}>
          <Ionicons name="ticket-outline" size={35} color="#15965B" />
        </View>

        <Text style={styles.pageTitle}>Resgatar código</Text>
        <Text style={styles.pageDescription}>
          Insira o código que você recebeu para consultar o resgate.
        </Text>
      </View>

      <View style={styles.formCard}>
        <Text style={styles.inputLabel}>Código de resgate</Text>

        <View style={styles.codeInputContainer}>
          <Ionicons name="key-outline" size={22} color={GRAY} />
          <TextInput
            style={styles.codeInput}
            value={redeemCode}
            onChangeText={setRedeemCode}
            placeholder="Digite seu código"
            placeholderTextColor="#A0AEC0"
            autoCapitalize="characters"
            autoCorrect={false}
            accessibilityLabel="Código de resgate"
          />
        </View>

        <View style={styles.tipCard}>
          <Ionicons
            name="information-circle-outline"
            size={22}
            color={BLUE}
          />
          <Text style={styles.tipText}>
            Confira se digitou o código corretamente antes de continuar.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleRedeem}
          accessibilityRole="button"
        >
          <Text style={styles.primaryButtonText}>Continuar</Text>
          <Ionicons
            name="arrow-forward"
            size={20}
            color={colors.white}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backTextButton}
          onPress={() => setCurrentScreen('wallet')}
        >
          <Text style={styles.backText}>Voltar para a carteira</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}

      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {currentScreen === 'wallet' && renderWallet()}
          {currentScreen === 'add' && renderAddBalance()}
          {currentScreen === 'redeem' && renderRedeemCode()}
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.footer}>
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerTitle}>Precisa de ajuda?</Text>
          <Text style={styles.footerSubtitle}>
            Nossa equipe está aqui para você.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => setSupportVisible(true)}
          accessibilityRole="button"
        >
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={19}
            color={BLUE}
          />
          <Text style={styles.footerButtonText}>Suporte</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={supportVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setSupportVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setSupportVisible(false)}
              accessibilityRole="button"
              accessibilityLabel="Fechar suporte"
            >
              <Ionicons name="close" size={25} color={TEXT} />
            </TouchableOpacity>

            <View style={styles.modalIcon}>
              <Ionicons name="headset-outline" size={31} color={BLUE} />
            </View>

            <Text style={styles.modalTitle}>Fale com o suporte</Text>
            <Text style={styles.modalDescription}>
              Escolha um dos contatos demonstrativos abaixo.
            </Text>

            <View style={styles.contactRow}>
              <Ionicons name="call-outline" size={22} color={BLUE} />
              <View style={styles.contactText}>
                <Text style={styles.contactLabel}>Atendimento</Text>
                <Text style={styles.contactNumber}>(11) 4000-1234</Text>
              </View>
            </View>

            <View style={styles.contactRow}>
              <Ionicons
                name="chatbubble-outline"
                size={22}
                color={BLUE}
              />
              <View style={styles.contactText}>
                <Text style={styles.contactLabel}>Central de ajuda</Text>
                <Text style={styles.contactNumber}>(11) 4000-5678</Text>
              </View>
            </View>

            <Text style={styles.disclaimer}>
              Os números são fictícios e usados apenas na demonstração.
            </Text>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => setSupportVisible(false)}
            >
              <Text style={styles.primaryButtonText}>Fechar</Text>
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
    backgroundColor: BACKGROUND,
  },
  header: {
    backgroundColor: BLUE,
    paddingTop: Platform.OS === 'web' ? 20 : 48,
    paddingHorizontal: 20,
    paddingBottom: 23,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.17)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitles: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1,
  },
  headerSubtitle: {
    color: '#E2E2FF',
    fontSize: 12,
    marginTop: 5,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 23,
    paddingBottom: 28,
  },
  pageTitle: {
    color: TEXT,
    fontSize: 25,
    fontWeight: '800',
    marginBottom: 7,
  },
  pageDescription: {
    color: GRAY,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 22,
  },
  balanceCard: {
    backgroundColor: BLUE,
    borderRadius: 22,
    padding: 22,
    marginBottom: 27,
  },
  balanceTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 21,
  },
  balanceIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceLabel: {
    color: '#E2E2FF',
    fontSize: 14,
  },
  balanceValue: {
    color: colors.white,
    fontSize: 29,
    fontWeight: '800',
    marginTop: 6,
  },
  balanceCaption: {
    color: '#E2E2FF',
    fontSize: 12,
    marginTop: 10,
  },
  sectionTitle: {
    color: TEXT,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 14,
  },
  actionCard: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
    borderWidth: 1,
    borderColor: '#EEEEF8',
  },
  actionIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: LIGHT_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  redeemIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#E7F8EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    flex: 1,
    marginHorizontal: 13,
  },
  actionTitle: {
    color: TEXT,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 5,
  },
  actionDescription: {
    color: GRAY,
    fontSize: 12,
    lineHeight: 18,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginTop: 5,
    gap: 9,
  },
  secondaryButtonText: {
    color: BLUE,
    fontSize: 14,
    fontWeight: '700',
  },
  screenHeading: {
    alignItems: 'center',
    marginBottom: 7,
  },
  largeIcon: {
    width: 72,
    height: 72,
    borderRadius: 23,
    backgroundColor: LIGHT_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 17,
  },
  redeemLargeIcon: {
    width: 72,
    height: 72,
    borderRadius: 23,
    backgroundColor: '#E7F8EF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 17,
  },
  formCard: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: '#EEEEF8',
  },
  inputLabel: {
    color: TEXT,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 11,
  },
  amountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 14,
    paddingHorizontal: 15,
    minHeight: 61,
  },
  currencyPrefix: {
    color: BLUE,
    fontSize: 20,
    fontWeight: '800',
    marginRight: 12,
  },
  amountInput: {
    flex: 1,
    color: TEXT,
    fontSize: 23,
    fontWeight: '700',
    paddingVertical: 12,
  },
  helperText: {
    color: GRAY,
    fontSize: 12,
    marginTop: 8,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 14,
    padding: 14,
    marginBottom: 11,
  },
  paymentOptionSelected: {
    borderColor: BLUE,
    backgroundColor: LIGHT_BLUE,
  },
  paymentText: {
    flex: 1,
    marginLeft: 12,
  },
  paymentTitle: {
    color: TEXT,
    fontSize: 14,
    fontWeight: '700',
  },
  paymentDescription: {
    color: GRAY,
    fontSize: 12,
    marginTop: 4,
  },
  primaryButton: {
    backgroundColor: BLUE,
    borderRadius: 14,
    minHeight: 53,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    gap: 10,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '800',
  },
  backTextButton: {
    alignItems: 'center',
    paddingVertical: 17,
  },
  backText: {
    color: BLUE,
    fontSize: 14,
    fontWeight: '700',
  },
  codeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 14,
    paddingHorizontal: 14,
    minHeight: 57,
    gap: 10,
  },
  codeInput: {
    flex: 1,
    color: TEXT,
    fontSize: 15,
    paddingVertical: 12,
  },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: LIGHT_BLUE,
    borderRadius: 13,
    padding: 13,
    marginTop: 20,
    gap: 10,
  },
  tipText: {
    flex: 1,
    color: DARK_BLUE,
    fontSize: 12,
    lineHeight: 18,
  },
  footer: {
    backgroundColor: BLUE,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  footerTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '800',
  },
  footerSubtitle: {
    color: '#E2E2FF',
    fontSize: 11,
    marginTop: 4,
  },
  footerButton: {
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 11,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  footerButtonText: {
    color: BLUE,
    fontSize: 13,
    fontWeight: '800',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 15, 70, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 22,
  },
  modalCard: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: colors.white,
    borderRadius: 23,
    padding: 23,
  },
  modalClose: {
    alignSelf: 'flex-end',
    padding: 2,
  },
  modalIcon: {
    width: 62,
    height: 62,
    borderRadius: 20,
    backgroundColor: LIGHT_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 15,
  },
  modalTitle: {
    color: TEXT,
    fontSize: 21,
    fontWeight: '800',
    textAlign: 'center',
  },
  modalDescription: {
    color: GRAY,
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 19,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BACKGROUND,
    padding: 14,
    borderRadius: 13,
    marginBottom: 10,
    gap: 12,
  },
  contactText: {
    flex: 1,
  },
  contactLabel: {
    color: GRAY,
    fontSize: 12,
    marginBottom: 4,
  },
  contactNumber: {
    color: TEXT,
    fontSize: 15,
    fontWeight: '800',
  },
  disclaimer: {
    color: GRAY,
    fontSize: 11,
    lineHeight: 16,
    textAlign: 'center',
    marginTop: 8,
  },
});

