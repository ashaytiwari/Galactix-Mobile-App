import { IFormInputTextControl } from '@interfaces/uiInterfaces/formControls';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './FormControls.styles';
import { colors } from '@styles/colors';

const FormInputTextControl: React.FC<IFormInputTextControl> = (props) => {

  const { label, error, placeholder, value, onChangeText, onBlur } = props;

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
      <TextInput {...textInputAttributes} />
      {renderErrorMessage()}
    </View>
  );

};

export default FormInputTextControl;