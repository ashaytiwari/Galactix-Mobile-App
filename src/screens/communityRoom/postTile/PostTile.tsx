import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

import { IPostTileProps } from '@interfaces/uiInterfaces/posts';

import AppAvatar from '@components/appAvatar/AppAvatar';
import AppDescriptionRenderer from '@components/appDescriptionRenderer/AppDescriptionRenderer';
import AppScaledImage from '@components/AppScaledImage';

import { colors } from '@styles/colors';

import { isPostByAdmin } from './utilities';

import styles from './PostTile.styles';

const PostTile: React.FC<IPostTileProps> = (props) => {

  const { post, isUserGuestToCommunity, communityCreatedBy } = props;

  const { width } = useWindowDimensions();

  const communityOwner = isPostByAdmin(communityCreatedBy, post.createdBy);

  function renderPostTileHeader() {

    const userDetails = post.userDetails;
    const userName = `${userDetails.firstName} ${userDetails.lastName}`;

    let secondaryLabel = moment(post.createdAt).fromNow();

    if (moment(post.createdAt).isSame(moment(post.updatedAt)) === false) {
      secondaryLabel += ` ● Edited`;
    }

    const appAvatarAttributes = {
      text: userName,
      textStyle: styles.appAvatarText,
      containerStyle: styles.appAvatarContainer,
    };

    const adminIconAttributes = {
      name: 'checkmark-circle',
      size: 16,
      color: colors.white,
    };

    return (
      <View style={styles.postTileHeader}>

        <View style={styles.postTileHeaderContent}>

          <AppAvatar {...appAvatarAttributes} />

          <View style={styles.headerUserDetailsWrapper}>
            <View style={styles.userNameWrapper}>
              <Text style={styles.userName}>{userName}</Text>
              {communityOwner && <Icon {...adminIconAttributes} />}
            </View>
            <Text style={styles.secondaryLabel}>{secondaryLabel}</Text>
          </View>

        </View>

      </View>
    );

  }

  function renderPostImage() {

    const postImageUrl = post.postImage?.url;

    if (!postImageUrl) {
      return;
    }

    const appScaledImageAttributes = {
      width: width - 28,
      height: 200,
      url: postImageUrl,
    };

    return <AppScaledImage {...appScaledImageAttributes} />

  }

  function renderPostContent() {

    return (
      <View style={styles.postContent}>
        <Text style={styles.postTitle}>{post.postTitle}</Text>
        <AppDescriptionRenderer description={post.postContent} />
      </View>
    );
  }

  return (
    <View style={styles.postTileMain}>
      {renderPostTileHeader()}
      {renderPostImage()}
      {renderPostContent()}
    </View>
  );
}

export default PostTile;