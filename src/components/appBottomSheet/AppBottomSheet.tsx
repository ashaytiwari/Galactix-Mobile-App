import React from 'react';
import { TouchableOpacity } from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import { IAppBottomSheetProps } from '@interfaces/uiInterfaces/generic';

import styles from './AppBottomSheet.styles';

const ANIMATION_DURATION = 500;

const AppBottomSheet: React.FC<IAppBottomSheetProps> = (props) => {

  const { children, open, onClose } = props;

  const height = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(open.value ? 0 : 1, { duration: ANIMATION_DURATION })
  );

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: progress.value * 2 * height.value }],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: open.value
      ? 1
      : withDelay(ANIMATION_DURATION, withTiming(-1, { duration: 0 })),
  }));

  return (
    <>
      <Animated.View style={[styles.appBottomSheetMain, backdropStyle]}>
        <TouchableOpacity style={styles.flex} onPress={onClose} />
      </Animated.View>
      <Animated.View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={[styles.sheet, sheetStyle]}>
        {children}
      </Animated.View>
    </>
  );

};

export default AppBottomSheet;