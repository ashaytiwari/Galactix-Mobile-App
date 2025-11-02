import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  communityJoiningRequestsMain: {
    flex: 1,
  },
  headerContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    fontFamily: fontFamilies.robotoBold
  },
  pendingMembersListContainer: {
    padding: 16
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
  pendingMemberTile: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    paddingVertical: 10,
    backgroundColor: colors.blackGlassy,
    padding: 10,
    borderRadius: 10,
    lineHeight: 21,
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  memberName: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  tileControls: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15
  }
});

export default styles;