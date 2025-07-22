import React from 'react';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import screenNames from '@constants/screenNames';
import authScreenConfig from '@constants/navigation/authStackNavigator';

import { IAuthScreenConfig } from '@interfaces/uiInterfaces/navigation';

import { AuthStackParamList } from './types';

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {

  function renderStackScreen(screen: IAuthScreenConfig, index: number) {

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