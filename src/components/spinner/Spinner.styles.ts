import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  spinnerMain: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinnerAnimation: {
    width: '80%',
    height: 250
  },
  spinnerText: {
    fontSize: 20,
    fontFamily: fontFamilies.robotoMedium,
    color: colors.white,
    marginTop: 30
  }
});

export default styles;