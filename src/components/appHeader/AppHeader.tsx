import React, { useState } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { useLogout } from '@hooks/queriesMutations/authentication';

import screenNames from '@constants/screenNames';
import { IAppHeaderProps } from '@interfaces/uiInterfaces/generic';

import { colors } from '@styles/colors';

import styles from './AppHeader.styles';

const AppHeader: React.FC<IAppHeaderProps> = (props) => {

  const { title } = props;

  const navigation = useNavigation<any>();
  const logoutMutation = useLogout();

  const [displayMoreInfoPopup, setDisplayMoreInfoPopup] = useState(false);

  const moreActions = [
    {
      label: 'New Community',
      action: () => { }
    },
    {
      label: 'Profile',
      action: () => {
        navigation.navigate(screenNames.PROFILE);
        setDisplayMoreInfoPopup(false);
      }
    },
    {
      label: 'Log Out',
      action: () => {
        logoutMutation.mutate();
        setDisplayMoreInfoPopup(false);
      }
    }
  ];

  function renderActionItem(item: any, index: number) {

    const actionItemAttributes = {
      style: styles.actionItem,
      onPress: item.action
    };

    return (
      <TouchableOpacity key={index} {...actionItemAttributes}>
        <Text style={styles.actionItemText}>{item.label}</Text>
      </TouchableOpacity>
    );
  }

  function renderMoreInfoPopup() {

    if (displayMoreInfoPopup === false) {
      return;
    }

    const moreInfoPopupBackdropAttributes = {
      style: styles.moreInfoPopupBackdrop,
      onPress() {
        setDisplayMoreInfoPopup(false);
      }
    };

    return (
      <Pressable {...moreInfoPopupBackdropAttributes}>
        <View style={styles.moreInfoContent}>
          {
            moreActions.map((action, index) => (
              renderActionItem(action, index)
            ))
          }
        </View>
      </Pressable>
    );

  }

  const moreControlAttributes = {
    style: styles.moreControl,
    onPress() {
      setDisplayMoreInfoPopup(true);
    }
  };

  const moreIconAttributes = {
    name: 'ellipsis-vertical',
    size: 18,
    color: colors.white,
  };

  return (
    <View style={styles.appHeaderMain}>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity {...moreControlAttributes}>
        <Icon {...moreIconAttributes} />
      </TouchableOpacity>
      {renderMoreInfoPopup()}
    </View>
  );

};

export default AppHeader;