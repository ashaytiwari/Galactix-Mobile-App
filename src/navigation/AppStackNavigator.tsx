import React from 'react';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import screenNames from '@constants/screenNames';

import CommunityRoom from '@screens/communityRoom/CommunityRoom';
import CommunityEditor from '@screens/communityEditor/CommunityEditor';

import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

function AppStackNavigator() {

  const stackNavigatorAttributes = {
    screenOptions: {
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }
  };

  return (
    <Stack.Navigator {...stackNavigatorAttributes} initialRouteName={screenNames.BOTTOM_TABS}>
      <Stack.Screen name={screenNames.BOTTOM_TABS} component={BottomTabNavigator} />
      <Stack.Screen name={screenNames.COMMUNITY_ROOM} component={CommunityRoom} />
      <Stack.Screen name={screenNames.COMMUNITY_EDITOR} component={CommunityEditor} />
    </Stack.Navigator>
  );

}

export default AppStackNavigator;