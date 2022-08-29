import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020E17'
  },
  containerDivision: {
    width: '100%',
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  finishedLine: {
    width: '28%',
    height: 1,
    borderRadius: 1,
    backgroundColor: colors.GRAY_PRIMARY
  },
  finishedText: {
    marginHorizontal: 10,
    textAlign: "center",
    color: colors.GRAY_PRIMARY,
    fontFamily: fonts.REGULAR,
    fontSize: 15,
    lineHeight: 15
  }
})
