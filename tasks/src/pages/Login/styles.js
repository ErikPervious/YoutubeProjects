import { StyleSheet } from "react-native";

import { colors, fonts } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.BLUE_PRIMARY
  },
  imageLogo: {
    width: 150,
    height: 150,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.BLUE_SECONDARY,
    backgroundColor: colors.BLUE_TERTIARY,
    color: colors.BLUE_SECONDARY,
    borderRadius: 7,
    marginTop: 50,
    width: '80%',
    height: 50,
    fontFamily: fonts.REGULAR,
    padding: 10,
    fontSize: 18,
  },
  containerInputPassword: {
    width: '80%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.BLUE_SECONDARY,
    backgroundColor: colors.BLUE_TERTIARY,
    borderRadius: 7,
    flexDirection: 'row',
    marginTop: 20
  },
  inputPassword: {
    flex: 1,
    fontSize: 18,
    color: colors.BLUE_SECONDARY,
    fontFamily: fonts.REGULAR,
  },
  textResetPassword: {
    color: colors.BLUE_SECONDARY,
    fontSize: 16,
    marginTop: 5
  },
  containerButtonLogin: {
    width: '80%',
    height: 50,
    backgroundColor: colors.BLUE_SECONDARY,
    borderRadius: 7,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  textButtonLogin: {
    color: colors.BLUE_PRIMARY,
    fontFamily: fonts.BOLD,
    fontSize: 18
  },
  containerMessage: {
    zIndex: 999,
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: "center",
    justifyContent: "center"
  },
  containerMessageText: {
    marginVertical: 10,
    backgroundColor: colors.BLUE_SECONDARY,
    borderRadius: 7,
    width: '80%',
    padding: 5
  },
  messageText: {
    color: colors.BLUE_PRIMARY,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: "center"
  },
  messageButton: {
    padding: 10,
    backgroundColor: colors.BLUE_SECONDARY,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    width: '60%'
  },
  messageButtonText: {
    colors: colors.BLUE_PRIMARY,
    fontWeight: 'bold',
    fontSize: 18
  }
});