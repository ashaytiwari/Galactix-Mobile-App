import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { IAuthenticationLayoutProps } from '@interfaces/uiInterfaces/generic';

import BackgroundGradientImageWrapper from '@components/backgroundGradientImageWrapper/BackgroundGradientImageWrapper';

import { colors } from '@styles/colors';

import styles from './AuthenticationLayout.styles';

const AuthenticationLayout: React.FC<IAuthenticationLayoutProps> = (props) => {

  const { title, children, headerStyle } = props;

  const navigation = useNavigation();

  function renderHeader() {

    const backControlAttributes = {
      onPress() {
        navigation.goBack();
      }
    };

    const backIconAttributes = {
      name: 'return-up-back',
      size: 40,
      color: colors.white,
    };

    return (
      <View style={headerStyle || styles.header}>
        <Pressable {...backControlAttributes}>
          <Icon {...backIconAttributes} />
        </Pressable>
        <Text style={styles.heading}>{title}</Text>
      </View>
    );

  }

  const keyboardAvoidingViewAttributes = {
    style: { flex: 1 },
    keyboardVerticalOffset: Platform.OS === 'ios' ? 100 : 30
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} {...keyboardAvoidingViewAttributes}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <BackgroundGradientImageWrapper>
          {renderHeader()}
          {children}
        </BackgroundGradientImageWrapper>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );

};

export default AuthenticationLayout;