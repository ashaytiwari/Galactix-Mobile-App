import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { useAppSelector } from '@hooks/redux';

import { IChildrenProps } from '@interfaces/uiInterfaces/generic';

const AppStatusBar: React.FC<IChildrenProps> = (props) => {

  const { children } = props;

  const { statusBarBackgroundColor, statusBarStyle, backgroundColor } = useAppSelector((state) => state.ui.statusbar);

  return (
    <>
      <StatusBar backgroundColor={statusBarBackgroundColor} barStyle={statusBarStyle} />
      <SafeAreaView style={{ flex: 0, backgroundColor: statusBarBackgroundColor }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColor }}>
        {children}
      </SafeAreaView>
    </>
  );

};

export default AppStatusBar;