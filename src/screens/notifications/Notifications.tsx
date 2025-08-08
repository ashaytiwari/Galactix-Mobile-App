import React from 'react';
import { Image, Text, View } from 'react-native';

import AppHeader from '@components/appHeader/AppHeader';
import BackgroundWallpaperWrapper from '@components/backgroundWallpaperWrapper/BackgroundWallpaperWrapper';

import comingSoonImage from '@assets/images/sandwatch.png';

import styles from './Notifications.styles';

function Notifications() {

  const comingSoonImageAttributes = {
    source: comingSoonImage,
    style: styles.comingSoonImage
  };

  return (
    <BackgroundWallpaperWrapper>

      <AppHeader title='Notifications' />

      <View style={styles.notificationsMain}>
        <Image {...comingSoonImageAttributes} />
        <Text style={styles.comingSoonMessage}>Feature Coming Soon!</Text>
      </View>

    </BackgroundWallpaperWrapper>
  );

}

export default Notifications;