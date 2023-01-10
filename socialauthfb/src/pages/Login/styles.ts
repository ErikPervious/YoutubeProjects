import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 45,
    color: '#313131',
    fontWeight: "500",
    textShadowColor: '#B6B6B6',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 12,
  },
  fontBold: {
    fontWeight: "bold"
  },
  colorBlue: {
    color: '#1877F2'
  },
  containerIllustration: {
    width: '100%',
    alignItems: "center",
    marginVertical: 15
  },
  illustration: {
    width: 300,
    height: 300
  },
  containerInputs: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 35
  },
  input: {
    marginTop: 10,
    borderColor: '#D9D9D9',
    borderWidth: 3,
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: '#313131'
  },
  division: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15
  },
  line: {
    width: '40%',
    height: 1,
    backgroundColor: '#D9D9D9',
  },
  buttonFacebook: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#1877F2',
    padding: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonFacebookImage: {
    width: 25,
    height: 25,
    borderRadius: 30
  },
  buttonFacebookText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10
  }
});

export default styles;