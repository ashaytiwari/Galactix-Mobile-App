import React from 'react';
import { Image, View } from 'react-native';

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
    rounded: true,
    containerStyle: styles.loginControl,
    textStyle: styles.loginControlText,
    onPress() { }
  };

  return (
    <View style={styles.homeHeaderContainer}>
      <Image {...appLogoImageAttributes} />
      <AppButton {...loginControlAttributes} />
    </View>
  );
};

export default HomeHeader;

