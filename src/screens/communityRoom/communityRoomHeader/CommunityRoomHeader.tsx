import React from 'react';
import { Dimensions, Pressable, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { useJoinCommunity } from '@hooks/queriesMutations/communities';

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

  const joinCommunityMutation = useJoinCommunity();

  async function handleCommunityJoin() {

    if (joinCommunityMutation.isPending === true) {
      return;
    }

    const params = {
      communityId: community?._id!
    };

    const response = await joinCommunityMutation.mutateAsync(params);
    const responseData = response?.data;

    console.log(response);

    if (responseData?.statusCode !== 200) {
      return;
    }


    // // updating community-room selected community details at run time
    // const updatedCommunity = updateSelectedCommunity(selectedCommunity!, applicationStorage._id);
    // dispatch(commonUIActions.updateSelectedCommunity(updatedCommunity));

    // if (selectedCommunity?.isPrivate === true) {

    //   const event = new CustomEvent(inAppCustomEvents.EXPLORE_COMMUNITIES_LIST_UPDATED, {
    //     detail: responseData?.data
    //   });
    //   window.dispatchEvent(event);

    //   return;
    // }

    // dispatch(commonUIActions.updateSidebarContentType(sidebarContentType.USER_CHAT_COMMUNITIES));

    // socket.emit(socketEvents.JOIN_COMMUNITY_ROOM, selectedCommunity?._id);

  }

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

  async function renderJoinCommunityControl() {

    const isGuest = await checkIsUserGuestToCommunity(community?.members, community?.createdBy);

    if (isGuest === false) {
      return;
    }

    const joinCommunityControlAttributes = {
      style: styles.joinCommunityControl,
      onPress: handleCommunityJoin
    };

    let joinCommunityControlText = joinCommunityMutation.isPending === true ? 'Launching you in...' : 'Launch In';

    return (
      <TouchableOpacity {...joinCommunityControlAttributes}>
        <Text style={styles.joinCommunityControlText}>{joinCommunityControlText}</Text>
      </TouchableOpacity>
    );

  }

  async function renderAddPostControl() {

    const isGuest = await checkIsUserGuestToCommunity(community?.members, community?.createdBy);

    if (isGuest === true) {
      return;
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
      {renderJoinCommunityControl()}
    </View>
  );

};

export default CommunityRoomHeader;