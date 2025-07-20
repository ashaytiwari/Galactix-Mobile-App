import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { ISignupSecurityInstructionsModalProps } from '@interfaces/uiInterfaces/authentication';

import { colors } from '@styles/colors';

import styles from './SignupSecurityInstructionsModal.styles';

const SignupSecurityInstructionsModal: React.FC<ISignupSecurityInstructionsModalProps> = (props) => {

  const { open, onClose } = props;

  function renderHeader() {

    const closeIconAttributes = {
      name: 'close',
      size: 20,
      color: colors.primaryBackground,
    };

    return (
      <View style={styles.header}>
        <Text style={styles.heading}>Instructions</Text>
        <TouchableOpacity onPress={onClose}>
          <Icon {...closeIconAttributes} />
        </TouchableOpacity>
      </View>
    );

  }

  const modalAttributes = {
    visible: open,
    transparent: true,
    onRequestClose: onClose
  };

  return (
    <Modal {...modalAttributes} animationType='fade'>
      <View style={styles.signupSecurityInstructionsModalMain}>

        <View style={styles.bodyContent}>

          {renderHeader()}

          <Text style={styles.contentMessage}>
            To ensure your account stays secure and accessible only to you, we require you to
            set up a security question and answer. This step allows you to recover your account or
            reset your password without relying on email or mobile verification. By choosing a question
            and answer unique to you, we provide an extra layer of protection tailored to your privacy.
          </Text>

          <Text style={styles.instructionsHeading}>Instructions for Entering Security Details:</Text>

          <View>
            <Text style={styles.instructionsText}>
              1. Pick a question that is personal and memorable but not easily guessed by others.
              Example: "What is the name of your first pet?" or "What is your favorite childhood memory?"
            </Text>
            <Text style={styles.instructionsText}>
              2. Ensure the answer is concise and easy for you to remember.
              Avoid using publicly known information like your name or birth date.
            </Text>
          </View>

        </View>

      </View>
    </Modal>
  );

};

export default SignupSecurityInstructionsModal;