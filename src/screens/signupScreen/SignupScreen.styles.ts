import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  signupScreenMain: {
    flex: 1
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    rowGap: 10
  },
  heading: {
    fontSize: 35,
    fontFamily: fontFamilies.robotoBold,
    color: colors.white,
    marginBottom: 20
  },
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
  signupForm: {
    flex: 1,
    rowGap: 15,
    marginBottom: 100
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

export default styles;