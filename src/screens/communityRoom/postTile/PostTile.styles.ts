import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  postTileMain: {
    backgroundColor: colors.blackGlassy,
    paddingVertical: 10,
    borderRadius: 5,
    rowGap: 15
  },
  postTileHeader: {
    paddingHorizontal: 10,
  },
  postTileHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  headerUserDetailsWrapper: {
    rowGap: 4,
  },
  userName: {
    fontSize: 15,
    color: colors.white,
    fontFamily: fontFamilies.robotoMedium,
    letterSpacing: 0.3
  },
  secondaryLabel: {
    fontSize: 12,
    color: colors.white,
    opacity: 0.8
  },
  appAvatarText: {
    fontSize: 15,
    color: colors.white,
    fontFamily: fontFamilies.robotoMedium,
    letterSpacing: 0.3
  },
  appAvatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postContent: {
    paddingHorizontal: 10,
    rowGap: 20
  },
  postTitle: {
    fontSize: 15,
    color: colors.white,
    fontFamily: fontFamilies.robotoMedium,
  },
  userNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 6
  },
});

export default styles;