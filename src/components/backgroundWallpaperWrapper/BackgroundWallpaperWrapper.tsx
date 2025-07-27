import React, { useEffect, useRef } from 'react';
import { ImageBackground } from 'react-native';

import { BlurView } from '@react-native-community/blur';
import { useMMKVStorage } from 'react-native-mmkv-storage';

import { IChildrenProps } from '@interfaces/uiInterfaces/generic';
import dashboardWallpapers from '@constants/dashboardWallpapers';

import { MMKV, STORAGE_KEYS } from '@utilities/mmkvStorage';

import { colors } from '@styles/colors';

import styles from './BackgroundWallpaperWrapper.styles';

const BackgroundWallpaperWrapper: React.FC<IChildrenProps> = (props) => {

  const { children } = props;

  const [wallpaperIndex] = useMMKVStorage(STORAGE_KEYS.WALLPAPER_INDEX, MMKV);

  const wallpaperIndexReference = useRef(wallpaperIndex || 0);

  let wallpaperChangeInterval: any;

  useEffect(() => {
    changeWallpaper();
    return () => clearInterval(wallpaperChangeInterval);
  }, []);

  // update wallpaperIndexReference whenever wallpaperIndex changes
  useEffect(() => {
    wallpaperIndexReference.current = wallpaperIndex || 0;
  }, [wallpaperIndex]);

  function changeWallpaper() {

    wallpaperChangeInterval = setInterval(() => {
      const nextIndex = wallpaperIndexReference.current === dashboardWallpapers.length - 1 ? 0 : wallpaperIndexReference.current + 1;
      MMKV.setInt(STORAGE_KEYS.WALLPAPER_INDEX, nextIndex);
    }, 5 * 60 * 1000); // 5 minutes in milliseconds

  }

  const wallpaperPath = dashboardWallpapers[wallpaperIndex || 0];

  const imageBackgroundAttributes = {
    source: wallpaperPath,
    style: styles.imageBackgroundContainer
  };

  const blurViewAttributes = {
    blurAmount: 1,
    blurRadius: 1,
    reducedTransparencyFallbackColor: colors.white,
    style: styles.blurView,
    resizeMode: 'cover'
  };

  return (
    <ImageBackground {...imageBackgroundAttributes}>
      <BlurView {...blurViewAttributes} blurType='light' />
      {children}
    </ImageBackground>
  );

};

export default BackgroundWallpaperWrapper;