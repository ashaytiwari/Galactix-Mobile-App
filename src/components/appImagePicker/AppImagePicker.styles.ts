import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  appImagePickerMain: {
    // flex: 1
  },
  imagePickerButton: {
    width: '100%',
    backgroundColor: colors.blackGlassy,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  imagePickerButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fontFamilies.robotoMedium,
    textDecorationColor: colors.white,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    color: colors.white
  },
  imageContainer: {
    width: '100%',
    backgroundColor: colors.eclipseGray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  removeImageControl: {
    width: 25,
    height: 25,
    backgroundColor: colors.white,
    borderRadius: 25,
    position: 'absolute',
    top: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;