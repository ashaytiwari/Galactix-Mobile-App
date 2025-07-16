import React from 'react';

import AuthStackNavigator from '@navigation/AuthStackNavigator';

import { useAppDispatch, useAppSelector } from '@hooks/redux';

import { appPopupAction } from '@store/slices/ui/appPopup';

import AppPopup from '@components/appPopup/AppPopup';
import AppProvider from '@components/AppProvider';

function App() {

  const dispatch = useAppDispatch();

  const appPopupState = useAppSelector((state) => state.ui.appPopup);

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
    <AppProvider>
      <AuthStackNavigator />
      <AppPopup {...appPopupAttributes} />
    </AppProvider>
  );

}

export default App;