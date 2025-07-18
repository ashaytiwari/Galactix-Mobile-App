import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  signupSecurityInfoFormMain: {
    backgroundColor: colors.white,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 50,
    marginBottom: 100,
    height: '100%'
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  formContainer: {
    flex: 1,
    rowGap: 15,
    marginBottom: 100
  },
  header: {
    flexDirection: 'row',
    columnGap: 15,
    justifyContent: 'space-between',
  },
  headerContent: {
    rowGap: 7,
    flex: 1
  },
  headerPrimaryText: {
    fontSize: 18,
    fontFamily: fontFamilies.robotoMedium,
    color: colors.primaryBackground
  },
  headerSecondaryText: {
    fontSize: 15,
    color: colors.tertiary,
    lineHeight: 21
  },
  signupSecondaryInfoForm: {
    rowGap: 15,
    marginTop: 20
  }
});

export default styles;