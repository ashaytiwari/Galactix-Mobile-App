import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  dashboardHomeMain: {
    rowGap: 20,
    paddingVertical: 20,
  },
  filtersWrapper: {
    rowGap: 15,
    paddingHorizontal: 14,
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
  spinnerWrapper: {
    marginVertical: 150
  },
  communitiesListContainer: {
    rowGap: 10
  },
});

export default styles;