import React from 'react';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import screenNames from '@constants/screenNames';

import HomeScreen from '@screens/homeScreen/HomeScreen';
import LoginScreen from '@screens/loginScreen/LoginScreen';
import SignupScreen from '@screens/signupScreen/SignupScreen';

import { AuthStackParamList } from './types';

const Stack = createStackNavigator<AuthStackParamList>();

const authScreenConfig = [
  {
    screenName: screenNames.HOME,
    component: HomeScreen
  },
  {
    screenName: screenNames.LOGIN,
    component: LoginScreen
  },
  {
    screenName: screenNames.SIGNUP,
    component: SignupScreen
  },
];

function AuthStackNavigator() {

  function renderStackScreen(screen: any, index: number) {

    const stackScreenAttributes = {
      name: screen.screenName,
      component: screen.component,
    };

    return <Stack.Screen {...stackScreenAttributes} key={index} />;
  }

  const stackNavigatorAttributes = {
    screenOptions: {
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }
  };

  return (
    <Stack.Navigator {...stackNavigatorAttributes} initialRouteName={screenNames.HOME}>
      {
        authScreenConfig.map((screen, index) => (
          renderStackScreen(screen, index)
        ))
      }
    </Stack.Navigator>
  );

}

export default AuthStackNavigator;