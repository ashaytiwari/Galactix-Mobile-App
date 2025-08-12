import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import Sound from 'react-native-sound';

import { useAppSelector } from '@hooks/redux';

import AppHeader from '@components/appHeader/AppHeader';
import BackgroundWallpaperWrapper from '@components/backgroundWallpaperWrapper/BackgroundWallpaperWrapper';
import AppButton from '@components/appButton/AppButton';
import CoinsInstructionsModal from '@components/coinsInstructionsModal/CoinsInstructionsModal';
import LottieAnimation from '@components/LottieAnimation';

import coinStackImage from '@assets/images/coinsStack.png';
import celebrationAnimation from '@assets/lotties/celebrate.json';

import styles from './Wallet.styles';

function Wallet() {

  const userProfile = useAppSelector((state) => state.user.userProfile);

  const [showCoinsInstructions, setShowCoinsInstructions] = useState(false);
  const [showCelebrationContent, setShowCelebrationContent] = useState(false);

  let audioTrack: Sound | null = null;

  useEffect(() => {

    return () => {
      stopSound();
    };

  }, []);

  function playSound() {

    // Load the audio
    audioTrack = new Sound(require('@assets/soundtracks/coinsRewardSoundtrack.mp3'), (error) => {
      if (!error) {
        audioTrack?.play();
      } else {
        console.error('Error loading sound:', error);
      }
    });

  }

  function stopSound() {
    audioTrack?.stop();
    audioTrack?.release();
  }

  async function claimDailyReward() {
    setShowCelebrationContent(true);
    playSound();

    setTimeout(() => {
      stopSound();
      setShowCelebrationContent(false);
    }, 10000);
  }

  function renderCoinsInstructions() {

    const coinsInstructionsModalAttributes = {
      open: showCoinsInstructions,
      onClose() {
        setShowCoinsInstructions(false);
      }
    };

    return <CoinsInstructionsModal {...coinsInstructionsModalAttributes} />;
  }

  function renderCelebrationIllustration() {

    if (showCelebrationContent === false) {
      return;
    }

    const lottieAnimationAttributes = {
      animationSource: celebrationAnimation,
      loop: true,
      animationStyle: {
        width: 500,
        height: 500
      }
    };

    return (
      <View style={styles.celebrationIllustrationWrapper}>
        <LottieAnimation {...lottieAnimationAttributes} />
      </View>
    );

  }

  const coinStackImageAttributes = {
    source: coinStackImage,
    style: styles.coinStackImage
  };

  const claimDailyRewardControlAttributes = {
    title: 'Claim Daily Reward - 10 coins',
    onPress: claimDailyReward
  };

  const coinsInstructionsControlAttributes = {
    style: styles.coinsInstructionsControl,
    onPress() {
      setShowCoinsInstructions(true);
    }
  };

  return (
    <BackgroundWallpaperWrapper>

      <AppHeader title='Wallet' />

      <View style={styles.walletMain}>
        <Text style={styles.title}>Your Galactix Treasure</Text>

        <View style={styles.walletContent}>
          <Image {...coinStackImageAttributes} />
          <Text style={styles.balanceInfo}>{userProfile.coins} galactix coins</Text>
        </View>

        <AppButton {...claimDailyRewardControlAttributes} />

        <TouchableOpacity {...coinsInstructionsControlAttributes}>
          <Text style={styles.coinsInstructionsControlText}>How to earn/spend coins?</Text>
        </TouchableOpacity>

      </View>

      {renderCoinsInstructions()}
      {renderCelebrationIllustration()}

    </BackgroundWallpaperWrapper>
  );

}

export default Wallet;