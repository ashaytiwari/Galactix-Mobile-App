import React from 'react';

import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useGetCommunityJoiningRequests, useHandleCommunityJoiningRequests } from '@hooks/queriesMutations/communities';

import { ICommunityJoiningRequestsProps } from '@interfaces/uiInterfaces/communities';
import { IMemberDetailModel } from '@interfaces/models/communities';

import { communityJoiningRequestsActions } from '@constants/communityJoiningRequestsActions';

import Spinner from '@components/spinner/Spinner';
import AppAvatar from '@components/appAvatar/AppAvatar';

import { colors } from '@styles/colors';

import styles from './CommunityJoiningRequests.styles';

const CommunityJoiningRequests: React.FC<ICommunityJoiningRequestsProps> = (props) => {

  const { communityId, onClose } = props;

  const handleCommunityJoiningRequestsMutation = useHandleCommunityJoiningRequests();
  const getCommunityJoiningRequestsQuery = useGetCommunityJoiningRequests(communityId);
  const pendingRequests: Array<IMemberDetailModel> = getCommunityJoiningRequestsQuery.data?.data?.data;

  async function handleJoiningRequests(action: string, memberId: string) {

    const params = {
      communityId: communityId,
      action,
      requestUserId: memberId
    };

    await handleCommunityJoiningRequestsMutation.mutateAsync(params);

  }

  function renderHeader() {

    const closeIconAttributes = {
      name: 'close',
      size: 22,
      color: colors.white
    };

    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Joining Requests</Text>
        <TouchableOpacity onPress={onClose}>
          <Icon {...closeIconAttributes} />
        </TouchableOpacity>
      </View>
    );
  }

  function renderEmptyListComponent() {

    return (
      <View style={styles.noDataSection}>
        <Text style={styles.noDataMessage}>No pending requests!</Text>
      </View>
    );

  }

  function renderPendingRequestTile(item: IMemberDetailModel, index: number) {

    const memberName = `${item.firstName} ${item.lastName}`;

    const appAvatarAttributes = {
      text: memberName,
    };

    const acceptIconAttributes = {
      name: 'checkmark',
      size: 22,
      color: colors.white
    };

    const rejectIconAttributes = {
      name: 'close',
      size: 22,
      color: colors.white
    };

    return (
      <View style={styles.pendingMemberTile}>
        <View style={styles.leftSection}>
          <AppAvatar {...appAvatarAttributes} />
          <Text style={styles.memberName}>{memberName}</Text>
        </View>
        <View style={styles.tileControls}>
          <TouchableOpacity onPress={() => handleJoiningRequests(communityJoiningRequestsActions.REJECT, item._id)}>
            <Icon {...rejectIconAttributes} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleJoiningRequests(communityJoiningRequestsActions.ACCEPT, item._id)}>
            <Icon {...acceptIconAttributes} />
          </TouchableOpacity>
        </View>
      </View>
    );

  }

  function renderContent() {

    if (getCommunityJoiningRequestsQuery.isLoading) {
      return <Spinner transparentBackground={true} />;
    }

    const pendingMembersListAttributes = {
      data: pendingRequests,
      renderItem({ item, index }: any) {
        return renderPendingRequestTile(item, index);
      },
      keyExtractor: (item: IMemberDetailModel) => item._id,
      ListEmptyComponent: renderEmptyListComponent,
      contentContainerStyle: styles.pendingMembersListContainer,
    };

    return <FlatList {...pendingMembersListAttributes} />;
  }

  return (
    <View style={styles.communityJoiningRequestsMain}>
      {renderHeader()}
      {renderContent()}
    </View>
  );
};

export default CommunityJoiningRequests;