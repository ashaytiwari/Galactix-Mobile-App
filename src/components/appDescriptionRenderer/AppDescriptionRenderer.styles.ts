import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  appDescriptionRendererMain: {
    flex: 1
  },
  contentP: {
    fontSize: 13,
    color: colors.white,
    lineHeight: 20,
    marginBottom: 10,
    flex: 1,
    opacity: 0.85,
  },
  contentStrong: {
    fontFamily: fontFamilies.robotoBold,
    fontSize: 13,
    color: colors.white,
    lineHeight: 20,
    marginBottom: 10,
    flex: 1,
    opacity: 0.85,
  },
  readMoreControlText: {
    fontSize: 13,
    fontFamily: fontFamilies.robotoMedium,
    color: colors.secondary,
    marginTop: 5,
  }
});

export default styles;