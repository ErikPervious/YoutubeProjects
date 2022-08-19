import { StyleSheet } from "react-native";
import { fonts } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#3B5368',
    padding: 20,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    alignItems: "center"
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#14212B',
    fontFamily: fonts.REGULAR,
    width: '100%',
    fontSize: 18,
    color: '#14212B',
    paddingBottom: 5,
    paddingLeft: 5
  },
  containerButtons: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    alignItems: "center",
    justifyContent: 'space-between'
  },
  buttonClearTask: {
    padding: 10,
    backgroundColor: '#14212B',
    borderRadius: 7,
    marginRight: 10,
    height: 50
  },
  buttonAddTask: {
    flex: 1,
    height: 50,
    backgroundColor: '#14212B',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7
  },
  buttonAddText: {
    color: '#3B5368',
    fontFamily: fonts.BOLD,
    fontSize: 18
  }
})