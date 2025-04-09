import React from 'react';
import { Image, View } from 'react-native';

import { BlurView } from '@react-native-community/blur';

import AppButton from '@components/appButton/AppButton';

import appLogoImage from '@assets/images/appLogo.png';

import styles from './HomeHeader.styles';

const HomeHeader = () => {

  const appLogoImageAttributes = {
    source: appLogoImage,
    style: styles.appLogoImage
  };

  const loginControlAttributes = {
    title: 'Signin',
    onPress() { }
  };

  const blurViewAttributes = {
    blurAmount: 2,
    reducedTransparencyFallbackColor: 'white',
    style: styles.blurViewWrapper
  };

  return (
    <View style={styles.homeHeaderContainer}>

      <BlurView {...blurViewAttributes} blurType='dark' />

      <View style={styles.headerContentWrapper}>
        <Image {...appLogoImageAttributes} />
        <AppButton {...loginControlAttributes} />
      </View>

    </View>
  );
};

export default HomeHeader;

