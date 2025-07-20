import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { useFormik } from 'formik';
import Icon from 'react-native-vector-icons/Ionicons';

import { useSignupUser } from '@hooks/queriesMutations/authentication';

import { ISignupSecurityInfoFormProps } from '@interfaces/uiInterfaces/authentication';

import FormInputTextControl from '@components/formControls/FormInputTextControl';
import AppButton from '@components/appButton/AppButton';

import { colors } from '@styles/colors';

import SignupSuccessModal from '../signupSuccessModal/SignupSuccessModal';
import SignupSecurityInstructionsModal from '../signupSecurityInstructionsModal/SignupSecurityInstructionsModal';

import { setDefaultSignupSecurityInfoFormValues, validateSignupSecurityInfoForm } from '../utilities';

import styles from './SignupSecurityInfoForm.styles';

const SignupSecurityInfoForm: React.FC<ISignupSecurityInfoFormProps> = (props) => {

  const { primaryInfoFormDetails, onBack } = props;

  const [showSignupSuccessModal, setShowSignupSuccessModal] = useState<any>(null);
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);

  const signupUserMutation = useSignupUser();

  const formik = useFormik({
    initialValues: setDefaultSignupSecurityInfoFormValues(),
    validate: validateSignupSecurityInfoForm,
    onSubmit: createAccount
  });
  const formikValues = formik.values;
  const formikErrors = formik.errors;

  async function createAccount() {

    const params = { ...primaryInfoFormDetails, ...formikValues };
    const response: any = await signupUserMutation.mutateAsync(params);

    if (response?.data?.statusCode === 200) {
      setShowSignupSuccessModal(response?.data?.data);
    }
  }

  function openInstructionsModal() {
    setShowInstructionsModal(true);
  }

  function renderHeader() {

    const backIconAttributes = {
      name: 'arrow-back',
      size: 20,
      color: colors.primaryBackground,
    };

    const infoIconAttributes = {
      name: 'information-circle',
      size: 25,
      color: colors.primary,
    };

    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Icon {...backIconAttributes} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerPrimaryText}>Security Details</Text>
          <Text style={styles.headerSecondaryText}>Just one last step! Complete the security details below to begin your journey.</Text>
        </View>
        <TouchableOpacity onPress={openInstructionsModal}>
          <Icon {...infoIconAttributes} />
        </TouchableOpacity>
      </View>
    );

  }

  function renderFormCard() {

    let questionError: string | undefined = '';
    let answerError: string | undefined = '';

    if (formikErrors.securityQuestion !== '' && formik.touched.securityQuestion === true) {
      questionError = formikErrors.securityQuestion;
    }

    if (formikErrors.securityAnswer !== '' && formik.touched.securityAnswer === true) {
      answerError = formikErrors.securityAnswer;
    }

    const securityQuestionControlAttributes = {
      label: 'Enter a personal security question*',
      placeholder: 'E.g., What is your childhood nickname?',
      value: formikValues.securityQuestion,
      error: questionError,
      onChangeText(text: string) {
        formik.setFieldValue('securityQuestion', text);
      }
    };

    const securityAnswerControlAttributes = {
      label: 'Enter your secret answer*',
      placeholder: 'E.g., Jack the sparrow ',
      value: formikValues.securityAnswer,
      error: answerError,
      onChangeText(text: string) {
        formik.setFieldValue('securityAnswer', text);
      }
    };

    const saveSecurityDetailsControlAttributes = {
      title: signupUserMutation.isPending === true ? 'Creating Account & Saving Details...' : 'Save Security Details',
      disabled: signupUserMutation.isPending,
      onPress() {
        formik.handleSubmit();
      }
    };

    return (
      <View style={styles.signupSecondaryInfoForm}>
        <FormInputTextControl {...securityQuestionControlAttributes} />
        <FormInputTextControl {...securityAnswerControlAttributes} />
        <AppButton {...saveSecurityDetailsControlAttributes} />
      </View>
    );

  }

  const signupSuccessModalAttributes = {
    open: showSignupSuccessModal ? true : false,
    userDetails: showSignupSuccessModal,
    onClose() {
      setShowSignupSuccessModal(false);
    }
  };

  const signupInstructionsModalAttributes = {
    open: showInstructionsModal,
    onClose() {
      setShowInstructionsModal(false);
    }
  };

  return (
    <View style={styles.signupSecurityInfoFormMain}>
      <ScrollView style={styles.scrollViewContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.formContainer}>
          {renderHeader()}
          {renderFormCard()}
          <SignupSuccessModal {...signupSuccessModalAttributes} />
          <SignupSecurityInstructionsModal {...signupInstructionsModalAttributes} />
        </View>
      </ScrollView>
    </View>
  );

};

export default SignupSecurityInfoForm;