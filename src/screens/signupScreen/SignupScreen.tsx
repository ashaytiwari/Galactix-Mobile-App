import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import BackgroundGradientImageWrapper from '@components/backgroundGradientImageWrapper/BackgroundGradientImageWrapper';

import styles from './SignupScreen.styles';

function SignupScreen() {

  function renderHeader() {

    return (
      <View style={styles.header}>
        <Text style={styles.heading}>Begin Your Interstellar Adventure 🚀</Text>
        <Icon name="home" size={30} color="#fff" />
      </View>
    );

  }

  function renderFormCard(){

    return (
      <View style={styles.formCardContainer}>
        <Text>Login Form</Text>
      </View>
    );

  }

  return (
    <BackgroundGradientImageWrapper>
      <View style={styles.signupScreenMain}>
        {renderHeader()}
        {renderFormCard()}
      </View>
    </BackgroundGradientImageWrapper>
  );

}

export default SignupScreen;