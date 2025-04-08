import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import HomeScreen from '@screens/homeScreen/HomeScreen';
import { colors } from '@styles/colors';

function App() {

  return (
    <View style={styles.rootContainer}>
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <StatusBar barStyle={'light-content'} backgroundColor={colors.primaryBackground} />
        <HomeScreen />
      </SafeAreaView>
    </View>
  );

}

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: colors.primaryBackground,
    flex: 1
  },
  safeAreaViewContainer: {
    flex: 1
  }
});