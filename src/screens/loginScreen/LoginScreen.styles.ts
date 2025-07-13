import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  signinScreenMain: {
    flex: 1
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 100,
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
  signinForm: {
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
  formFooter: {
    marginTop: 20
  },
  createAccountContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    columnGap: 10
  },
  createAccountText: {
    fontSize: 15
  },
  createAccountSigninControl: {
    color: colors.primary,
    fontSize: 15,
    textDecorationStyle: 'solid',
    textDecorationColor: colors.primary,
    textDecorationLine: 'underline'
  }
});

export default styles;