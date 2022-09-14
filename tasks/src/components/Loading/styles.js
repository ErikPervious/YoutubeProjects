import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.REGULAR,
    color: colors.BLUE_SECONDARY,
    marginTop: 10
  }
});