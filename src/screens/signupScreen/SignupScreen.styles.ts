import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  signupScreenMain: {
    flex: 1
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  heading: {
    fontSize: 35,
    fontFamily: fontFamilies.robotoBold,
    color: colors.white,
    marginBottom: 30
  },
  formCardContainer: {
    height: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50
  }
});

export default styles;