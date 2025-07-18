import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  signupSuccessModalMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    fontFamily: fontFamilies.robotoBold,
    lineHeight: 27
  },
  bodyContent: {
    borderRadius: 5,
    width: '80%',
    rowGap: 10,
    elevation: 5,
    shadowColor: colors.blackGlassy
  },
  contentText: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.tertiary
  },
  highlightedText: {
    fontSize: 15,
    lineHeight: 21,
    color: colors.primary
  },
  imageWrapper: {
    alignItems: 'center'
  },
  coinStackImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  }
});

export default styles;