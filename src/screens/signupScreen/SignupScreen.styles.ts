import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";

const styles = StyleSheet.create({
  signupScreenMain: {
    flex: 1
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    rowGap: 10
  },
  formCardContainer: {
    backgroundColor: colors.white,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 50,
    marginBottom: 100
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
  formFooter: {
    marginTop: 20
  },
  alreadyHaveAnAccountContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    columnGap: 10
  },
  alreadyHaveAnAccountText: {
    fontSize: 15
  },
  alreadyHaveAnAccountSigninControl: {
    color: colors.primary,
    fontSize: 15,
    textDecorationStyle: 'solid',
    textDecorationColor: colors.primary,
    textDecorationLine: 'underline'
  }
});

export default styles;