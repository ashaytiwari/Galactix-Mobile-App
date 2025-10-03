import React from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useGetCommunityMembers } from '@hooks/queriesMutations/communities';

import { ICommunityMembersModel, ICommunityModel, IMemberDetailModel } from '@interfaces/models/communities';

import BackgroundWallpaperWrapper from '@components/backgroundWallpaperWrapper/BackgroundWallpaperWrapper';
import AppScaledImage from '@components/AppScaledImage';
import AppAvatar from '@components/appAvatar/AppAvatar';
import Spinner from '@components/spinner/Spinner';

import { colors } from '@styles/colors';

import CommunityMemberTile from './communityMemberTile/CommunityMemberTile';

import { parseCommunityMembersList } from './utilities';

import styles from './CommunityDetails.styles';

function CommunityDetails() {

  const navigation: any = useNavigation();
  const route: any = useRoute();
  const dimensions = useWindowDimensions();

  const community: ICommunityModel = route.params?.community;

  const getCommunityMembersQuery = useGetCommunityMembers(community._id);
  const membersDetails: ICommunityMembersModel = getCommunityMembersQuery.data?.data?.data;

  function onBack() {
    navigation.goBack();
  }

  function renderHeader() {

    const backIconAttributes = {
      name: 'arrow-back',
      size: 22,
      color: colors.white
    };

    const moreIconAttributes = {
      name: 'ellipsis-vertical',
      size: 22,
      color: colors.white
    };

    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Icon {...backIconAttributes} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Community Details</Text>
        <TouchableOpacity>
          <Icon {...moreIconAttributes} />
        </TouchableOpacity>
      </View>
    );
  }

  function renderCommunityProfileImage() {

    if (community.profileImage?.url) {

      const communityImageAttributes = {
        width: dimensions.height * 0.18,
        height: dimensions.height * 0.18,
        url: community.profileImage?.url,
        imageStyle: {
          borderRadius: (dimensions.height * 0.18) / 2
        }
      };

      return <AppScaledImage {...communityImageAttributes} />;

    }

    const appAvatarAttributes = {
      text: community.communityName,
      containerStyle: [styles.communityProfileAvatarContainer, {
        width: dimensions.height * 0.18,
        height: dimensions.height * 0.18,
        borderRadius: (dimensions.height * 0.18) / 2
      }],
      textStyle: [styles.communityProfileAvatarText, { fontSize: dimensions.height * 0.09 }]
    };

    return <AppAvatar {...appAvatarAttributes} />
  }

  function renderCommunityDetails() {

    return (
      <View style={styles.communityDetailsWrapper}>
        <View style={styles.communityImageWrapper}>
          {renderCommunityProfileImage()}
        </View>
        <Text style={styles.communityName}>{community.communityName}</Text>
        <Text style={styles.communityDescription}>{community.communityDescription}</Text>
      </View>
    );
  }

  function renderMemberTile(member: IMemberDetailModel) {

    const communityMemberTileAttributes = {
      member,
      communityCreatedBy: community.createdBy,
    };

    return <CommunityMemberTile {...communityMemberTileAttributes} />;
  }

  function renderCommunityMembersList() {

    const _membersList = parseCommunityMembersList(membersDetails);

    const communityMembersListAttributes = {
      data: _membersList,
      renderItem({ item }: any) {
        return renderMemberTile(item);
      },
      keyExtractor: (item: IMemberDetailModel) => item._id,
    };

    return <FlatList {...communityMembersListAttributes} />;
  }

  function renderCommunityMembersSection() {

    if (getCommunityMembersQuery.isPending === true) {
      return <Spinner transparentBackground={true} />;
    }

    return (
      <View style={styles.communityMembersSection}>
        <Text style={styles.communityMembersTitle}>Community Members</Text>
        {renderCommunityMembersList()}
      </View>
    );
  }

  return (
    <BackgroundWallpaperWrapper>
      <View style={styles.communityDetailsMain}>
        {renderHeader()}
        {renderCommunityDetails()}
        {renderCommunityMembersSection()}
      </View>
    </BackgroundWallpaperWrapper>
  );

}

export default CommunityDetails;