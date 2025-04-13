import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import BackgroundGradientImageWrapper from '@components/backgroundGradientImageWrapper/BackgroundGradientImageWrapper';
import AppButton from '@components/appButton/AppButton';
import LottieAnimation from '@components/LottieAnimation';

import homeAnimation from '@assets/lotties/homeAnimation.json';

import HomeHeader from './homeHeader/HomeHeader';

import styles from './HomeScreen.styles';

function HomeScreen() {

  function renderMainContent() {

    const joinNowControlAttributes = {
      title: 'Join Now',
      rounded: true,
      onPress() {}
    };

    const lottieAnimationAttributes = {
      animationSource: homeAnimation,
      loop: true,
      animationStyle: styles.homeAnimation
    };

    return (
      <ScrollView>
        <View style={styles.homeScreenMain}>

          <View style={styles.headingContainer}>
            <Text style={styles.mainText}>Discover</Text>
            <Text style={styles.mainText}>Deep Space</Text>
          </View>

          <LottieAnimation {...lottieAnimationAttributes} />

          <Text style={styles.landingInformationText}>Embark on an interstellar journey to explore uncharted territories, connect with
            fellow space enthusiasts, and leave your mark on the galaxy!</Text>

          <View style={styles.buttonWrapper}>
            <AppButton {...joinNowControlAttributes} />
          </View>

        </View>
      </ScrollView>
    );

  }

  return (
    <BackgroundGradientImageWrapper>
      <HomeHeader />
      {renderMainContent()}
    </BackgroundGradientImageWrapper>
  );

}

export default HomeScreen;