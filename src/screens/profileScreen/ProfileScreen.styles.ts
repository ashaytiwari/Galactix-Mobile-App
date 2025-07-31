import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  profileScreenMain: {
    paddingHorizontal: 14,
    paddingVertical: 10
  },
  title: {
    fontFamily: fontFamilies.robotoBold,
    color: colors.white,
    fontSize: 18
  },
  avatarWrapper: {
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  appAvatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 120,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  appAvatarText: {
    fontSize: 55,
    color: colors.white,
    fontFamily: fontFamilies.robotoBold,
    letterSpacing: 0.3
  },
  fieldView: {
    borderWidth: 1,
    borderColor: colors.homeGradientBlack,
    backgroundColor: colors.blackGlassy,
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 20
  },
  fieldViewText: {
    color: colors.white,
    fontSize: 15,
    letterSpacing: 0.2
  }
});

export default styles;