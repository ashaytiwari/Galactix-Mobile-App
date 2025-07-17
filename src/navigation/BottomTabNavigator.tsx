import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import screenNames from '@constants/screenNames';
import DashboardHome from '@screens/dashboardHome/DashboardHome';
import Communities from '@screens/communities/Communities';

const Tab = createBottomTabNavigator();

const tabNavigatorConfig = [
  {
    tabName: screenNames.DASHBOARD_HOME,
    component: DashboardHome
  },
  {
    tabName: screenNames.COMMUNITIES,
    component: Communities
  },
];

function BottomTabNavigator() {

  function renderTab(tab: any, index: number) {

    const tabAttributes = {
      name: tab.tabName,
      component: tab.component,
    };

    return <Tab.Screen {...tabAttributes} key={index} />;
  }

  return (
    <Tab.Navigator initialRouteName={screenNames.DASHBOARD_HOME}>
      {
        tabNavigatorConfig.map((tab, index) => (
          renderTab(tab, index)
        ))
      }
    </Tab.Navigator>
  );

}

export default BottomTabNavigator;