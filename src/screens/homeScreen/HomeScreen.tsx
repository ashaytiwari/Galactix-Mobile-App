import React from 'react';
import { Text, View } from 'react-native';

import BackgroundGradientImageWrapper from '@components/backgroundGradientImageWrapper/BackgroundGradientImageWrapper';

import HomeHeader from './homeHeader/HomeHeader';

import styles from './HomeScreen.styles';

function HomeScreen() {

  return (
    <BackgroundGradientImageWrapper>
      <HomeHeader />
      <View style={styles.headingContainer}>
        <Text style={styles.mainText}>Discover</Text>
        <Text style={styles.mainText}>Deep Space</Text>
      </View>
    </BackgroundGradientImageWrapper>
  );

}

export default HomeScreen;