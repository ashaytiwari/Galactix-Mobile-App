import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useAppSelector } from '@hooks/redux';

import AppHeader from '@components/appHeader/AppHeader';
import BackgroundWallpaperWrapper from '@components/backgroundWallpaperWrapper/BackgroundWallpaperWrapper';
import AppButton from '@components/appButton/AppButton';
import CoinsInstructionsModal from '@components/coinsInstructionsModal/CoinsInstructionsModal';

import coinStackImage from '@assets/images/coinsStack.png';

import styles from './Wallet.styles';

function Wallet() {

  const userProfile = useAppSelector((state) => state.user.userProfile);

  const [showCoinsInstructions, setShowCoinsInstructions] = useState(false);

  function renderCoinsInstructions() {

    const coinsInstructionsModalAttributes = {
      open: showCoinsInstructions,
      onClose() {
        setShowCoinsInstructions(false);
      }
    };

    return <CoinsInstructionsModal {...coinsInstructionsModalAttributes} />;
  }

  const coinStackImageAttributes = {
    source: coinStackImage,
    style: styles.coinStackImage
  };

  const claimDailyRewardControlAttributes = {
    title: 'Claim Daily Reward - 10 coins',
    onPress() { }
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

    </BackgroundWallpaperWrapper>
  );

}

export default Wallet;