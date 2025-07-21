import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";

const styles = StyleSheet.create({
  signinScreenMain: {
    flex: 1
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
  linkControl: {
    color: colors.primary,
    fontSize: 15,
    textDecorationStyle: 'solid',
    textDecorationColor: colors.primary,
    textDecorationLine: 'underline'
  }
});

export default styles;