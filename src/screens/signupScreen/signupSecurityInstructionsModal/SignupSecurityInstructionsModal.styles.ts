import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  signupSecurityInstructionsModalMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blackGlassy
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  heading: {
    fontSize: 18,
    fontFamily: fontFamilies.robotoBold,
    lineHeight: 27
  },
  bodyContent: {
    borderRadius: 10,
    width: '90%',
    rowGap: 15,
    elevation: 5,
    shadowColor: colors.blackGlassy,
    backgroundColor: colors.white,
    padding: 15
  },
  contentMessage: {
    fontSize: 14,
    color: colors.tertiary,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: colors.tertiary,
    fontFamily: fontFamilies.robotoMedium,
    lineHeight: 19,
  },
  instructionsHeading: {
    fontSize: 14,
    color: colors.primaryBackground,
    fontFamily: fontFamilies.robotoMedium,
    lineHeight: 19,
  },
  instructionsText: {
    fontSize: 14,
    color: colors.tertiary,
    lineHeight: 20,
    paddingBottom: 7,
  }
});

export default styles;