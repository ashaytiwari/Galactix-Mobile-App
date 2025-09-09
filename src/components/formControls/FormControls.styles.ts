import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";

const styles = StyleSheet.create({
  formGroup: {
    rowGap: 10,
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
    paddingVertical: 12,
    fontSize: 16
  },
  errorMessage: {
    color: colors.error,
    fontSize: 14
  },
  errorInput: {
    borderColor: colors.error,
  },
  secureInputControlContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  showPasswordControl: {
    paddingHorizontal: 20
  },
  secureFormTextInput: {
    borderWidth: 0,
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.eclipseGray
  }
});

export default styles;