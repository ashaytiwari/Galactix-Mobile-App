import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  appPopupMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.homeGradientBlack,
  },
  modalView: {
    backgroundColor: colors.primaryBackground,
    borderWidth: 1,
    borderColor: colors.tertiary,
    borderRadius: 10,
    width: '80%',
    marginVertical: 0,
    marginHorizontal: 'auto',
    paddingHorizontal: 15,
    paddingVertical: 10,
    rowGap: 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.darkTransparentColor,
    paddingBottom: 10
  },
  headerTitle: {
    color: colors.white,
    fontSize: 17,
    fontFamily: fontFamilies.robotoMedium
  },
  popupContent: {
    color: colors.tertiary,
    fontSize: 15,
    lineHeight: 21,
    paddingBottom: 10
  },
  footerControls: {
    flexDirection: 'row-reverse',
    columnGap: 15,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: colors.darkTransparentColor,
    paddingTop: 10
  },
  footerControlStyle: {
    backgroundColor: 'inherit',
    paddingVertical: 6,
    paddingHorizontal: 12
  },
  footerControlTextStyle: {
    fontSize: 15,
    color: colors.white
  }
});

export default styles;