import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { useMMKVStorage } from 'react-native-mmkv-storage';
import { useNavigation } from '@react-navigation/native';

import { useGetCommunitiesChatList } from '@hooks/queriesMutations/communities';

import { ICommunityModel } from '@interfaces/models/communities';
import { IPaginationMetadataModel } from '@interfaces/models/common';
import { IHomeCommunitiesChatListStateModel } from '@interfaces/uiInterfaces/communities';

import { getCommunitiesRequestTypes } from '@constants/getCommunitiesRequestTypes';
import screenNames from '@constants/screenNames';

import CommunityTile from '@screens/communities/communityTile/CommunityTile';
import BackgroundWallpaperWrapper from '@components/backgroundWallpaperWrapper/BackgroundWallpaperWrapper';
import AppSearchBar from '@components/appSearchBar/AppSearchBar';
import AppHeader from '@components/appHeader/AppHeader';
import Spinner from '@components/spinner/Spinner';

import { MMKV, STORAGE_KEYS } from '@utilities/mmkvStorage';

import { colors } from '@styles/colors';

import styles from './DashboardHome.styles';

const PAGINATION_LIMIT = 5;

function DashboardHome() {

  const navigation: any = useNavigation();

  const [userAuthDetails]: any = useMMKVStorage(STORAGE_KEYS.USER_AUTH_DETAILS, MMKV);

  const [rootState, setRootState] = useState<IHomeCommunitiesChatListStateModel>({
    communities: [],
    page: 1,
    loading: false,
    hasMore: true,
    textSearch: ''
  });

  const getCommunitiesChatList = useGetCommunitiesChatList();

  useEffect(() => {
    fetchCommunities(rootState.page, rootState.textSearch);
  }, []);

  const fetchCommunities = useCallback(async (page: number, textSearch: string) => {

    updateRootState('loading', true);

    const response = await getCommunitiesChatList(page, PAGINATION_LIMIT, userAuthDetails._id, textSearch);

    if (response?.data?.statusCode !== 200) {
      updateRootState('loading', false);
      return;
    }

    const paginatedResponseData = response?.data?.data;
    const newRecords = paginatedResponseData.records;
    const metadata: IPaginationMetadataModel = paginatedResponseData.pagination;

    setRootState((_rootState) => {

      const isTextSearchQueryChanged = textSearch !== _rootState.textSearch;

      const updatedCommunities = isTextSearchQueryChanged === true ? newRecords : [
        ..._rootState.communities,
        ...newRecords.filter(
          (record: ICommunityModel) => !_rootState.communities.some((c) => c._id === record._id) // Avoid duplicates
        ),
      ];

      return {
        ..._rootState,
        loading: false,
        page,
        textSearch,
        hasMore: Boolean(metadata.nextPage),
        communities: updatedCommunities,
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

    fetchCommunities(rootState.page + 1, rootState.textSearch);
  }

  function renderCommunityItem(community: ICommunityModel, index: number) {

    const communityTileAttributes = {
      community,
      callingFrom: getCommunitiesRequestTypes.HOME_CHAT_COMMUNITIES,
      onPress(community: ICommunityModel) {
        navigation.navigate(screenNames.COMMUNITY_ROOM, { community });
      }
    };

    return <CommunityTile {...communityTileAttributes} />;
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

  function renderFilters() {

    const appSearchBarAttributes = {
      placeholder: 'Search',
      name: 'search',
      value: rootState.textSearch,
      onChange(text: string) {
        fetchCommunities(1, text);
      },
      onClear() {
        fetchCommunities(1, '');
      }
    };

    return (
      <View style={styles.filtersWrapper}>
        <AppSearchBar {...appSearchBarAttributes} />
      </View>
    );
  }

  function renderEmptyListComponent() {

    return (
      <View style={styles.noDataSection}>
        <Text style={styles.noDataMessage}>No communities found in this galaxy! Create one or join an orbiting community to fill the void!</Text>
      </View>
    );

  }

  function renderCommunitiesChatList() {

    if (rootState.loading === true && rootState.communities?.length === 0) {
      return (
        <View style={styles.spinnerWrapper}>
          <Spinner />
        </View>
      );
    }

    const communitiesListAttributes = {
      data: rootState.communities,
      renderItem({ item, index }: any) {
        return renderCommunityItem(item, index);
      },
      keyExtractor: (item: ICommunityModel) => item._id,
      onEndReached: handleEndReached,
      onEndReachedThreshold: 0.5,
      ListFooterComponent: renderListFooterComponent,
      ListEmptyComponent: renderEmptyListComponent,
      contentContainerStyle: styles.communitiesListContainer,
    };

    return <FlatList {...communitiesListAttributes} />;

  }

  return (
    <BackgroundWallpaperWrapper>

      <AppHeader title='Galactix 🚀' />

      <View style={styles.dashboardHomeMain}>
        {renderFilters()}
        {renderCommunitiesChatList()}
      </View>

    </BackgroundWallpaperWrapper>
  );

}

export default DashboardHome;