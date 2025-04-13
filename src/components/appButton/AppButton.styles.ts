import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  appButtonMain: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 22,
    margin: 4,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    fontFamily: fontFamilies.robotoBold
  }
});

export default styles;