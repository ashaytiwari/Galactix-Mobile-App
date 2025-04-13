import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from '@navigation/AuthStackNavigator';

import AppStatusBar from '@components/AppStatusBar';

function App() {

  return (
    <AppStatusBar>
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    </AppStatusBar>
  );

}

export default App;