import React from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";

import BackgroundWallpaperWrapper from "@components/backgroundWallpaperWrapper/BackgroundWallpaperWrapper";
import AppButton from "@components/appButton/AppButton";
import FormInputTextControl from "@components/formControls/FormInputTextControl";

import { colors } from "@styles/colors";

import { setDefaultCommunityFormValues, validateCommunityForm } from "./utilities";

import styles from "./CommunityEditor.styles";

function CommunityEditor() {

  const navigation: any = useNavigation();

  const formik = useFormik({
    initialValues: setDefaultCommunityFormValues(),
    validate: validateCommunityForm,
    onSubmit: handleSaveControlClick
  });
  const formikValues = formik.values;
  const formikErrors = formik.errors;

  async function handleSaveControlClick() { }

  function handleBackButton() {
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
        <Text style={styles.headerTitle}>Add Community</Text>
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

  // function renderAddImageControl(){

  // }

  function renderFormContent() {

    // if (fileUploadMutation.isPending === true || updateCommunityMutation.isPending === true) {
    //   return <Spinner />;
    // }

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
      onPress() { }
    };

    return (
      <View style={styles.communityFormWrapper}>
        <Text style={styles.infoLabel}>Heads up! It takes 20 Galactix coins to start your own community.</Text>
        <FormInputTextControl {...communityNameControlAttributes} />
        <FormInputTextControl {...communityDescriptionControlAttributes} />
        {renderCommunityPrivateSwitchControl()}
        {/* {renderAddImageControl()} */}
        <AppButton {...saveControlAttributes} />
      </View>
    );

  }

  return (
    <BackgroundWallpaperWrapper>
      <View style={styles.communityEditorMain}>
        {renderHeader()}
        {renderFormContent()}
      </View>
    </BackgroundWallpaperWrapper>
  );

};

export default CommunityEditor;