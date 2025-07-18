import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { useFormik } from 'formik';
import Icon from 'react-native-vector-icons/Ionicons';

import { ISignupSecurityInfoFormProps } from '@interfaces/uiInterfaces/authentication';

import FormInputTextControl from '@components/formControls/FormInputTextControl';
import AppButton from '@components/appButton/AppButton';

import { colors } from '@styles/colors';

import SignupSuccessModal from '../signupSuccessModal/SignupSuccessModal';

import { setDefaultSignupSecurityInfoFormValues, validateSignupSecurityInfoForm } from '../utilities';

import styles from './SignupSecurityInfoForm.styles';

const SignupSecurityInfoForm: React.FC<ISignupSecurityInfoFormProps> = (props) => {

  const { primaryInfoFormDetails, onBack } = props;

  const [showSignupSuccessModal, setShowSignupSuccessModal] = useState(false);

  const formik = useFormik({
    initialValues: setDefaultSignupSecurityInfoFormValues(),
    validate: validateSignupSecurityInfoForm,
    onSubmit() { }
  });
  const formikValues = formik.values;
  const formikErrors = formik.errors;

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
        <TouchableOpacity>
          <Icon {...backIconAttributes} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerPrimaryText}>Security Details</Text>
          <Text style={styles.headerSecondaryText}>Just one last step! Complete the security details below to begin your journey.</Text>
        </View>
        <TouchableOpacity>
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
      title: 'Save Security Details',
      onPress() {
        setShowSignupSuccessModal(true);
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
    open: showSignupSuccessModal,
    userDetails: { firstName: 'Ashay', lastName: 'Tiwari', password: '121324345', authType: 'jasv', email: 'a.k@k.in' },
    onClose() {
      setShowSignupSuccessModal(false);
    }
  };

  return (
    <View style={styles.signupSecurityInfoFormMain}>
      <ScrollView style={styles.scrollViewContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.formContainer}>
          {renderHeader()}
          {renderFormCard()}
          <SignupSuccessModal {...signupSuccessModalAttributes} />
        </View>
      </ScrollView>
    </View>
  );

};

export default SignupSecurityInfoForm;