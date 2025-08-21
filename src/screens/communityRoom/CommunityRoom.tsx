import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { useGetCommunityPosts } from '@hooks/queriesMutations/posts';

import { ICommunityModel } from '@interfaces/models/communities';
import { ICommunityRoomStateModel } from '@interfaces/uiInterfaces/posts';
import { IPaginationMetadataModel } from '@interfaces/models/common';
import { IPostModel } from '@interfaces/models/posts';

import BackgroundWallpaperWrapper from '@components/backgroundWallpaperWrapper/BackgroundWallpaperWrapper';
import Spinner from '@components/spinner/Spinner';

import CommunityRoomHeader from './communityRoomHeader/CommunityRoomHeader';

import styles from './CommunityRoom.styles';

const PAGINATION_LIMIT = 5;

function CommunityRoom() {

  const navigation = useNavigation();
  const route: any = useRoute();
  const community: ICommunityModel = route.params?.community;

  const [rootState, setRootState] = useState<ICommunityRoomStateModel>({
    posts: [],
    page: 1,
    loading: false,
    hasMore: true
  });

  const getCommunityPosts = useGetCommunityPosts();

  useEffect(() => {
    fetchCommunityPosts(rootState.page);
  }, []);

  const fetchCommunityPosts = useCallback(async (page: number) => {

    updateRootState('loading', true);

    const response = await getCommunityPosts(page, PAGINATION_LIMIT, community._id);

    if (response?.data?.statusCode !== 200) {
      updateRootState('loading', false);
      return;
    }

    const paginatedResponseData = response?.data?.data;
    const newRecords = paginatedResponseData.records;
    const metadata: IPaginationMetadataModel = paginatedResponseData.pagination;

    setRootState((_rootState) => {

      const updatedPosts = [
        ..._rootState.posts,
        ...newRecords.filter(
          (record: IPostModel) => !_rootState.posts.some((c) => c._id === record._id) // Avoid duplicates
        ),
      ];

      return {
        ..._rootState,
        loading: false,
        page,
        hasMore: Boolean(metadata.nextPage),
        posts: updatedPosts,
      };

    });

  }, []);

  function updateRootState(key: string, value: any) {
    setRootState((_rootState) => {
      return {
        ..._rootState,
        [key]: value
      };
    });
  }

  function handleEndReached() {

    if (rootState.loading || !rootState.hasMore) {
      return;
    }

    fetchCommunityPosts(rootState.page + 1);
  }
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