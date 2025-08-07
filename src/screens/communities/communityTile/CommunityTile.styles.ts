import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  communityTileMain: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.blackGlassy
  },
  communityProfileImage: {
    borderRadius: '50%',
  },
  communityAvatarContainer: {
    backgroundColor: colors.primary,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  communityAvatarText: {
    fontSize: 25,
    color: colors.white,
    fontFamily: fontFamilies.robotoMedium,
    letterSpacing: 0.3
  },
  communityDetailsContainer: {
    rowGap: 7,
    flex: 1,
    position: 'relative'
  },
  communityName: {
    fontSize: 15,
    color: colors.white,
    fontFamily: fontFamilies.robotoBold
  },
  communityDescription: {
    fontSize: 12.5,
    color: colors.white,
    opacity: 0.8,
    fontFamily: fontFamilies.robotoMedium,
    lineHeight: 18
  },
  lockIcon: {
    position: 'absolute',
    top: 0,
    right: 5,
  }
});

export default styles;