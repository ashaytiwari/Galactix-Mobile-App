import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";

const styles = StyleSheet.create({
  appBottomSheetMain: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.blackGlassy
  },
  flex: {
    flex: 1
  },
  sheet: {
    padding: 16,
    height: 150,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white
  }
});

export default styles;