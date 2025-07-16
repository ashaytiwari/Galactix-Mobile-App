import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { IFormInputTextControl } from '@interfaces/uiInterfaces/formControls';

import { colors } from '@styles/colors';

import styles from './FormControls.styles';

const FormSecureInputControl: React.FC<IFormInputTextControl> = (props) => {

  const { label, error, keyboardType = 'default', placeholder, value, onChangeText, onBlur } = props;

  const [showPassword, setShowPassword] = useState(false);

  function renderLabel() {

    if (!label) {
      return;
    }

    return <Text style={styles.formLabel}>{label}</Text>;

  }

  function renderErrorMessage() {

    if (!error) {
      return;
    }

    return <Text style={styles.errorMessage}>{error}</Text>;

  }

  function renderPasswordVisibilityControl() {

    const passwordVisibilityIconAttributes = {
      name: showPassword === true ? 'eye' : 'eye-off',
      size: 25,
      color: colors.eclipseGray,
    };

    const passwordVisibilityControlAttributes = {
      style: styles.showPasswordControl,
      onPress() {
        setShowPassword((_showPassword) => !_showPassword);
      }
    };

    return (
      <TouchableOpacity {...passwordVisibilityControlAttributes}>
        <Icon {...passwordVisibilityIconAttributes} />
      </TouchableOpacity>
    );
  }

  const secureInputControlStyle = error ? [styles.secureInputControlContainer, styles.errorInput] : styles.secureInputControlContainer;

  const textInputAttributes = {
    placeholder,
    placeholderTextColor: colors.tertiary,
    value,
    onChangeText,
    onBlur,
    secureTextEntry: showPassword === true ? false : true,
    style: styles.secureFormTextInput
  };

  return (
    <View style={styles.formGroup}>
      {renderLabel()}
      <View style={secureInputControlStyle}>
        <TextInput {...textInputAttributes} />
        {renderPasswordVisibilityControl()}
      </View>
      {renderErrorMessage()}
    </View>
  );

};

export default FormSecureInputControl;