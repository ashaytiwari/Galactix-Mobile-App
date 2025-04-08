import React from 'react';

import styles from './HomeScreen.styles';
import { ImageBackground, Text, View } from 'react-native';

function HomeScreen() {

  const imageBackgroundAttributes = {
    source: require('../../assets/images/homeBg.jpg'),
    style: styles.rootContainer
  };

  return (
    <ImageBackground {...imageBackgroundAttributes} resizeMode='cover'>
      <View>
        <Text>Discover</Text>
        <Text>Deep Space</Text>
      </View>
    </ImageBackground>
  );

}

export default HomeScreen;