import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";

const styles = StyleSheet.create({
  appSearchBarMain: {
    alignItems: 'center',
    columnGap: 20,
    flexDirection: 'row',
    backgroundColor: colors.blackGlassy,
    borderWidth: 1,
    borderColor: colors.homeGradientBlack,
    borderRadius: 7,
    paddingHorizontal: 15,
  },
  inputControl: {
    flex: 1,
    padding: 12,
    fontSize: 15,
    color: colors.white
  }
});

export default styles;