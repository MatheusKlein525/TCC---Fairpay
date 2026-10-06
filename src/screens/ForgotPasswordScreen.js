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

import { colors } from '../styles/theme';

export default function ForgotPasswordScreen({ navigation }) {

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleSave() {
    // Por enquanto, volta para o login.
    // Depois podemos colocar a alteração real da senha.
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>

      {/* Decoração superior */}
      <View style={styles.topDecoration} />

      <View style={styles.content}>

        <Text style={styles.title}>
          Esqueci Minha Senha:
        </Text>

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
              onPress={() =>
                setShowNewPassword(!showNewPassword)
              }
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
              onPress={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
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

      {/* Decoração inferior */}
      <View style={styles.bottomDecoration} />

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

  topDecoration: {
    position: 'absolute',

    width: 150,
    height: 100,

    borderBottomRightRadius: 100,

    borderBottomWidth: 1,
    borderRightWidth: 1,

    borderColor: '#65D5A8',

    top: -40,
    left: -40,
  },

  bottomDecoration: {
    position: 'absolute',

    width: 140,
    height: 100,

    borderTopLeftRadius: 100,

    borderTopWidth: 1,
    borderLeftWidth: 1,

    borderColor: '#65D5A8',

    bottom: -40,
    right: -40,
  },

});