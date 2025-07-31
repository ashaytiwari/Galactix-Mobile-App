import { Dimensions, StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  appHeaderMain: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'relative'
    // backgroundColor: colors.darkTransparentColor
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: fontFamilies.robotoBold,
    letterSpacing: 0.3,
    color: colors.white
  },
  moreControl: {
    backgroundColor: colors.darkTransparentColor,
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.darkTransparentColor
  },
  moreInfoPopupBackdrop: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    position: 'absolute',
    top: 0,
  },
  moreInfoContent: {
    backgroundColor: colors.white,
    position: 'absolute',
    top: 60,
    right: 14,
    width: 150,
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 5,
    shadowColor: colors.blackGlassy,
  },
  actionItem: {
    padding: 10,
  },
  actionItemText: {
    fontSize: 14,
    fontFamily: fontFamilies.robotoMedium,
    opacity: 0.6,
    paddingHorizontal: 5
  }
});

export default styles;