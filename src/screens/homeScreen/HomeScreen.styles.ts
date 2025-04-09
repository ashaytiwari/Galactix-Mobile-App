import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  homeScreenMain: {
    padding: 20,
    rowGap: 30
  },
  mainText: {
    fontSize: 60,
    fontFamily: fontFamilies.spaceBlack,
    color: colors.white,
    textAlign: 'center'
  },
  headingContainer: {
    marginTop: 20
  },
  landingInformationText: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
    letterSpacing: 0.2,
    lineHeight: 28,
    opacity: 0.8,
    marginBottom: 20
  },
  buttonWrapper: {
    width: '50%',
    marginVertical: 0,
    marginHorizontal: 'auto'
  },
  homeAnimation: {
    width: '80%',
    height: 250
  }
});

export default styles;