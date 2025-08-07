import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { ICommunityTileModel } from '@interfaces/uiInterfaces/communities';

import AppAvatar from '@components/appAvatar/AppAvatar';
import AppScaledImage from '@components/AppScaledImage';

import { colors } from '@styles/colors';

import styles from './CommunityTile.styles';

const CommunityTile: React.FC<ICommunityTileModel> = (props) => {

  const { community } = props;

  function renderCommunityProfileImage() {

    const widthHeight = Dimensions.get('window').width * 0.17;
    const profileImage = community.profileImage?.url || null;

    if (!profileImage) {

      const appAvatarAttributes = {
        text: community.communityName,
        textStyle: styles.communityAvatarText,
        containerStyle: [{ width: widthHeight, height: widthHeight }, styles.communityAvatarContainer]
      };

      return <AppAvatar {...appAvatarAttributes} />;

    }

    const appScaledImageAttributes = {
      width: widthHeight,
      height: widthHeight,
      url: profileImage,
      imageStyle: styles.communityProfileImage
    };

    return <AppScaledImage {...appScaledImageAttributes} />;

  }

  function renderPrivateCommunityLockControl() {

    if (community.isPrivate === false) {
      return;
    }

    const lockIconAttributes = {
      name: 'lock-closed',
      size: 18,
      color: colors.white,
      style: styles.lockIcon
    };

    return <Icon {...lockIconAttributes} />;
  }

  function renderCommunityDetails() {

    let _description = community.communityDescription;

    if (community.communityDescription.length > 100) {
      _description = `${community.communityDescription.substring(0, 100)}...`;
    }

    return (
      <View style={styles.communityDetailsContainer}>
        <Text style={styles.communityName}>{community.communityName}</Text>
        <Text style={styles.communityDescription}>{_description}</Text>
        {renderPrivateCommunityLockControl()}
      </View>
    );

  }

  const communityTileMainAttributes = {
    style: styles.communityTileMain,
    onPress() { }
  };

  return (
    <TouchableOpacity {...communityTileMainAttributes}>
      {renderCommunityProfileImage()}
      {renderCommunityDetails()}
    </TouchableOpacity>
  );

};

export default CommunityTile;