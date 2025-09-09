import { Platform, StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  communityEditorMain: {
    rowGap: 20,
    flex: 1
  },
  header: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 20
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: fontFamilies.robotoBold,
    letterSpacing: 0.3,
    color: colors.white
  },
  communityFormWrapper: {
    paddingHorizontal: 14,
    rowGap: 15,
  },
  infoLabel: {
    color: colors.primary,
    padding: 10,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    lineHeight: 20,
    fontSize: 14,
    marginBottom: 10,
    fontFamily: fontFamilies.robotoMedium
  },
  inputTextControl: {
    borderWidth: 1,
    borderColor: colors.darkTransparentColor,
    backgroundColor: colors.blackGlassy,
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 20,
    color: colors.white,
    fontSize: 15,
    letterSpacing: 0.2,
  },
  inputLabel: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fontFamilies.robotoMedium
  },
  descriptionControl: {
    minHeight: 120
  },
  formGroup: {
    rowGap: 10,
  },
  controlRow: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center'
  },
  switchControl: {
    transform: Platform.OS === 'android' ? [{ scaleX: 1.35 }, { scaleY: 1.35 }] : []
  },
  communityStatusText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fontFamilies.robotoMedium
  },
  saveControl: {
    marginTop: 30
  }
});

export default styles;