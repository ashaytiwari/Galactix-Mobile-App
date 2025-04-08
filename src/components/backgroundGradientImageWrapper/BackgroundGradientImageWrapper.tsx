import React from 'react';

import { ImageBackground, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { IBackgroundGradientImageWrapperProps } from '@interfaces/uiInterfaces/generic';

import { colors } from '@styles/colors';

import styles from './BackgroundGradientImageWrapper.styles';

const BackgroundGradientImageWrapper: React.FC<IBackgroundGradientImageWrapperProps> = (props) => {

  const { children } = props;

  const imageBackgroundAttributes = {
    source: require('../../assets/images/homeBg.jpg'),
    style: styles.imageBackgroundContainer
  };

  const linearGradientElementAttributes = {
    style: styles.gradient,
    colors: [colors.homeGradientBlack, colors.homeGradientBlack, colors.homeGradientBlack]
  };

  return (
    <ImageBackground {...imageBackgroundAttributes} resizeMode='cover'>
      <View style={styles.gradientContainer}>
        <LinearGradient {...linearGradientElementAttributes} />
        {children}
      </View>
    </ImageBackground>
  );
};

export default BackgroundGradientImageWrapper;