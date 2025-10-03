import React from 'react';
import { Text, View } from 'react-native';

import { useMMKVStorage } from 'react-native-mmkv-storage';

import { ICommunityMemberTileProps } from '@interfaces/uiInterfaces/communities';

import AppAvatar from '@components/appAvatar/AppAvatar';

import { MMKV, STORAGE_KEYS } from '@utilities/mmkvStorage';

import styles from './CommunityMemberTile.styles';

const CommunityMemberTile: React.FC<ICommunityMemberTileProps> = (props) => {

  const { member, communityCreatedBy } = props;

  const [userAuthDetails]: any = useMMKVStorage(STORAGE_KEYS.USER_AUTH_DETAILS, MMKV);

  const memberName = `${member?.firstName} ${member?.lastName}`;

  function renderAdditionalLabel() {

    if (member._id === communityCreatedBy) {

      let label = 'Admin';

      if (member?._id === userAuthDetails._id) {
        label = 'Admin-You';
      }

      return <Text style={styles.additionalLabel}>{label}</Text>;
    }

    if (member?._id === userAuthDetails._id) {
      return <Text style={styles.additionalLabel}>You</Text>;
    }

  }

  const appAvatarAttributes = {
    text: memberName,
  };

  return (
    <View style={styles.communityMemberTileMain}>
      <View style={styles.leftSection}>
        <AppAvatar {...appAvatarAttributes} />
        <Text style={styles.memberName}>{memberName}</Text>
      </View>
      {renderAdditionalLabel()}
    </View>
  );
};

export default CommunityMemberTile;