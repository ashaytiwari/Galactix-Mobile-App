import { Dimensions, StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  communityDetailsMain: {
    flex: 1
  },
  header: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'relative',
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
  },
  communityDetailsWrapper: {
    rowGap: 20,
    paddingVertical: 20,
    paddingHorizontal: 14,
    borderBottomWidth: 10,
    borderBottomColor: colors.black,
  },
  communityImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  communityName: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontFamily: fontFamilies.robotoBold
  },
  communityProfileAvatarContainer: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  communityProfileAvatarText: {
    fontFamily: fontFamilies.robotoBold,
    color: colors.white
  },
  communityDescription: {
    fontSize: 14,
    fontFamily: fontFamilies.robotoMedium,
    color: colors.white,
    backgroundColor: colors.blackGlassy,
    padding: 10,
    borderRadius: 10,
    lineHeight: 21,
    textAlign: 'justify'
  },
  communityMembersSection: {
    rowGap: 20,
    paddingVertical: 20,
    paddingHorizontal: 14,
  },
  communityMembersTitle: {
    fontSize: 18,
    color: 'white',
    fontFamily: fontFamilies.robotoBold
  },
  moreActionsPopupBackdrop: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    position: 'absolute',
    top: 0,
    zIndex: 9,
    backgroundColor: colors.homeGradientBlack
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