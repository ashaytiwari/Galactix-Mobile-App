import React from 'react';

import { Image, Modal, Text, View } from 'react-native';

import { ISignupSuccessModalProps } from '@interfaces/uiInterfaces/authentication';

import AppButton from '@components/appButton/AppButton';

import { MMKV, STORAGE_KEYS } from '@utilities/mmkvStorage';

import coinStackImage from '@assets/images/coinsStack.png';

import styles from './SignupSuccessModal.styles';

const SignupSuccessModal: React.FC<ISignupSuccessModalProps> = (props) => {

  const { open, userDetails, onClose } = props;

  const modalAttributes = {
    visible: open,
    onRequestClose: onClose
  };

  const coinStackImageAttributes = {
    source: coinStackImage,
    style: styles.coinStackImage
  };

  const startExploringControlAttributes = {
    title: 'Start Exploring 🚀',
    onPress() {
      MMKV.setMap(STORAGE_KEYS.USER_AUTH_DETAILS, userDetails);
    }
  };

  return (
    <Modal {...modalAttributes} animationType='slide'>
      <View style={styles.signupSuccessModalMain}>

        <View style={styles.bodyContent}>
          <Text style={styles.heading}>Welcome Aboard, {userDetails?.firstName} {userDetails?.lastName}</Text>
          <Text style={styles.contentText}>
            Congratulations, Space Explorer! You've earned <Text style={styles.highlightedText}>50 Star Coins</Text> to kickstart your cosmic adventure.
            Use them to create communities, share your stellar ideas, and explore the galaxies with fellow voyagers.
            Let the journey begin!
          </Text>

          <View style={styles.imageWrapper}>
            <Image {...coinStackImageAttributes} />
          </View>

          <AppButton {...startExploringControlAttributes} />

        </View>

      </View>
    </Modal>
  );

};

export default SignupSuccessModal;