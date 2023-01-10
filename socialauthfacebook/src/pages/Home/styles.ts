import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  buttonSignOut: {
    padding: 15,
    backgroundColor: '#1877F2',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 11,
  },
  buttonSignOutText: {
    color: '#FFFFFF',
  },
  messageText: {
    width: '100%',
    textAlign: "center",
    marginTop: 50,
    fontSize: 30,
    color: '#313131'
  }
});

export default styles;