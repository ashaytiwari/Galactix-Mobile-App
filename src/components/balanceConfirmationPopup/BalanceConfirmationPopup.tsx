import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { useAppDispatch, useAppSelector } from '@hooks/redux';

import AppBottomSheet from '@components/appBottomSheet/AppBottomSheet';
import AppButton from '@components/appButton/AppButton';

import { balanceConfirmationPopupAction } from '@store/slices/ui/balanceConfirmationPopup';

import styles from './BalanceConfirmationPopup.styles';

const BalanceConfirmationPopup = () => {

  const dispatch = useAppDispatch();

  const { open, actionAmount } = useAppSelector((state) => state.ui.balanceConfirmationPopup);
  const userProfile = useAppSelector((state) => state.user.userProfile);

  const sufficientBalance = userProfile.coins > actionAmount;

  function renderCTAControls() {

    const cancelControlAttributes = {
      title: 'Cancel',
      containerStyle: styles.cancelButton,
      textStyle: styles.cancelButtonText,
      onPress() {
        dispatch(balanceConfirmationPopupAction.close());
      }
    };

    const confirmControlAttributes = {
      title: sufficientBalance === true ? 'Proceed' : 'Earn Coins',
      onPress() {
        dispatch(balanceConfirmationPopupAction.onConfirm());
      }
    };

    return (
      <View style={styles.footerControlsContainer}>
        <View style={{ flex: 1 }}>
          <AppButton {...cancelControlAttributes} />
        </View>
        <View style={{ flex: 1 }}>
          <AppButton {...confirmControlAttributes} />
        </View>
      </View>
    );

  }

  const appBottomSheetAttributes = {
    open,
    containerStyle: { height: 250 },
    onClose() {
      dispatch(balanceConfirmationPopupAction.close());
    }
  };

  const headerTitle = sufficientBalance === true ? 'Confirm your action' : 'Insufficient Coins!';

  const sufficientCoinsMessage = (
    <Text style={styles.balanceMessage}>This action will cost {' '}
      <Text style={styles.strongText}>{actionAmount}</Text> Galactix coins.
      You currently have <Text style={styles.strongText}>{userProfile.coins}</Text> coins in your wallet. After this, you’ll have {' '}
      <Text style={styles.strongText}>{userProfile.coins - actionAmount}</Text> coins left. Proceed?
    </Text>
  );

  const insufficientCoinsMessage = (
    <Text style={styles.balanceMessage}>You need <Text style={styles.strongText}>{actionAmount}</Text> Galactix coins to create a community,
      but your wallet balance is only <Text style={styles.strongText}>{userProfile.coins}</Text> coins. Earn more coins to continue.
    </Text>
  );

  let message = sufficientBalance === true ? sufficientCoinsMessage : insufficientCoinsMessage;

  return (
    <AppBottomSheet {...appBottomSheetAttributes}>
      <View style={styles.balanceConfirmationPopupMain}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollViewContainer}>
          <Text style={styles.headerTitle}>{headerTitle}</Text>
          {message}
          {renderCTAControls()}
        </ScrollView>
      </View>
    </AppBottomSheet>
  );

};

export default BalanceConfirmationPopup;