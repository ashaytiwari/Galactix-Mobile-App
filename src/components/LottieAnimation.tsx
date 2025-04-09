import React, { useEffect, useRef } from 'react';
import { AppState, StyleSheet, View } from 'react-native';

import LottieView from 'lottie-react-native';

import { ILottieAnimationProps } from '@interfaces/uiInterfaces/generic';

const LottieAnimation: React.FC<ILottieAnimationProps> = (props) => {

  const { animationSource, animationStyle, animationWrapperStyle, loop } = props;

  const animationRef = useRef<any>(null);

  const [isPlaying, setIsPlaying] = React.useState(true);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => {
      subscription.remove();
    };
  }, []);

  const handleAppStateChange = (nextAppState: string) => {

    if (nextAppState === 'background' || nextAppState === 'inactive') {
      animationRef.current.pause();
      setIsPlaying(false);
    } else if (nextAppState === 'active') {
      animationRef.current.play();
      setIsPlaying(true);
    }

  };

  const lottieViewAttributes = {
    ref: animationRef,
    source: animationSource,
    loop,
    autoPlay: isPlaying,
    style: animationStyle || styles.animationStyle,
  };

  let lottieAnimationClassName = animationWrapperStyle || styles.animationWrapperStyle;

  return (
    <View style={lottieAnimationClassName}>
      <LottieView {...lottieViewAttributes} />
    </View>
  );
};

export default LottieAnimation;

const styles = StyleSheet.create({
  animationWrapperStyle: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center'
  },
  animationStyle: {
    width: 200,
    height: 200
  }
});