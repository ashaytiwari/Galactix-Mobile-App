import { Dimensions, StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  walletMain: {
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  title: {
    fontFamily: fontFamilies.robotoBold,
    color: colors.white,
    fontSize: 18
  },
  walletContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
    rowGap: 10
  },
  coinStackImage: {
    width: '100%',
    height: Dimensions.get('window').height * 0.2,
    resizeMode: 'contain'
  },
  balanceInfo: {
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
  coinsInstructionsControl: {
    marginTop: 20,
    width: '100%',
    backgroundColor: colors.blackGlassy,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  coinsInstructionsControlText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fontFamilies.robotoMedium,
    textDecorationColor: colors.white,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    color: colors.white
  }
});

export default styles;