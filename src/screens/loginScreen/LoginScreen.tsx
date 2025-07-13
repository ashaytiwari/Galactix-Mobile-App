import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFormik } from 'formik';

import BackgroundGradientImageWrapper from '@components/backgroundGradientImageWrapper/BackgroundGradientImageWrapper';
import FormInputTextControl from '@components/formControls/FormInputTextControl';
import FormSecureInputControl from '@components/formControls/FormSecureInputControl';
import AppButton from '@components/appButton/AppButton';
import screenNames from '@constants/screenNames';

import { colors } from '@styles/colors';

import { setDefaultSigninFormValues } from './utilities';

import styles from './LoginScreen.styles';

function LoginScreen() {

  const formik = useFormik({
    initialValues: setDefaultSigninFormValues(),
    validate: () => { },
    onSubmit: () => { }
  });
  const formikValues = formik.values;
  const formikErrors = formik.errors;

  const navigation = useNavigation<any>();

  function navigateToSignup() {
    navigation.navigate(screenNames.SIGNUP);
  }

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
      <View style={styles.header}>
        <Pressable {...backControlAttributes}>
          <Icon {...backIconAttributes} />
        </Pressable>
        <Text style={styles.heading}>Welcome Back, Star Voyager! 🚀</Text>
      </View>
    );

  }

  function renderCreateAccountSection() {

    return (
      <View style={styles.createAccountContainer}>
        <Text style={styles.createAccountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={navigateToSignup}>
          <Text style={styles.createAccountSigninControl}>Create account</Text>
        </TouchableOpacity>
      </View>
    );

  }

  function renderFormCard() {


    const emailControlAttributes = {
      label: 'Email Address*',
      placeholder: 'Enter Email Address',
      keyboardType: 'email-address',
      value: formikValues.email,
      onChangeText(text: string) {
        formik.setFieldValue('email', text);
      }
    };

    const passwordControlAttributes = {
      label: 'Password*',
      placeholder: 'Enter Secure Password',
      value: formikValues.password,
      onChangeText(text: string) {
        formik.setFieldValue('password', text);
      }
    };

    const scrollViewContainerAttributes = {
      contentContainerStyle: styles.scrollViewContainer
    };

    const signinControlAttributes = {
      title: 'Signin',
      onPress() { }
    };

    return (
      <View style={styles.formCardContainer}>
        <ScrollView {...scrollViewContainerAttributes} keyboardShouldPersistTaps="handled">
          <View style={styles.signinForm}>

            <FormInputTextControl {...emailControlAttributes} />
            <FormSecureInputControl {...passwordControlAttributes} />

            <View style={styles.formFooter}>
              <AppButton {...signinControlAttributes} />
              {renderCreateAccountSection()}
            </View>

          </View>
        </ScrollView>
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
          {renderFormCard()}
        </BackgroundGradientImageWrapper>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );

}

export default LoginScreen;