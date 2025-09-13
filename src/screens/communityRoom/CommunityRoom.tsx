import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { useGetCommunityPosts } from '@hooks/queriesMutations/posts';

import { ICommunityModel } from '@interfaces/models/communities';
import { ICommunityRoomStateModel } from '@interfaces/uiInterfaces/posts';
import { IPaginationMetadataModel } from '@interfaces/models/common';
import { IPostModel } from '@interfaces/models/posts';

import BackgroundWallpaperWrapper from '@components/backgroundWallpaperWrapper/BackgroundWallpaperWrapper';
import Spinner from '@components/spinner/Spinner';

import { colors } from '@styles/colors';

import CommunityRoomHeader from './communityRoomHeader/CommunityRoomHeader';
import PostTile from './postTile/PostTile';

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

  function renderEmptyListComponent() {

    return (
      <View style={styles.noDataSection}>
        <Text style={styles.noDataMessage}>Looks like this community has no posts yet. Be the first to share something!</Text>
      </View>
    );

  }

  function renderListFooterComponent() {

    if (rootState.loading === false) {
      return <View style={{ marginVertical: 80 }}></View>;
    }

    const activityIndicatorAttributes = {
      color: colors.white,
      style: { marginTop: 10, marginBottom: 20 }
    };

    return <ActivityIndicator size='large' {...activityIndicatorAttributes} />;
  }

  function renderPostItem(post: IPostModel, index: number) {

    const postTileAttributes = {
      post,
      isUserGuestToCommunity: false,
      communityCreatedBy: community.createdBy
    };

    return <PostTile {...postTileAttributes} />;
  }

  function renderContent() {

    if (rootState.loading === true && rootState.posts?.length === 0) {
      return (
        <View style={styles.spinnerWrapper}>
          <Spinner />
        </View>
      );
    }

    const communityPostsListAttributes = {
      data: rootState.posts,
      renderItem({ item, index }: any) {
        return renderPostItem(item, index);
      },
      keyExtractor: (item: IPostModel) => item._id,
      onEndReached: handleEndReached,
      onEndReachedThreshold: 0.5,
      ListFooterComponent: renderListFooterComponent,
      ListEmptyComponent: renderEmptyListComponent,
      contentContainerStyle: styles.postsListContainer,
    };

    return <FlatList {...communityPostsListAttributes} />;

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
      <View style={styles.communityRoomMain}>
        {renderContent()}
      </View>
    </BackgroundWallpaperWrapper>
  );
}

export default CommunityRoom;