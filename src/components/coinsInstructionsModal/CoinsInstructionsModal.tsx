import React, { useEffect } from 'react';
import { ImageBackground, Modal, SafeAreaView, ScrollView, Text, View } from 'react-native';

import Sound from 'react-native-sound';

import { useAppSelector } from '@hooks/redux';

import { IModalProps } from '@interfaces/uiInterfaces/generic';
import { earnCoinsInstructions, spendCoinsInstructions } from '@constants/coinsInstructions';

import AppButton from '@components/appButton/AppButton';

import styles from './CoinsInstructionsModal.style';

const CoinsInstructionsModal: React.FC<IModalProps> = (props) => {

  const { open, onClose } = props;

  let audioTrack: Sound | null = null;

  const userProfile = useAppSelector((state) => state.user.userProfile);

  useEffect(() => {

    if (!open) {
      return;
    }

    // Load the audio
    audioTrack = new Sound(require('@assets/soundtracks/coinsInstructionsSoundtrack.mp3'), (error) => {
      if (!error) {
        audioTrack?.play();
      } else {
        console.error('Error loading sound:', error);
      }
    });

    return () => {
      // Cleanup: stop and release audio when modal closes
      audioTrack?.stop();
      audioTrack?.release();
    };

  }, [open]);

  function renderListItem(instruction: string, index: number) {

    return (
      <View style={styles.listItem} key={index}>
        <Text style={styles.bullet}>{'\u2022'}</Text>
        <Text style={styles.instructionText}>{instruction}</Text>
      </View>
    );

  }

  function renderList(title: string, instructions: Array<string>) {

    return (
      <View>
        <Text style={[styles.boldText, styles.text, { marginBottom: 4 }]}>{title}</Text>
        {
          instructions.map((instruction, index) => (
            renderListItem(instruction, index)
          ))
        }
      </View>
    );

  }

  function renderHeader() {

    return (
      <View style={styles.header}>
        <Text style={styles.heading}>Galactix Coins: Your Key to the Universe</Text>
      </View>
    );

  }

  function renderContent() {

    const continueControlAttributes = {
      title: 'Continue  🚀',
      containerStyle: styles.continueButton,
      onPress: onClose
    };

    return (
      <View style={styles.content}>
        <Text style={styles.text}>
          Galactix Coins are your gateway to exciting opportunities! Earn coins by engaging with the
          app and spend them to enhance your interstellar journey. Begin your adventure today!
        </Text>
        <Text style={styles.text}><Text style={[styles.boldText, styles.text]}>Your Balance:</Text> {userProfile?.coins || 0} Galactix Coin(s)</Text>
        {renderList('How to earn coins?', earnCoinsInstructions)}
        {renderList('How to spend coins?', spendCoinsInstructions)}
        <AppButton {...continueControlAttributes} />
      </View>
    );

  }

  const modalAttributes = {
    visible: open,
    onRequestClose: onClose
  };

  const imageBackgroundAttributes = {
    source: require('@assets/images/paperTexture.jpg'),
    style: styles.imageBackgroundContainer
  };

  return (
    <Modal {...modalAttributes} animationType='fade'>
      <ImageBackground {...imageBackgroundAttributes}>
        <SafeAreaView>
          <ScrollView style={styles.coinsInstructionsModalMain}>
            {renderHeader()}
            {renderContent()}
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </Modal>
  );

};

export default CoinsInstructionsModal;