import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { IFormInputTextControl } from '@interfaces/uiInterfaces/formControls';

import { colors } from '@styles/colors';

import styles from './FormControls.styles';

const FormInputTextControl: React.FC<IFormInputTextControl> = (props) => {

  const { label, error, keyboardType = 'default', placeholder, value, onChangeText, onBlur } = props;

  function renderLabel() {

    if (!label) {
      return;
    }

    return <Text style={styles.formLabel}>{label}</Text>;

  }

  function renderErrorMessage(){

    if (!error) {
      return;
    }

    return <Text style={styles.errorMessage}>{error}</Text>;

  }

  const inputControlStyle = error ? [styles.formTextInput, styles.errorInput] : styles.formTextInput;

  const textInputAttributes = {
    placeholder,
    placeholderTextColor: colors.tertiary,
    value,
    onChangeText,
    onBlur,
    style: inputControlStyle
  };

  return (
    <View style={styles.formGroup}>
      {renderLabel()}
      <TextInput {...textInputAttributes} keyboardType={keyboardType} />
      {renderErrorMessage()}
    </View>
  );

};

export default FormInputTextControl;