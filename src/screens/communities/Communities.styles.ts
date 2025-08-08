import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  communitiesMain: {
    rowGap: 20,
    paddingVertical: 20,
  },
  communityItemWrapper: {
    width: '100%',
    height: 600,
    backgroundColor: 'red',
    marginBottom: 30,
    borderBottomWidth: 5,
    borderColor: 'white'
  },
  filtersWrapper: {
    rowGap: 15,
    paddingHorizontal: 14,
  },
  filterTabsWrapper: {
    flexDirection: 'row',
    columnGap: 12,
    alignItems: 'center'
  },
  filterTab: {
    borderWidth: 1,
    borderColor: colors.tertiary,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  activeFilterTab: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  filterTabText: {
    color: colors.white,
    fontSize: 13,
  },
  communitiesListContainer: {
    rowGap: 10
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
    borderRadius: 20
  },
  spinnerWrapper: {
    marginVertical: 150
  }
});

export default styles;