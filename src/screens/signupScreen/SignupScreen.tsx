import React, { useState } from 'react';
import { View, Text, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';

import screenNames from '@constants/screenNames';

import BackgroundGradientImageWrapper from '@components/backgroundGradientImageWrapper/BackgroundGradientImageWrapper';
import FormInputTextControl from '@components/formControls/FormInputTextControl';
import FormSecureInputControl from '@components/formControls/FormSecureInputControl';
import AppButton from '@components/appButton/AppButton';

import { colors } from '@styles/colors';

import SignupSecurityInfoForm from './signupSecurityInfoForm/SignupSecurityInfoForm';

import { setDefaultSignupFormValues, validateSignupPrimaryInfoForm } from './utilities';

import styles from './SignupScreen.styles';

function SignupScreen() {

  const [showSecurityInfoForm, setShowSecurityInfoForm] = useState(false);

  const formik = useFormik({
    initialValues: setDefaultSignupFormValues(),
    validate: validateSignupPrimaryInfoForm,
    onSubmit() {
      setShowSecurityInfoForm(true);
    }
  });
  const formikValues = formik.values;
  const formikErrors = formik.errors;

  const navigation = useNavigation<any>();

  function navigateToSignin() {
    navigation.navigate(screenNames.LOGIN);
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
        <Text style={styles.heading}>Begin Your Interstellar Adventure 🚀</Text>
      </View>
    );

  }

  function renderAlreadyHaveAnAccountSection() {

    return (
      <View style={styles.alreadyHaveAnAccountContainer}>
        <Text style={styles.alreadyHaveAnAccountText}>Already have an account?</Text>
        <TouchableOpacity onPress={navigateToSignin}>
          <Text style={styles.alreadyHaveAnAccountSigninControl}>Signin</Text>
        </TouchableOpacity>
      </View>
    );

  }

  function renderFormCard() {

    if (showSecurityInfoForm === true) {

      const signupSecurityInfoFormAttributes = {
        primaryInfoFormDetails: formikValues,
        onBack() {
          setShowSecurityInfoForm(false);
        }
      };

      return <SignupSecurityInfoForm {...signupSecurityInfoFormAttributes} />;
    }

    let firstNameError: string | undefined = '';
    let lastNameError: string | undefined = '';
    let emailError: string | undefined = '';
    let passwordError: string | undefined = '';

    if (formikErrors.firstName !== '' && formik.touched.firstName === true) {
      firstNameError = formikErrors.firstName;
    }

    if (formikErrors.lastName !== '' && formik.touched.lastName === true) {
      lastNameError = formikErrors.lastName;
    }

    if (formikErrors.email !== '' && formik.touched.email === true) {
      emailError = formikErrors.email;
    }

    if (formikErrors.password !== '' && formik.touched.password === true) {
      passwordError = formikErrors.password;
    }

    const firstNameControlAttributes = {
      label: 'First Name*',
      placeholder: 'Enter First Name',
      value: formikValues.firstName,
      error: firstNameError,
      onChangeText(text: string) {
        formik.setFieldValue('firstName', text);
      }
    };

    const lastNameControlAttributes = {
      label: 'Last Name*',
      placeholder: 'Enter Last Name',
      value: formikValues.lastName,
      error: lastNameError,
      onChangeText(text: string) {
        formik.setFieldValue('lastName', text);
      }
    };

    const emailControlAttributes = {
      label: 'Email Address*',
      placeholder: 'Enter Email Address',
      keyboardType: 'email-address',
      value: formikValues.email,
      error: emailError,
      onChangeText(text: string) {
        formik.setFieldValue('email', text);
      }
    };

    const passwordControlAttributes = {
      label: 'Password*',
      placeholder: 'Enter Secure Password',
      value: formikValues.password,
      error: passwordError,
      onChangeText(text: string) {
        formik.setFieldValue('password', text);
      }
    };

    const scrollViewContainerAttributes = {
      contentContainerStyle: styles.scrollViewContainer
    };

    const createAccountControlAttributes = {
      title: 'Create Account',
      onPress() {
        formik.handleSubmit();
      }
    };

    return (
      <View style={styles.formCardContainer}>
        <ScrollView {...scrollViewContainerAttributes} keyboardShouldPersistTaps="handled">
          <View style={styles.signupForm}>

            <FormInputTextControl {...firstNameControlAttributes} />
            <FormInputTextControl {...lastNameControlAttributes} />
            <FormInputTextControl {...emailControlAttributes} />
            <FormSecureInputControl {...passwordControlAttributes} />

            <View style={styles.formFooter}>
              <AppButton {...createAccountControlAttributes} />
              {renderAlreadyHaveAnAccountSection()}
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

export default SignupScreen;