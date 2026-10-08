import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Input from '../components/Input';
import PrimaryButton from '../components/PrimaryButton';
import BackgroundWaves from '../components/BackgroundWaves';

import { colors } from '../styles/theme';

export default function ForgotPasswordScreen({ navigation }) {

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleSave() {

    if (!newPassword.trim() || !confirmPassword.trim()) {
      alert('Preencha todos os campos.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('As senhas não são iguais.');
      return;
    }

    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>

      {/* ONDAS DE FUNDO */}

      <BackgroundWaves />


      {/* CONTEÚDO */}

      <View style={styles.content}>

        <Text style={styles.title}>
          Esqueci Minha Senha:
        </Text>


        {/* FORMULÁRIO */}

        <View style={styles.form}>

          {/* NOVA SENHA */}

          <View style={styles.passwordContainer}>

            <Input
              placeholder="insira a nova senha"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={!showNewPassword}
            />

            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowNewPassword(!showNewPassword)}
            >
              <Ionicons
                name={
                  showNewPassword
                    ? 'eye-outline'
                    : 'eye-off-outline'
                }
                size={18}
                color="#999"
              />
            </TouchableOpacity>

          </View>


          {/* CONFIRMAR SENHA */}

          <View style={styles.passwordContainer}>

            <Input
              placeholder="confirme sua senha"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
            />

            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Ionicons
                name={
                  showConfirmPassword
                    ? 'eye-outline'
                    : 'eye-off-outline'
                }
                size={18}
                color="#999"
              />
            </TouchableOpacity>

          </View>


          <PrimaryButton
            title="Salvar"
            onPress={handleSave}
          />

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,

    zIndex: 1,
  },

  title: {
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
    marginBottom: 28,
  },

  form: {
    width: '100%',
  },

  passwordContainer: {
    position: 'relative',
  },

  eyeButton: {
    position: 'absolute',
    right: 12,
    top: 14,

    zIndex: 10,
  },

});