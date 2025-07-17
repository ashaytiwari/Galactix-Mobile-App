import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';

import { Text } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import { IAppPopupFooterControl, IAppPopupProps } from '@interfaces/uiInterfaces/generic';

import { colors } from '@styles/colors';

import styles from './AppPopup.styles';

const AppPopup: React.FC<IAppPopupProps> = (props) => {

  const { title, message, hideCloseButton, footerControls, open, onClose } = props;

  function renderHeaderCloseButton() {

    if (hideCloseButton === true) {
      return;
    }

    const closeIconAttributes = {
      name: 'close',
      size: 20,
      color: colors.white,
    };

    return (
      <TouchableOpacity onPress={onClose}>
        <Icon {...closeIconAttributes} />
      </TouchableOpacity>
    );

  }

  function renderFooterControl(control: IAppPopupFooterControl, index: number) {

    const footerControlAttributes = {
      style: control.containerStyle || styles.footerControlStyle,
      onPress: control.onPress
    };

    return (
      <TouchableOpacity {...footerControlAttributes} key={index}>
        <Text style={control.textStyle || styles.footerControlTextStyle}>{control.text}</Text>
      </TouchableOpacity>
    );

  }

  function renderFooterControls() {

    if (!footerControls || footerControls.length === 0) {
      return;
    }

    return (
      <View style={styles.footerControls}>
        {
          footerControls.map((control: IAppPopupFooterControl, index: number) => (
            renderFooterControl(control, index)
          ))
        }
      </View>
    );

  }

  const modalAttributes = {
    transparent: true,
    visible: open,
    onRequestClose: onClose
  };

  return (
    <Modal {...modalAttributes} animationType='fade'>
      <View style={styles.appPopupMain}>

        <View style={styles.modalView}>

          <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
            {renderHeaderCloseButton()}
          </View>

          <Text style={styles.popupContent}>{message}</Text>

          {renderFooterControls()}
        </View>

      </View>
    </Modal>
  );

};

export default AppPopup;