import React from 'react';
import { Text, View } from 'react-native';

import { ISpinnerProps } from '@interfaces/uiInterfaces/generic';

import LottieAnimation from '@components/LottieAnimation';

import runningSpacemanAnimation from '@assets/lotties/runningSpaceman.json';

import styles from './Spinner.styles';

const Spinner: React.FC<ISpinnerProps> = (props) => {

  const { transparentBackground } = props;

  const lottieAnimationAttributes = {
    animationSource: runningSpacemanAnimation,
    loop: true,
    animationStyle: styles.spinnerAnimation
  };

  let spinnerStyle: any = [styles.spinnerMain];

  if (transparentBackground === true) {
    spinnerStyle.push(styles.transparentSpinnerContainer)
  }

  return (
    <View style={spinnerStyle}>
      <LottieAnimation {...lottieAnimationAttributes} />
      <Text style={styles.spinnerText}>Loading, Please wait....</Text>
    </View>
  );

};

export default Spinner;