import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  communityHeaderMain: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerLeftSection: {
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 10
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: fontFamilies.robotoBold,
    letterSpacing: 0.3,
    color: colors.white,
  },
  communityProfileImage: {
    borderRadius: '100%'
  },
  addPostControl: {
    backgroundColor: colors.darkTransparentColor,
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.darkTransparentColor,
  },
  joinCommunityControl: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  joinCommunityControlText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fontFamilies.robotoMedium,
  }
});

export default styles;