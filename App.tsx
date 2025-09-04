import React from 'react';
import { View } from 'react-native';

import { useMMKVStorage } from 'react-native-mmkv-storage';

import { useAppDispatch, useAppSelector } from '@hooks/redux';

import AuthStackNavigator from '@navigation/AuthStackNavigator';
import AppStackNavigator from '@navigation/AppStackNavigator';

import { appPopupAction } from '@store/slices/ui/appPopup';

import AppPopup from '@components/appPopup/AppPopup';
import AppProvider from '@components/AppProvider';

import { MMKV, STORAGE_KEYS } from '@utilities/mmkvStorage';

import { colors } from '@styles/colors';

function App() {

  const dispatch = useAppDispatch();
  const [userAuthDetails] = useMMKVStorage(STORAGE_KEYS.USER_AUTH_DETAILS, MMKV);

  const appPopupState = useAppSelector((state) => state.ui.appPopup);

  function renderAppNavigator() {

    if (userAuthDetails) {
      return <AppStackNavigator />;
    }

    return <AuthStackNavigator />;
  }

  const appPopupAttributes = {
    title: appPopupState.title,
    message: appPopupState.message,
    open: appPopupState.open,
    onClose() {
      dispatch(appPopupAction.close());
    },
    hideCloseButton: appPopupState.hideCloseButton,
    footerControls: appPopupState.footerControls
  };

  return (
    <View style={{ backgroundColor: colors.primaryBackground, flex: 1 }}>
      <AppProvider>
        {renderAppNavigator()}
        <AppPopup {...appPopupAttributes} />
      </AppProvider>
    </View>
  );

}

export default App;