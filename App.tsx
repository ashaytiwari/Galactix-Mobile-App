import React from 'react';

import HomeScreen from '@screens/homeScreen/HomeScreen';

import AppStatusBar from '@components/AppStatusBar';

function App() {

  return (
    <AppStatusBar>
      <HomeScreen />
    </AppStatusBar>
  );

}

export default App;