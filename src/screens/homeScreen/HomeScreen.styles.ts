import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";
import { StyleSheet } from "react-native";

const homeScreenStyles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20
  },
  headingContainer: {
    marginVertical: 20 
  },
  mainText: {
    fontSize: 50,
    fontFamily: fontFamilies.spaceBlack,
    color: colors.white,
  }
});

export default homeScreenStyles;