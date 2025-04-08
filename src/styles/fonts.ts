import { Platform } from "react-native";

function isIOS() {
  return Platform.OS === 'ios';
}

/**
 * for ios devices we need to use postscript name of the languages
 * e.g. 'BlackFuture' is the postscript name of spaceBlack language
 */
export const fontFamilies = {
  robotoBold: 'Roboto-Bold',
  robotoMedium: 'Roboto-Medium',
  robotoRegular: 'Roboto-Regular',
  spaceBlack: isIOS() ? 'BlackFuture' : 'Space-Black-Future-Regular'
};