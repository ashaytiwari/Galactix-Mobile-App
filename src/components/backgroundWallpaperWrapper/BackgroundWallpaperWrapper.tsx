import React from 'react';
import { ImageBackground } from 'react-native';

import { BlurView } from '@react-native-community/blur';

import { IChildrenProps } from '@interfaces/uiInterfaces/generic';

import { colors } from '@styles/colors';

import styles from './BackgroundWallpaperWrapper.styles';

const BackgroundWallpaperWrapper: React.FC<IChildrenProps> = (props) => {

  const { children } = props;

  const imageBackgroundAttributes = {
    source: require('../../assets/images/dashboardBg1.webp'),
    style: styles.imageBackgroundContainer
  };

  const blurViewAttributes = {
    blurAmount: 1,
    blurRadius: 1,
    reducedTransparencyFallbackColor: colors.white,
    style: styles.blurView
  };

  return (
    <ImageBackground {...imageBackgroundAttributes} resizeMode='cover'>
      <BlurView {...blurViewAttributes} blurType='light'>
        {children}
      </BlurView>
    </ImageBackground>
  );

};

export default BackgroundWallpaperWrapper;