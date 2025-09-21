import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  balanceConfirmationPopupMain: {
    width: '100%',
    backgroundColor: colors.white,
    flex: 1
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: fontFamilies.robotoMedium
  },
  balanceMessage: {
    fontSize: 15,
    lineHeight: 21,
  },
  scrollViewContainer: {
    flexGrow: 1,
    rowGap: 25
  },
  strongText: {
    fontFamily: fontFamilies.robotoBold,
    color: colors.primary
  },
  footerControlsContainer: {
    flexDirection: 'row',
    columnGap: 10,
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white
  },
  cancelButtonText: {
    color: colors.primary
  }
});

export default styles;