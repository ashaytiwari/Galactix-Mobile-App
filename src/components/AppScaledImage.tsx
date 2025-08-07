import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import FastImage from 'react-native-fast-image';

import { IAppScaledImageProps } from '@interfaces/uiInterfaces/generic';

import { colors } from '@styles/colors';

const AppScaledImage: React.FC<IAppScaledImageProps> = React.memo((props) => {

  const { width, url, imageStyle } = props;

  const [isLoading, setIsLoading] = useState(true);

  function renderFallbackImageContent() {

    if (isLoading === false) {
      return;
    }

    return (
      <View style={{ backgroundColor: colors.darkTransparentColor }}>
        <ActivityIndicator color="#fff" size="small" />
      </View>
    );

  }

  const imageAttributes = {
    source: {
      uri: url,
      priority: FastImage.priority.high,
      cache: FastImage.cacheControl.immutable,
    },
    style: [{
      width,
      height: 85,
      backgroundColor: colors.eclipseGray
    }, imageStyle],
    resizeMode: FastImage.resizeMode.contain,
    onLoadStart() {
      setIsLoading(true);
    },
    onLoadEnd() {
      setIsLoading(false);
    },
    onError() {
      setIsLoading(false);
    },
  };

  return (
    <View>
      {renderFallbackImageContent()}
      <FastImage {...imageAttributes} />
    </View>
  );

});

export default AppScaledImage;