import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  appAvatarMain: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarText: {
    fontSize: 13,
    color: colors.white,
    fontFamily: fontFamilies.robotoBold,
    letterSpacing: 0.3
  }
});

export default styles;