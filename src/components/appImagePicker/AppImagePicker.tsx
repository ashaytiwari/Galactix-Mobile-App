import React, { useEffect, useState } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
import { launchImageLibrary } from 'react-native-image-picker';

import { useAppDispatch } from '@hooks/redux';

import { appPopupAction } from '@store/slices/ui/appPopup';

import { IAppImagePickerProps, ImageFile } from '@interfaces/uiInterfaces/generic';

import AppScaledImage from '@components/AppScaledImage';

import { colors } from '@styles/colors';

import styles from './AppImagePicker.styles';

const AppImagePicker: React.FC<IAppImagePickerProps> = (props) => {

  const { buttonTitle, onImagePicked, image } = props;

  const dispatch = useAppDispatch();

  const [imageFile, setImageFile] = useState<ImageFile>(null);

  useEffect(() => {
    if (image) {
      setImageFile(image);
    }
  }, [image]);

  function handleImagePickerControlAttributes() {

    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5
      },
      async (response: any) => {
        if (response.didCancel) {
          console.log('User canceled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
          dispatch(appPopupAction.updateAppPopupState({ open: true, title: 'Alert!', message: response.errorMessage }));
        } else {

          const { uri, fileName, type } = response?.assets[0];
          const _imageFile = { uri, fileName, fileType: type };

          setImageFile(_imageFile);
          onImagePicked(_imageFile);

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
      url: imageFile?.uri! || imageFile?.url!,
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
        onImagePicked(null);
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