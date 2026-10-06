import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SupportScreen from '../screens/SupportScreen';
import OrdersScreen from '../screens/OrdersScreen';
import AddBalanceScreen from '../screens/AddBalanceScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >

      {/* AUTENTICAÇÃO */}

      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />


      {/* APLICAÇÃO */}

      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />

      <Stack.Screen
        name="History"
        component={HistoryScreen}
      />

      <Stack.Screen
        name="Support"
        component={SupportScreen}
      />

      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
      />

      <Stack.Screen
        name="AddBalance"
        component={AddBalanceScreen}
      />

    </Stack.Navigator>
  );
}