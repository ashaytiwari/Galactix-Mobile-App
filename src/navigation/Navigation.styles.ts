import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  appAvatarContainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: colors.primaryBackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.tertiary
  },
  activeAvatar: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  appAvatarText: {
    fontSize: 13,
    color: colors.tertiary,
    fontFamily: fontFamilies.robotoBold,
    letterSpacing: 0.3
  },
  activeAvatarText: {
    color: colors.white
  }
});

export default styles;