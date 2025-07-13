import React from 'react';
import { View, Text, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';

import BackgroundGradientImageWrapper from '@components/backgroundGradientImageWrapper/BackgroundGradientImageWrapper';
import FormInputTextControl from '@components/formControls/FormInputTextControl';
import FormSecureInputControl from '@components/formControls/FormSecureInputControl';

import { colors } from '@styles/colors';

import { setDefaultSignupFormValues } from './utilities';

import styles from './SignupScreen.styles';

function SignupScreen() {

  const formik = useFormik({
    initialValues: setDefaultSignupFormValues(),
    validate: () => { },
    onSubmit: () => { }
  });
  const formikValues = formik.values;
  const formikErrors = formik.errors;

  const navigation = useNavigation<any>();

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
        <Text style={styles.heading}>Begin Your Interstellar Adventure 🚀</Text>
      </View>
    );

  }

  function renderFormCard() {

    const firstNameControlAttributes = {
      label: 'First Name*',
      placeholder: 'Enter First Name',
      value: formikValues.firstName,
      onChangeText(text: string) {
        formik.setFieldValue('firstName', text);
      }
    };

    const lastNameControlAttributes = {
      label: 'Last Name*',
      placeholder: 'Enter Last Name',
      value: formikValues.lastName,
      onChangeText(text: string) {
        formik.setFieldValue('lastName', text);
      }
    };

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

    return (
      <View style={styles.formCardContainer}>
        <ScrollView {...scrollViewContainerAttributes} keyboardShouldPersistTaps="handled">
          <View style={styles.signupForm}>
            <FormInputTextControl {...firstNameControlAttributes} />
            <FormInputTextControl {...lastNameControlAttributes} />
            <FormInputTextControl {...emailControlAttributes} />
            <FormSecureInputControl {...passwordControlAttributes} />
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

export default SignupScreen;