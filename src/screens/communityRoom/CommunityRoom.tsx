import React from 'react';
import { Text, View } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import BackgroundWallpaperWrapper from '@components/backgroundWallpaperWrapper/BackgroundWallpaperWrapper';
import { ICommunityModel } from '@interfaces/models/communities';
import Spinner from '@components/spinner/Spinner';

import CommunityRoomHeader from './communityRoomHeader/CommunityRoomHeader';

import styles from './CommunityRoom.styles';

function CommunityRoom() {

  const navigation = useNavigation();
  const route: any = useRoute();
  const community: ICommunityModel = route.params?.community;

  const communityRoomHeaderAttributes = {
    communityName: community?.communityName,
    communityProfile: community?.profileImage?.url || '',
    onBack() {
      navigation.goBack();
    }
  };

  if (!community) {
    return <Spinner />;
  }

  return (
    <BackgroundWallpaperWrapper>
      <CommunityRoomHeader {...communityRoomHeaderAttributes} />
      <Text>Community Room</Text>
    </BackgroundWallpaperWrapper>
  );
}

export default CommunityRoom;