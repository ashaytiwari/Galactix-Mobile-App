import React from 'react';
import { StatusBar } from 'react-native';

import { Edges, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { useAppSelector } from '@hooks/redux';

import { IChildrenProps } from '@interfaces/uiInterfaces/generic';

const AppStatusBar: React.FC<IChildrenProps> = (props) => {

  const { children } = props;

  const { statusBarBackgroundColor, statusBarStyle, backgroundColor } = useAppSelector((state) => state.ui.statusbar);

  const topSafeAreaViewAttributes = {
    edges: ['top'] as Edges,
    style: { flex: 0, backgroundColor: statusBarBackgroundColor },
  };

  const bottomSafeAreaViewAttributes = {
    edges: ['bottom'] as Edges,
    style: { flex: 1 },
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView {...topSafeAreaViewAttributes}>
        <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarBackgroundColor} />
      </SafeAreaView>
      <SafeAreaView {...bottomSafeAreaViewAttributes}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );

};

export default AppStatusBar;