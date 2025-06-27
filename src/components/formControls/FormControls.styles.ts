import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";

const styles = StyleSheet.create({
  formGroup: {
    rowGap: 10
  },
  formLabel: {
    color: colors.eclipseGray,
    fontSize: 14
  },
  formTextInput: {
    borderWidth: 1,
    borderColor: colors.primary,
    color: colors.eclipseGray,
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 14,
    fontSize: 16
  },
  errorMessage: {
    color: colors.error,
    fontSize: 14
  },
  errorInput: {
    borderColor: colors.error,
  }
});

export default styles;