import React from 'react';
import { Dimensions, Pressable, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { ICommunityRoomHeaderProps } from '@interfaces/uiInterfaces/communities';
import screenNames from '@constants/screenNames';

import AppAvatar from '@components/appAvatar/AppAvatar';
import AppScaledImage from '@components/AppScaledImage';

import { checkIsUserGuestToCommunity } from '@utilities/controlVisibility';

import { colors } from '@styles/colors';

import styles from './CommunityRoomHeader.styles';

const CommunityRoomHeader: React.FC<ICommunityRoomHeaderProps> = (props) => {

  const { community, onBack } = props;

  const navigation: any = useNavigation();

  async function navigateToCommunityDetails() {

    const isGuest = await checkIsUserGuestToCommunity(community?.members, community?.createdBy);

    if (isGuest === true) {
      return;
    }

    navigation.navigate(screenNames.COMMUNITY_DETAILS, { community });
  }

  function renderCommunityProfileImage() {

    if (community.profileImage?.url) {

      const widthHeight = Dimensions.get('window').width * 0.08;
      const appScaledImageAttributes = {
        width: widthHeight,
        height: widthHeight,
        url: community.profileImage.url,
        imageStyle: styles.communityProfileImage
      };

      return <AppScaledImage {...appScaledImageAttributes} />;

    }

    const appAvatarAttributes = {
      text: community.communityName
    };

    return <AppAvatar {...appAvatarAttributes} />
  }

  function renderLeftSection() {

    const backIconAttributes = {
      name: 'arrow-back',
      size: 22,
      color: colors.white
    };

    const communityDetailsContentAttributes = {
      style: styles.headerLeftSection,
      onPress: navigateToCommunityDetails
    };

    return (
      <View style={styles.headerLeftSection}>

        <TouchableOpacity onPress={onBack}>
          <Icon {...backIconAttributes} />
        </TouchableOpacity>

        <Pressable {...communityDetailsContentAttributes}>
          {renderCommunityProfileImage()}
          <Text style={styles.headerTitle}>{community.communityName}</Text>
        </Pressable>

      </View>
    );

  }

  async function renderAddPostControl() {

    const isGuest = await checkIsUserGuestToCommunity(community?.members, community?.createdBy);

    if (isGuest === true) {
      return false;
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
      <TouchableOpacity {...addPostControlAttributes}>
        <Icon {...addIconAttributes} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.communityHeaderMain}>
      {renderLeftSection()}
      {renderAddPostControl()}
    </View>
  );

};

export default CommunityRoomHeader;