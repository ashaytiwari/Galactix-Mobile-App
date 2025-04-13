import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '@screens/homeScreen/HomeScreen';
import LoginScreen from '@screens/loginScreen/LoginScreen';

import { AuthStackParamList } from './types';

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {

  return (
    <Stack.Navigator initialRouteName='home'>
      <Stack.Screen name='home' component={HomeScreen} />
      <Stack.Screen name='login' component={LoginScreen} />
    </Stack.Navigator>
  );

}

export default AuthStackNavigator;