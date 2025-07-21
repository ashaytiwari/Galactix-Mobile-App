import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/native';

import { useGetUserSecurityDetails, useResetPassword, useVerifyUserSecurityDetails } from '@hooks/queriesMutations/authentication';

import resetPasswordSteps from '@constants/resetPasswordSteps';
import screenNames from '@constants/screenNames';

import AuthenticationLayout from '@components/authenticationLayout/AuthenticationLayout';
import FormInputTextControl from '@components/formControls/FormInputTextControl';
import AppButton from '@components/appButton/AppButton';
import FormSecureInputControl from '@components/formControls/FormSecureInputControl';

import { validateResetPasswordEmailAddressForm, validateResetPasswordForm, validateResetPasswordSecurityDetailsForm } from './utilities';

import styles from './ForgotPassword.styles';

function ForgotPassword() {

  const navigation = useNavigation<any>();

  const [formStep, setFormStep] = useState(resetPasswordSteps.EMAIL_ADDRESS_FORM);
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchUserSecurityDetails = useGetUserSecurityDetails();
  const verifySecurityDetailsMutation = useVerifyUserSecurityDetails();
  const resetPasswordMutation = useResetPassword();

  const emailAddressFormik = useFormik({
    initialValues: { email: '' },
    validate: validateResetPasswordEmailAddressForm,
    onSubmit: handleEmailAddressFormSubmit
  });

  const securityDetailsFormik = useFormik({
    initialValues: { securityAnswer: '' },
    validate: validateResetPasswordSecurityDetailsForm,
    onSubmit: handleSecurityDetailsFormSubmit
  });

  const resetPasswordFormik = useFormik({
    initialValues: { newPassword: '' },
    validate: validateResetPasswordForm,
    onSubmit: handleResetPasswordFormSubmit
  });

  async function handleEmailAddressFormSubmit() {

    setLoading(true);

    const response = await fetchUserSecurityDetails(emailAddressFormik.values.email);
    const responseData = response?.data;
    console.log(responseData);

    if (responseData?.statusCode === 200) {
      setSecurityQuestion(responseData?.data?.securityQuestion);
      setFormStep(resetPasswordSteps.SECURITY_DETAILS_FORM);
    }

    setLoading(false);

  }

  async function handleSecurityDetailsFormSubmit() {

    const params = {
      ...emailAddressFormik.values,
      ...securityDetailsFormik.values
    };

    const response = await verifySecurityDetailsMutation.mutateAsync(params);
    const responseData = response?.data;

    if (responseData?.statusCode === 200) {
      setSecurityCode(responseData?.data?.securityCode);
      setFormStep(resetPasswordSteps.RESET_PASSWORD_FORM);
    }

  }

  async function handleResetPasswordFormSubmit() {

    const params = {
      ...emailAddressFormik.values,
      securityCode,
      newPassword: resetPasswordFormik.values.newPassword
    };

    const response = await resetPasswordMutation.mutateAsync(params);
    const responseData = response?.data;

    if (responseData?.statusCode === 200) {
      navigation.navigate(screenNames.LOGIN);
    }

  }

  function renderEmailAddressForm() {

    let emailError: string | undefined = '';

    if (emailAddressFormik.errors.email !== '' && emailAddressFormik.touched.email === true) {
      emailError = emailAddressFormik.errors.email;
    }

    const emailControlAttributes = {
      label: 'Email Address*',
      placeholder: 'Enter Email Address',
      keyboardType: 'email-address',
      value: emailAddressFormik.values.email,
      error: emailError,
      onChangeText(text: string) {
        emailAddressFormik.setFieldValue('email', text);
      }
    };

    const continueControlAttributes = {
      title: loading === true ? 'Verifying email. Please wait...' : 'Continue',
      disabled: loading === true ? true : false,
      onPress() {
        emailAddressFormik.handleSubmit();
      }
    };

    return (
      <View style={styles.formBody}>
        <Text style={styles.formInformationText}>
          Please enter the email address associated with your account. We’ll fetch your security details to help you reset your password.
        </Text>
        <FormInputTextControl {...emailControlAttributes} />
        <AppButton {...continueControlAttributes} />
      </View>
    );

  }

  function renderSecurityDetailsForm() {

    let securityAnswerError: string | undefined = '';

    if (securityDetailsFormik.errors.securityAnswer !== '' && securityDetailsFormik.touched.securityAnswer === true) {
      securityAnswerError = securityDetailsFormik.errors.securityAnswer;
    }

    const securityPhraseControlAttributes = {
      label: 'Security Phrase*',
      placeholder: 'Enter Secure Phrase',
      value: securityDetailsFormik.values.securityAnswer,
      error: securityAnswerError,
      onChangeText(text: string) {
        securityDetailsFormik.setFieldValue('securityAnswer', text);
      }
    };

    const verifyControlAttributes = {
      title: verifySecurityDetailsMutation.isPending === true ? 'Verifying Details. Please wait....' : 'Verify',
      disabled: verifySecurityDetailsMutation.isPending === true ? true : false,
      onPress() {
        securityDetailsFormik.handleSubmit();
      }
    };

    return (
      <View style={styles.formBody}>
        <Text style={styles.formInformationText}>
          To ensure your account's safety, please answer the security question you set up during registration.
        </Text>
        <Text style={styles.primaryLabel}>{securityQuestion}</Text>
        <FormInputTextControl {...securityPhraseControlAttributes} />
        <AppButton {...verifyControlAttributes} />
      </View>
    );

  }

  function renderResetPasswordForm() {

    let passwordError: string | undefined = '';

    if (resetPasswordFormik.errors.newPassword !== '' && resetPasswordFormik.touched.newPassword === true) {
      passwordError = resetPasswordFormik.errors.newPassword;
    }

    const passwordControlAttributes = {
      label: 'Password*',
      placeholder: 'Enter Secure Password',
      value: resetPasswordFormik.values.newPassword,
      error: passwordError,
      onChangeText(text: string) {
        resetPasswordFormik.setFieldValue('newPassword', text);
      }
    };

    const updatePasswordControlAttributes = {
      title: resetPasswordMutation.isPending === true ? 'Updating Password. Please Wait....' : 'Update Password',
      disabled: resetPasswordMutation.isPending === true ? true : false,
      onPress() {
        resetPasswordFormik.handleSubmit();
      }
    };

    return (
      <View style={styles.formBody}>
        <Text style={styles.formInformationText}>
          Choose a password that’s unique and not easy to guess. It should be at least 6 characters long.
        </Text>
        <FormSecureInputControl {...passwordControlAttributes} />
        <AppButton {...updatePasswordControlAttributes} />
      </View>
    );
  }

  function renderFormCard() {

    if (formStep === resetPasswordSteps.EMAIL_ADDRESS_FORM) {
      return renderEmailAddressForm();
    }

    if (formStep === resetPasswordSteps.SECURITY_DETAILS_FORM) {
      return renderSecurityDetailsForm();
    }

    return renderResetPasswordForm();

  }

  const scrollViewContainerAttributes = {
    contentContainerStyle: styles.scrollViewContainer
  };

  return (
    <AuthenticationLayout title='Reset Password'>
      <View style={styles.formCardContainer}>
        <ScrollView {...scrollViewContainerAttributes} keyboardShouldPersistTaps="handled">
          {renderFormCard()}
        </ScrollView>
      </View>
    </AuthenticationLayout>
  );

}

export default ForgotPassword;