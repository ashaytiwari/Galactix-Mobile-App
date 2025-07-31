import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMMKVStorage } from 'react-native-mmkv-storage';

import { useGetUserProfile } from '@hooks/queriesMutations/users';

import screenNames from '@constants/screenNames';
import bottomTabNavigatorConfig from '@constants/navigation/bottomTabNavigator';

import { IBottomTabScreenConfig } from '@interfaces/uiInterfaces/navigation';

import AppAvatar from '@components/appAvatar/AppAvatar';
import Spinner from '@components/spinner/Spinner';

import { MMKV, STORAGE_KEYS } from '@utilities/mmkvStorage';

import { colors } from '@styles/colors';

import styles from './Navigation.styles';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {

  const [userAuthDetails]: any = useMMKVStorage(STORAGE_KEYS.USER_AUTH_DETAILS, MMKV);

  const userProfileQuery = useGetUserProfile(userAuthDetails?._id);

  function renderTabBarIcon(params: any, tab: IBottomTabScreenConfig) {

    if (tab.tabName === screenNames.PROFILE) {

      const appAvatarAttributes = {
        text: `${userAuthDetails.firstName} ${userAuthDetails.lastName}`,
        containerStyle: params.focused ? [styles.appAvatarContainer, styles.activeAvatar] : styles.appAvatarContainer,
        textStyle: params.focused ? [styles.appAvatarText, styles.activeAvatarText] : styles.appAvatarText
      };

      return <AppAvatar {...appAvatarAttributes} />;

    }

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

  if (userProfileQuery.isPending === true) {
    return <Spinner />;
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
        marginTop: 2,
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