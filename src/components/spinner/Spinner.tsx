import React from 'react';
import { Text, View } from 'react-native';

import LottieAnimation from '@components/LottieAnimation';

import runningSpacemanAnimation from '@assets/lotties/runningSpaceman.json';

import styles from './Spinner.styles';

const Spinner = () => {

  const lottieAnimationAttributes = {
    animationSource: runningSpacemanAnimation,
    loop: true,
    animationStyle: styles.spinnerAnimation
  };

  return (
    <View style={styles.spinnerMain}>
      <LottieAnimation {...lottieAnimationAttributes} />
      <Text style={styles.spinnerText}>Loading, Please wait....</Text>
    </View>
  );

};

export default Spinner;