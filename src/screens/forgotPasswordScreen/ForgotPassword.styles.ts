import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formCardContainer: {
    backgroundColor: colors.white,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 50,
    height: '100%'
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  formBody: {
    flex: 1,
    rowGap: 25,
    marginBottom: 100
  },
  formInformationText: {
    fontSize: 15,
    color: colors.tertiary,
    lineHeight: 20,
  },
  primaryLabel: {
    fontSize: 17,
    color: colors.primary,
    lineHeight: 20,
    fontFamily: fontFamilies.spaceBlack
  }
});

export default styles;