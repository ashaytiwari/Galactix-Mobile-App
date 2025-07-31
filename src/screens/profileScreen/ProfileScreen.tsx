import React from 'react';
import { Text, View } from 'react-native';

import { useAppSelector } from '@hooks/redux';
import { useLogout } from '@hooks/queriesMutations/authentication';

import BackgroundWallpaperWrapper from '@components/backgroundWallpaperWrapper/BackgroundWallpaperWrapper';
import AppHeader from '@components/appHeader/AppHeader';
import AppAvatar from '@components/appAvatar/AppAvatar';
import AppButton from '@components/appButton/AppButton';

import styles from './ProfileScreen.styles';

function ProfileScreen() {

  const userProfile = useAppSelector((state) => state.user.userProfile);

  const logoutMutation = useLogout();

  const userName = `${userProfile?.firstName} ${userProfile?.lastName}`;

  function renderFieldView(value: string) {

    return (
      <View style={styles.fieldView}>
        <Text style={styles.fieldViewText}>{value}</Text>
      </View>
    );

  }

  const appAvatarAttributes = {
    text: userName,
    containerStyle: styles.appAvatarContainer,
    textStyle: styles.appAvatarText
  };

  const logoutButtonAttributes = {
    title: logoutMutation.isPending ? 'Logging out....' : 'Logout',
    disabled: logoutMutation.isPending,
    onPress() {
      logoutMutation.mutate();
    }
  };

  return (
    <BackgroundWallpaperWrapper>

      <AppHeader />

      <View style={styles.profileScreenMain}>
        <Text style={styles.title}>Your Cosmic Identity</Text>

        <View style={styles.avatarWrapper}>
          <AppAvatar {...appAvatarAttributes} />
        </View>

        {renderFieldView(userName)}
        {renderFieldView(userProfile.email)}

        <AppButton {...logoutButtonAttributes} />

      </View>

    </BackgroundWallpaperWrapper>
  );

}

export default ProfileScreen;