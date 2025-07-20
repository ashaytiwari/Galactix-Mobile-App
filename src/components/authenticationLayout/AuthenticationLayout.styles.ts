import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
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
});

export default styles;