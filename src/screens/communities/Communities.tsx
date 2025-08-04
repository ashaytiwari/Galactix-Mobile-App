import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import styles from './Communities.styles';
import BackgroundWallpaperWrapper from '@components/backgroundWallpaperWrapper/BackgroundWallpaperWrapper';
import AppHeader from '@components/appHeader/AppHeader';
import { IExploreCommunitiesStateModel } from '@interfaces/uiInterfaces/communities';
import { getCommunitiesRequestTypes } from '@constants/getCommunitiesRequestTypes';
import { useMMKVStorage } from 'react-native-mmkv-storage';
import { MMKV, STORAGE_KEYS } from '@utilities/mmkvStorage';
import { useGetCommunities } from '@hooks/queriesMutations/communities';
import { IPaginationMetadataModel } from '@interfaces/models/common';
import { ICommunityModel } from '@interfaces/models/communities';
import { debounce } from 'lodash';

const PAGINATION_LIMIT = 2;

function Communities() {

  const [userAuthDetails]: any = useMMKVStorage(STORAGE_KEYS.USER_AUTH_DETAILS, MMKV);

  const [rootState, setRootState] = useState<IExploreCommunitiesStateModel>({
    communities: [],
    page: 1,
    loading: false,
    hasMore: true,
    tab: getCommunitiesRequestTypes.EXPLORE_COMMUNITIES,
    textSearch: ''
  });

  const getCommunities = useGetCommunities();

  useEffect(() => {
    fetchCommunities(rootState.page, rootState.textSearch, rootState.tab);
  }, []);

  console.log(rootState);

  const fetchCommunities = useCallback(async (page: number, textSearch: string, tab: string) => {

    console.log(rootState.hasMore);

    updateRootState('loading', true);

    const response = await getCommunities(tab, page, PAGINATION_LIMIT, userAuthDetails._id, textSearch);

    if (response?.data?.statusCode !== 200) {
      updateRootState('loading', false);
      return;
    }

    const paginatedResponseData = response?.data?.data;
    const newRecords = paginatedResponseData.records;
    const metadata: IPaginationMetadataModel = paginatedResponseData.pagination;

    console.log(paginatedResponseData);

    setRootState((_rootState) => {

      if (_rootState.hasMore === false) {
        return _rootState;
      }

      const isTextSearchQueryChanged = textSearch !== _rootState.textSearch;
      const isTabChanged = tab !== _rootState.tab;
      let isFiltersChanged = false;

      if (isTextSearchQueryChanged === true || isTabChanged === true) {
        isFiltersChanged = true;
      }

      const updatedCommunities = isFiltersChanged === true ? newRecords : [
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
        tab,
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

  const handleEndReached = useCallback(
    debounce(() => {
      fetchCommunities(rootState.page + 1, rootState.textSearch, rootState.tab);
    }, 300), // 300ms debounce
    [rootState.page, rootState.hasMore, rootState.loading]
  );

  function renderCommunityItem(community: ICommunityModel, index: number) {
    return (
      <View style={styles.communityItemWrapper}>
        <Text>{community.communityName}</Text>
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
    onEndReachedThreshold: 0,
    ListFooterComponent: () => (
      rootState.loading ? <ActivityIndicator size="large" color="blue" style={{ margin: 20 }} /> : null
    )
  };

  return (
    <BackgroundWallpaperWrapper>

      <AppHeader />

      <View>
        <Text>Community</Text>

        <FlatList {...communitiesListAttributes} />
      </View>


    </BackgroundWallpaperWrapper>
  );

}

export default Communities;