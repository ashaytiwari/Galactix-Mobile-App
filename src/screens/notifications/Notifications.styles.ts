import { Dimensions, StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontFamilies } from "@styles/fonts";

const styles = StyleSheet.create({
  notificationsMain: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.blackGlassy,
  },
  comingSoonImage: {
    width: '80%',
    height: Dimensions.get('window').height * 0.3,
    resizeMode: 'contain'
  },
  comingSoonMessage: {
    fontFamily: fontFamilies.robotoBold,
    color: colors.white,
    fontSize: 24,
    textAlign: 'center'
  }
});

export default styles;