import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Input from '../components/Input';
import PrimaryButton from '../components/PrimaryButton';

import { colors } from '../styles/theme';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleRegister() {
    // Por enquanto, apenas volta para o login.
    // Depois podemos colocar o cadastro real aqui.
    navigation.navigate('Login');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >

      {/* Decoração superior */}
      <View style={styles.topDecoration} />

      <View style={styles.content}>

        <Text style={styles.title}>
          Bem Vindo
        </Text>

        <View style={styles.form}>

          <Input
            placeholder="coloque seu nome"
            value={name}
            onChangeText={setName}
          />

          <Input
            placeholder="coloque seu email"
            value={email}
            onChangeText={setEmail}
          />

          <View style={styles.passwordContainer}>

            <Input
              placeholder="coloque sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />

            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={
                  showPassword
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
            onPress={handleRegister}
          />

        </View>

      </View>

      {/* Decoração inferior */}
      <View style={styles.bottomDecoration} />

    </KeyboardAvoidingView>
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