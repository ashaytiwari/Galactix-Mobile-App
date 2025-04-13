import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  homeHeaderContainer: {
    width: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  appLogoImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 5
  },
  loginControl: {
    paddingVertical: 8
  },
  loginControlText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fontFamilies.robotoBold,
    letterSpacing: 0.3,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline'
  }
});

export default styles;