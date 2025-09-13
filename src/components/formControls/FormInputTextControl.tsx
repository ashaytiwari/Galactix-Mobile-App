import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { IFormInputTextControl } from '@interfaces/uiInterfaces/formControls';

import { colors } from '@styles/colors';

import styles from './FormControls.styles';

const FormInputTextControl: React.FC<IFormInputTextControl> = (props) => {

  const { label, error, keyboardType = 'default', placeholder, value, inputStyle, labelStyle, multiline, onChangeText, onBlur } = props;

  function renderLabel() {

    if (!label) {
      return;
    }

    const labelTextStyle = labelStyle ? [styles.formLabel, labelStyle] : styles.formLabel;

    return <Text style={labelTextStyle}>{label}</Text>;

  }

  function renderErrorMessage() {

    if (!error) {
      return;
    }

    return <Text style={styles.errorMessage}>{error}</Text>;

  }

  let inputControlStyle: any = [styles.formTextInput];

  if (inputStyle) {
    inputControlStyle.push(inputStyle);
  }

  if (error) {
    inputControlStyle.push(styles.errorInput);
  }

  const textInputAttributes = {
    editable: true,
    placeholder,
    placeholderTextColor: colors.tertiary,
    value,
    onChangeText,
    onBlur,
    style: inputControlStyle,
    keyboardType: keyboardType || 'default' as any,
    multiline: multiline || false,
    numberOfLines: multiline === true ? 5 : 1,
    textAlignVertical: "top" as const
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