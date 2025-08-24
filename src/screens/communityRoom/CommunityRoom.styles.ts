import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  communityRoomMain: {
    rowGap: 20,
    paddingVertical: 20,
    paddingHorizontal: 14
  },
  spinnerWrapper: {
    marginVertical: 150
  },
  postsListContainer: {
    rowGap: 20
  },
  noDataSection: {
    marginVertical: 50,
    marginHorizontal: 'auto'
  },
  noDataMessage: {
    fontSize: 14,
    fontFamily: fontFamilies.robotoMedium,
    color: colors.white,
    backgroundColor: colors.blackGlassy,
    paddingVertical: 7,
    paddingHorizontal: 25,
    borderRadius: 20,
    lineHeight: 20,
    textAlign: 'center'
  },
});

export default styles;