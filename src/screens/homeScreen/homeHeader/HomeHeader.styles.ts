import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homeHeaderContainer: {
    width: '100%',
    overflow: 'hidden',
  },
  appLogoImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain'
  },
  blurViewWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  headerContentWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20
  }
});

export default styles;