import React from 'react';
import { Text, View } from 'react-native';

import { IAppAvatarProps } from '@interfaces/uiInterfaces/generic';

import { extractAvatarCharacters } from '@utilities';

import styles from './AppAvatar.styles';

const AppAvatar: React.FC<IAppAvatarProps> = (props) => {

  const { text, textStyle, containerStyle } = props;

  const avatarText = extractAvatarCharacters(text);

  const avatarContainerStyle = containerStyle || styles.appAvatarMain;
  const avatarTextStyle = textStyle || styles.avatarText;

  return (
    <View style={avatarContainerStyle}>
      <Text style={avatarTextStyle}>{avatarText}</Text>
    </View>
  );

};

export default AppAvatar;