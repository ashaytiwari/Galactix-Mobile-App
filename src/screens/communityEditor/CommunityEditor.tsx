import React, { useEffect, useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";

import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { useFileUpload } from "@hooks/queriesMutations/common";
import { useUpdateCommunityDetails } from "@hooks/queriesMutations/communities";

import { balanceConfirmationPopupAction } from "@store/slices/ui/balanceConfirmationPopup";

import { ICommunityEditorProps } from "@interfaces/uiInterfaces/communities";
import { ImageFile } from "@interfaces/uiInterfaces/generic";

import screenNames from "@constants/screenNames";
import coinsRateList from "@constants/coinsRateList";

import AppButton from "@components/appButton/AppButton";
import FormInputTextControl from "@components/formControls/FormInputTextControl";
import AppImagePicker from "@components/appImagePicker/AppImagePicker";
import Spinner from "@components/spinner/Spinner";

import { colors } from "@styles/colors";

import { setDefaultCommunityFormValues, validateCommunityForm } from "./utilities";

import styles from "./CommunityEditor.styles";

const CommunityEditor: React.FC<ICommunityEditorProps> = (props) => {

  const { communityDetails, onEditClose } = props;

  const navigation: any = useNavigation();
  const dispatch = useAppDispatch();

  const userProfile = useAppSelector((state) => state.user.userProfile);

  const [imageFile, setImageFile] = useState<any>(null);

  const formik = useFormik({
    initialValues: setDefaultCommunityFormValues(),
    validate: validateCommunityForm,
    onSubmit: handleSaveControlClick
  });
  const formikValues = formik.values;
  const formikErrors = formik.errors;

  const fileUploadMutation = useFileUpload();
  const updateCommunityDetailsMutation = useUpdateCommunityDetails();

  useEffect(() => {
    syncDataToFormikState();
  }, [communityDetails]);

  function syncDataToFormikState() {

    if (!communityDetails) {
      formik.resetForm();
      setImageFile(null);
      return;
    }

    formik.setValues(communityDetails);
    setImageFile(communityDetails.profileImage);
  }

  async function updateCommunityDetails() {

    let name: any = '', uniqueName: any = '';

    // if image file has the uniqueName key (i.e. image coming from the server, not picked by user)
    // doesn't call the file upload service
    if (imageFile && typeof imageFile?.uniqueName === 'undefined') {

      const fileResponse: any = await fileUploadMutation.mutateAsync(imageFile);
      const fileResponseData = fileResponse.data;

      name = fileResponseData.data.fileName;
      uniqueName = fileResponseData.data.uniqueFileName;

    } else if (imageFile) {
      const dataCommunityImage = communityDetails?.profileImage;
      name = dataCommunityImage?.name!;
      uniqueName = dataCommunityImage?.uniqueName!;
    } else {
      name = undefined;
      uniqueName = undefined;
    }

    const params = {
      ...formikValues,
      profileImage: {
        name,
        uniqueName
      }
    };

    const response: any = await updateCommunityDetailsMutation.mutateAsync(params);

    if (response?.data?.statusCode === 200) {
      navigation.navigate(screenNames.BOTTOM_TABS, { screen: screenNames.DASHBOARD_HOME });
    }

  }

  async function insufficientCoinsHandler() {
    navigation.navigate(screenNames.BOTTOM_TABS, { screen: screenNames.WALLET });
  }

  async function handleSaveControlClick() {

    // in case of editing community details, don't show the balance confirmation popup
    if (communityDetails) {
      updateCommunityDetails();
      return;
    }

    dispatch(balanceConfirmationPopupAction.updateBalanceConfirmationPopup({
      open: true,
      actionAmount: 20,
      onConfirmed: userProfile.coins > coinsRateList.CREATE_COMMUNITY ? updateCommunityDetails : insufficientCoinsHandler
    }));
  }

  function handleBackButton() {

    if (communityDetails && onEditClose) {
      onEditClose();
      return;
    }

    navigation.goBack();

  }

  function renderHeader() {

    const backIconAttributes = {
      name: 'arrow-back',
      size: 22,
      color: colors.white
    };

    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackButton}>
          <Icon {...backIconAttributes} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{communityDetails ? 'Edit Community Details' : 'Add Community'}</Text>
      </View>
    );
  }

  function renderCommunityPrivateSwitchControl() {

    const communityPrivateControlAttributes = {
      style: styles.switchControl,
      trackColor: { false: colors.tertiary, true: colors.primary },
      thumbColor: colors.white,
      value: formikValues.isPrivate,
      onValueChange() {
        formik.setFieldValue('isPrivate', !formikValues.isPrivate);
      },
    };

    return (
      <View style={styles.formGroup}>
        <Text style={styles.inputLabel}>Community Mode (Public/Private)*</Text>
        <View style={styles.controlRow}>
          <Switch {...communityPrivateControlAttributes} />
          <Text style={styles.communityStatusText}>{formikValues.isPrivate ? 'Private Community' : 'Public Community'}</Text>
        </View>
      </View>
    );

  }

  function renderAddImageControl() {

    const appImagePickerAttributes = {
      image: imageFile,
      buttonTitle: 'Add Image',
      onImagePicked(_imageFile: ImageFile) {
        setImageFile(_imageFile);
      }
    };

    return (
      <View style={styles.formGroup}>
        <Text style={styles.inputLabel}>Community Profile Image</Text>
        <AppImagePicker {...appImagePickerAttributes} />
      </View>
    );

  }

  function renderCoinsInstructionsLabel() {

    if (communityDetails) {
      return;
    }

    return <Text style={styles.infoLabel}>Heads up! It takes 20 Galactix coins to start your own community.</Text>;
  }

  function renderFormContent() {

    if (fileUploadMutation.isPending === true || updateCommunityDetailsMutation.isPending === true) {
      return <Spinner transparentBackground={true} />;
    }

    let communityNameError: string | undefined = '';
    let communityDescriptionError: string | undefined = '';

    if (formikErrors.communityName !== '' && formik.touched.communityName === true) {
      communityNameError = formikErrors.communityName;
    }

    if (formikErrors.communityDescription !== '' && formik.touched.communityDescription === true) {
      communityDescriptionError = formikErrors.communityDescription;
    }

    const communityNameControlAttributes = {
      label: 'Community Name*',
      placeholder: 'Enter community name',
      inputStyle: styles.inputTextControl,
      labelStyle: styles.inputLabel,
      value: formikValues.communityName,
      error: communityNameError,
      onChangeText(text: string) {
        formik.setFieldValue('communityName', text);
      }
    };

    const communityDescriptionControlAttributes = {
      label: 'Community Description*',
      placeholder: 'Enter community description',
      multiline: true,
      inputStyle: [styles.inputTextControl, styles.descriptionControl],
      labelStyle: styles.inputLabel,
      value: formikValues.communityDescription,
      error: communityDescriptionError,
      onChangeText(text: string) {
        formik.setFieldValue('communityDescription', text);
      }
    };

    const saveControlAttributes = {
      title: 'Save Community Details',
      containerStyle: styles.saveControl,
      onPress() {
        formik.handleSubmit();
      }
    };

    const scrollViewAttributes = {
      keyboardShouldPersistTaps: "handled" as const,
      showsVerticalScrollIndicator: false,
      style: { flex: 1 }
    };

    return (
      <ScrollView {...scrollViewAttributes}>
        <View style={styles.communityFormWrapper}>
          {renderCoinsInstructionsLabel()}
          <FormInputTextControl {...communityNameControlAttributes} />
          <FormInputTextControl {...communityDescriptionControlAttributes} />
          {renderCommunityPrivateSwitchControl()}
          {renderAddImageControl()}
          <AppButton {...saveControlAttributes} />
        </View>
      </ScrollView>
    );

  }

  return (
    <View style={styles.communityEditorMain}>
      {renderHeader()}
      {renderFormContent()}
    </View>
  );

};

export default CommunityEditor;