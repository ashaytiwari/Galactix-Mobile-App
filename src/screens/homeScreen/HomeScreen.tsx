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
      <View style={styles.headingContainer}>
        <Text style={styles.mainText}>Discover</Text>
        <Text style={styles.mainText}>Deep Space</Text>
      </View>
    </ImageBackground>
  );

}

export default HomeScreen;