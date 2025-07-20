import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';

import { useSigninUser } from '@hooks/queriesMutations/authentication';

import screenNames from '@constants/screenNames';

import FormInputTextControl from '@components/formControls/FormInputTextControl';
import FormSecureInputControl from '@components/formControls/FormSecureInputControl';
import AppButton from '@components/appButton/AppButton';
import AuthenticationLayout from '@components/authenticationLayout/AuthenticationLayout';

import { setDefaultSigninFormValues, validateSigninForm } from './utilities';

import styles from './LoginScreen.styles';

function LoginScreen() {

  const userSigninMutation = useSigninUser();

  const formik = useFormik({
    initialValues: setDefaultSigninFormValues(),
    validate: validateSigninForm,
    onSubmit() {
      userSigninMutation.mutate(formikValues);
    }
  });
  const formikValues = formik.values;
  const formikErrors = formik.errors;

  const navigation = useNavigation<any>();

  function navigateToSignup() {
    navigation.navigate(screenNames.SIGNUP);
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

    let emailError: string | undefined = '';
    let passwordError: string | undefined = '';

    if (formikErrors.email !== '' && formik.touched.email === true) {
      emailError = formikErrors.email;
    }

    if (formikErrors.password !== '' && formik.touched.password === true) {
      passwordError = formikErrors.password;
    }

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

    const signinControlAttributes = {
      title: userSigninMutation.isPending === true ? 'Please Wait.....' : 'Signin',
      disabled: userSigninMutation.isPending === true ? true : false,
      onPress() {
        formik.handleSubmit();
      }
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

  return (
    <AuthenticationLayout title='Welcome Back, Star Voyager! 🚀'>
      {renderFormCard()}
    </AuthenticationLayout>
  );

}

export default LoginScreen;