import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { ICommunityRoomHeaderProps } from '@interfaces/uiInterfaces/communities';

import AppAvatar from '@components/appAvatar/AppAvatar';
import AppScaledImage from '@components/AppScaledImage';

import { colors } from '@styles/colors';

import styles from './CommunityRoomHeader.styles';

const CommunityRoomHeader: React.FC<ICommunityRoomHeaderProps> = (props) => {

  const { communityName, communityProfile, onBack } = props;

  function renderCommunityProfileImage() {

    if (communityProfile) {

      const widthHeight = Dimensions.get('window').width * 0.08;
      const appScaledImageAttributes = {
        width: widthHeight,
        height: widthHeight,
        url: communityProfile,
        imageStyle: styles.communityProfileImage
      };

      return <AppScaledImage {...appScaledImageAttributes} />;

    }

    const appAvatarAttributes = {
      text: communityName
    };

    return <AppAvatar {...appAvatarAttributes} />
  }

  function renderLeftSection() {

    const backIconAttributes = {
      name: 'arrow-back',
      size: 22,
      color: colors.white
    };

    return (
      <View style={styles.headerLeftSection}>

        <TouchableOpacity onPress={onBack}>
          <Icon {...backIconAttributes} />
        </TouchableOpacity>

        {renderCommunityProfileImage()}

        <Text style={styles.headerTitle}>{communityName}</Text>

      </View>
    );

  }

  const addPostControlAttributes = {
    style: styles.addPostControl
  };

  const addIconAttributes = {
    name: 'add',
    size: 20,
    color: colors.white,
  };

  return (
    <View style={styles.communityHeaderMain}>
      {renderLeftSection()}
      <TouchableOpacity {...addPostControlAttributes}>
        <Icon {...addIconAttributes} />
      </TouchableOpacity>
    </View>
  );

};

export default CommunityRoomHeader;