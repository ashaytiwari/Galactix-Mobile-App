import React, { useState } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
import { launchImageLibrary } from 'react-native-image-picker';

import { useAppDispatch } from '@hooks/redux';

import { appPopupAction } from '@store/slices/ui/appPopup';

import { IAppImagePickerProps } from '@interfaces/uiInterfaces/generic';

import AppScaledImage from '@components/AppScaledImage';

import { colors } from '@styles/colors';

import styles from './AppImagePicker.styles';

type ImageFile = {
  uri: string,
  fileName: string,
  fileType: string
} | null

const AppImagePicker: React.FC<IAppImagePickerProps> = (props) => {

  const { buttonTitle } = props;

  const dispatch = useAppDispatch();

  const [imageFile, setImageFile] = useState<ImageFile>(null);

  function handleImagePickerControlAttributes() {

    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      async (response: any) => {
        if (response.didCancel) {
          console.log('User canceled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
          dispatch(appPopupAction.updateAppPopupState({ open: true, title: 'Alert!', message: response.errorMessage }));
        } else {

          const { uri, fileName, type } = response?.assets[0];
          setImageFile({ uri, fileName, fileType: type });
          console.log(imageFile);
        }
      }
    );

  }

  function renderButtonControl() {

    const imagePickerButtonAttributes = {
      style: styles.imagePickerButton,
      onPress: handleImagePickerControlAttributes
    };

    return (
      <TouchableOpacity {...imagePickerButtonAttributes}>
        <Text style={styles.imagePickerButtonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    );

  }

  function renderImageViewerContent() {

    const appScaledImageAttributes = {
      url: imageFile?.uri!,
      width: 150,
      height: 150,
    };

    const closeIconAttributes = {
      name: 'close',
      size: 20,
      color: colors.primary
    };

    const removeImageControlAttributes = {
      style: styles.removeImageControl,
      onPress() {
        setImageFile(null);
      }
    };

    return (
      <View style={styles.imageContainer}>
        <AppScaledImage {...appScaledImageAttributes} />
        <Pressable {...removeImageControlAttributes}>
          <Icon {...closeIconAttributes} />
        </Pressable>
      </View>
    );

  }

  return (
    <View style={styles.appImagePickerMain}>
      {imageFile ? renderImageViewerContent() : renderButtonControl()}
    </View>
  );

};

export default AppImagePicker;