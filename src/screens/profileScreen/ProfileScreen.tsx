import React from 'react';
import { Text } from 'react-native';

import BackgroundWallpaperWrapper from '@components/backgroundWallpaperWrapper/BackgroundWallpaperWrapper';
import AppHeader from '@components/appHeader/AppHeader';

import styles from './ProfileScreen.styles';

function ProfileScreen() {

  return (
    <BackgroundWallpaperWrapper>
      <AppHeader />
      <Text>Profile</Text>
    </BackgroundWallpaperWrapper>
  );

}

export default ProfileScreen;