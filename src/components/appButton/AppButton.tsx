import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { IButtonProps } from '@interfaces/uiInterfaces/generic';

import styles from './AppButton.styles';

const AppButton: React.FC<IButtonProps> = (props) => {

  const { title, rounded, containerStyle, textStyle, content, disabled, onPress } = props;

  let appButtonStyle = rounded === true ? [styles.appButtonMain, { borderRadius: 20 }] : styles.appButtonMain;

  if (containerStyle) {
    appButtonStyle = [appButtonStyle, containerStyle];
  }

  let buttonTextStyle = textStyle ? textStyle : styles.buttonText;

  const pressableAttributes = {
    disabled: disabled || false,
    onPress
  };

  return (
    <TouchableOpacity {...pressableAttributes}>
      <View style={appButtonStyle}>
        {content ? content : (<Text style={buttonTextStyle}>{title}</Text>)}
      </View>
    </TouchableOpacity>
  );

};

export default AppButton;