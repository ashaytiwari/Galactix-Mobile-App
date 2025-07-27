import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    flex: 1
  },
  coinsInstructionsModalMain: {
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  heading: {
    fontSize: 18,
    fontFamily: fontFamilies.robotoBold,
    lineHeight: 27,
    marginBottom: 10
  },
  content: {
    rowGap: 12
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'justify'
  },
  boldText: {
    fontFamily: fontFamilies.robotoMedium
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  bullet: {
    fontSize: 16,
    lineHeight: 24,
    marginRight: 8,
  },
  instructionText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 24,
  },
  continueButton: {
    backgroundColor: colors.primaryBackground,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 22,
    margin: 4,
    elevation: 2,
    width: '60%',
    marginTop: 20,
    marginHorizontal: 'auto'
  }
});

export default styles;