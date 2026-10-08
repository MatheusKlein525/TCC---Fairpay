import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Input from '../components/Input';
import PrimaryButton from '../components/PrimaryButton';
import BackgroundWaves from '../components/BackgroundWaves';

import { colors } from '../styles/theme';

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {

    if (!email.trim() || !password.trim()) {
      alert('Preencha o email e a senha.');
      return;
    }

    navigation.replace('Home');
  }

  return (
    <View style={styles.container}>

      {/* ONDAS DE FUNDO */}

      <BackgroundWaves />


      {/* LOGO */}

      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>


      {/* FORMULÁRIO */}

      <View style={styles.form}>

        <Input
          placeholder="insira o seu email"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          placeholder="insira a sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View style={styles.links}>

          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.link}>
              Criar uma conta
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.link}>
              Esqueci minha senha
            </Text>
          </TouchableOpacity>

        </View>

        <PrimaryButton
          title="Fazer Login"
          onPress={handleLogin}
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 25,
    justifyContent: 'center',
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,

    zIndex: 1,
  },

  logo: {
    width: 220,
    height: 100,
  },

  form: {
    width: '100%',

    zIndex: 1,
  },

  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: 25,
  },

  link: {
    fontSize: 9,
    color: colors.gray,
    textDecorationLine: 'underline',
  },

});