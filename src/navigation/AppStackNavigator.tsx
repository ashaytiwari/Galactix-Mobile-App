import React from 'react';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import screenNames from '@constants/screenNames';

import AddCommunityScreen from '@screens/communityEditor/AddCommunityScreen';
import CommunityRoom from '@screens/communityRoom/CommunityRoom';
import CommunityDetails from '@screens/communityDetails/CommunityDetails';

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
      <Stack.Screen name={screenNames.COMMUNITY_EDITOR} component={AddCommunityScreen} />
      <Stack.Screen name={screenNames.COMMUNITY_DETAILS} component={CommunityDetails} />
    </Stack.Navigator>
  );

}

export default AppStackNavigator;