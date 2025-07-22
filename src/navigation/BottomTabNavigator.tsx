import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import screenNames from '@constants/screenNames';
import bottomTabNavigatorConfig from '@constants/navigation/bottomTabNavigator';

import { IBottomTabScreenConfig } from '@interfaces/uiInterfaces/navigation';

import { colors } from '@styles/colors';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {

  function renderTabBarIcon(params: any, tab: IBottomTabScreenConfig) {

    const iconAttributes = {
      name: params.focused ? tab.solidIconName : tab.outlineIconName,
      size: params.size - 3,
      color: params.color
    };

    return <Icon {...iconAttributes} />
  }

  function renderTab(tab: IBottomTabScreenConfig, index: number) {

    const tabAttributes = {
      name: tab.tabName,
      component: tab.component,
      options: {
        tabBarIcon: (params: any) => renderTabBarIcon(params, tab),
        tabBarLabel: tab.label,
      }
    };

    return <Tab.Screen {...tabAttributes} key={index} />;
  }

  const tabNavigatorAttributes = {
    initialRouteName: screenNames.DASHBOARD_HOME,
    screenOptions: {
      headerShown: false,
      tabBarActiveTintColor: colors.white,
      tabBarInactiveTintColor: colors.tertiary,
      tabBarStyle: {
        backgroundColor: colors.primaryBackground,
      },
      tabBarLabelStyle: {
        marginBottom: 4,
        fontWeight: "500",
        fontSize: 10.5,
      },
      tabBarIconStyle: {
        marginTop: 4,
        marginBottom: 3,
      },
    }
  };

  return (
    <Tab.Navigator {...tabNavigatorAttributes}>
      {
        bottomTabNavigatorConfig.map((tab, index) => (
          renderTab(tab, index)
        ))
      }
    </Tab.Navigator>
  );

}

export default BottomTabNavigator;