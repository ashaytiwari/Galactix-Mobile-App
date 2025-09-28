import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";

const styles = StyleSheet.create({
  communityMemberTileMain: {
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
  additionalLabel: {
    fontSize: 14,
    color: colors.secondary,
    backgroundColor: colors.blackGlassy,
    padding: 5,
    borderRadius: 5
  }
});

export default styles;