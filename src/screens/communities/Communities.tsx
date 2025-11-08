import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';

import { useMMKVStorage } from 'react-native-mmkv-storage';
import { useNavigation } from '@react-navigation/native';

import { useAppDispatch } from '@hooks/redux';
import { useGetCommunities, useJoinCommunity } from '@hooks/queriesMutations/communities';

import { IExploreCommunitiesStateModel } from '@interfaces/uiInterfaces/communities';
import { IPaginationMetadataModel } from '@interfaces/models/common';
import { ICommunityModel } from '@interfaces/models/communities';

import { getCommunitiesRequestTypes } from '@constants/getCommunitiesRequestTypes';
import communityTabs from '@constants/communitiesTabs';
import screenNames from '@constants/screenNames';

import BackgroundWallpaperWrapper from '@components/backgroundWallpaperWrapper/BackgroundWallpaperWrapper';
import AppHeader from '@components/appHeader/AppHeader';
import AppSearchBar from '@components/appSearchBar/AppSearchBar';
import Spinner from '@components/spinner/Spinner';
import AppPopup from '@components/appPopup/AppPopup';

import { MMKV, STORAGE_KEYS } from '@utilities/mmkvStorage';

import { colors } from '@styles/colors';

import CommunityTile from './communityTile/CommunityTile';

import { checkUserAlreadyRequestedToJoinCommunity, getFilterInformationLabel } from './utilities';

import styles from './Communities.styles';
import { balanceConfirmationPopupAction } from '@store/slices/ui/balanceConfirmationPopup';
import { appPopupAction } from '@store/slices/ui/appPopup';

const PAGINATION_LIMIT = 5;

function Communities() {

  const navigation: any = useNavigation();
  const dispatch = useAppDispatch();

  const [userAuthDetails]: any = useMMKVStorage(STORAGE_KEYS.USER_AUTH_DETAILS, MMKV);

  const [selectedCommunity, setSelectedCommunity] = useState<null | ICommunityModel>(null);
  const [appPopupState, setAppPopupState] = useState<any>({
    open: false,
    message: '',
    footerControls: []
  });

  const [rootState, setRootState] = useState<IExploreCommunitiesStateModel>({
    communities: [],
    page: 1,
    loading: false,
    hasMore: true,
    tab: getCommunitiesRequestTypes.EXPLORE_COMMUNITIES,
    textSearch: ''
  });

  const getCommunities = useGetCommunities();
  const joinCommunityMutation = useJoinCommunity();

  useEffect(() => {
    fetchCommunities(rootState.page, rootState.textSearch, rootState.tab);
  }, []);

  const fetchCommunities = useCallback(async (page: number, textSearch: string, tab: string) => {

    updateRootState('loading', true);

    const response = await getCommunities(tab, page, PAGINATION_LIMIT, userAuthDetails._id, textSearch);

    if (response?.data?.statusCode !== 200) {
      updateRootState('loading', false);
      return;
    }

    const paginatedResponseData = response?.data?.data;
    const newRecords = paginatedResponseData.records;
    const metadata: IPaginationMetadataModel = paginatedResponseData.pagination;

    setRootState((_rootState) => {

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

  function handleEndReached() {

    if (rootState.loading || !rootState.hasMore) {
      return;
    }

    fetchCommunities(rootState.page + 1, rootState.textSearch, rootState.tab);
  }

  function closePrivateCommunityPopup() {
    setAppPopupState((_state: any) => {
      return {
        ..._state,
        open: false
      };
    });
  }

  function handleCommunityPress(community: ICommunityModel) {

    if (community.isPrivate === false) {
      return navigation.navigate(screenNames.COMMUNITY_ROOM, { community });
    }

    const isRequested = checkUserAlreadyRequestedToJoinCommunity(userAuthDetails._id, community.pendingMembers);
    console.log(isRequested, 'isRequested');

    setSelectedCommunity(community);

    if (isRequested === true) {
      return setAppPopupState({
        open: true,
        message: "You've already submitted a request to join this community. Please wait for approval from the community admins.",
        footerControls: []
      });
    }

    return setAppPopupState({
      open: true,
      message: "This community is private. Join now to unlock and engage with its content!",
      footerControls: [
        {
          text: 'Proceed',
          onPress() {
            closePrivateCommunityPopup();
            dispatch(balanceConfirmationPopupAction.updateBalanceConfirmationPopup({
              open: true,
              actionAmount: 5,
              onConfirmed: joinCommunity
            }));
          },
        },
        {
          text: 'Cancel',
          onPress() {
            setSelectedCommunity(null);
          },
        }
      ]
    });

  }

  async function joinCommunity() {

    if (joinCommunityMutation.isPending === true) {
      return;
    }

    const params = {
      communityId: selectedCommunity?._id!
    };

    const response = await joinCommunityMutation.mutateAsync(params);
    const responseData = response?.data;

    console.log(response);

    if (responseData?.statusCode !== 200) {
      return dispatch(appPopupAction.updateAppPopupState({
        open: true,
        title: 'Error',
        message: responseData?.message
      }));
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

  function renderCommunityItem(community: ICommunityModel, index: number) {

    const communityTileAttributes = {
      community,
      callingFrom: rootState.tab,
      onPress: handleCommunityPress
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

  function renderFilterTab(tab: any, index: number) {

    let filterTabStyle: any = styles.filterTab;

    if (rootState.tab === tab.value) {
      filterTabStyle = [styles.filterTab, styles.activeFilterTab];
    }

    const filterTabAttributes = {
      style: filterTabStyle,
      onPress() {
        fetchCommunities(1, '', tab.value);
      }
    };

    return (
      <TouchableOpacity {...filterTabAttributes} key={index}>
        <Text style={styles.filterTabText}>{tab.name}</Text>
      </TouchableOpacity>
    );

  }

  function renderFilters() {

    const appSearchBarAttributes = {
      placeholder: 'Search',
      name: 'search',
      value: rootState.textSearch,
      onChange(text: string) {
        fetchCommunities(1, text, rootState.tab);
      },
      onClear() {
        fetchCommunities(1, '', rootState.tab);
      }
    };

    return (
      <View style={styles.filtersWrapper}>
        <AppSearchBar {...appSearchBarAttributes} />
        <View style={styles.filterTabsWrapper}>
          {
            communityTabs.map((tab, index) => (
              renderFilterTab(tab, index)
            ))
          }
        </View>
        <Text style={styles.filterInformationMessage}>{getFilterInformationLabel(rootState.tab)}</Text>
      </View>
    );
  }

  function renderEmptyListComponent() {

    return (
      <View style={styles.noDataSection}>
        <Text style={styles.noDataMessage}>No communities available!</Text>
      </View>
    );

  }

  function renderCommunitiesList() {

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

  const appPopupAttributes = {
    open: appPopupState.open,
    title: 'Private Community',
    message: appPopupState.message,
    footerControls: appPopupState.footerControls,
    onClose: closePrivateCommunityPopup
  };

  return (
    <BackgroundWallpaperWrapper>

      <AppHeader title='Communities' />

      <View style={styles.communitiesMain}>
        {renderFilters()}
        {renderCommunitiesList()}
      </View>

      <AppPopup {...appPopupAttributes} />

    </BackgroundWallpaperWrapper>
  );

}

export default Communities;