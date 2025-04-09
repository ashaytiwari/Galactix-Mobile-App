import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { IButtonProps } from '@interfaces/uiInterfaces/generic';

import styles from './AppButton.styles';

const AppButton: React.FC<IButtonProps> = (props) => {

  const { title, rounded, containerStyle, content, onPress } = props;

  let appButtonStyle = rounded === true ? [styles.appButtonMain, { borderRadius: 20 }] : styles.appButtonMain;

  if (containerStyle) {
    appButtonStyle = containerStyle;
  }

  return (
    <Pressable onPress={onPress}>
      <View style={appButtonStyle}>
        {content ? content : (<Text style={styles.buttonText}>{title}</Text>)}
      </View>
    </Pressable>
  );

};

export default AppButton;