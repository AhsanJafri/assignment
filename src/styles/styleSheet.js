import { Dimesions, StyleSheet } from "react-native";
import { textSize } from "../constants/fonts";
import { colors } from "../constants/themes";
export const STYLES = StyleSheet.create({
  justifyContentSpaceEven: { justifyContent: "space-evenly" },
  h1: {
    fontFamily: "Poppins",
    fontSize: textSize("H1"),
  },
  h2: {
    fontFamily: "Poppins",
    fontSize: textSize("H2"),
  },
  h3: {
    fontFamily: "Poppins",
    fontSize: textSize("H3"),
  },
  para: {
    fontFamily: "Poppins",
    fontSize: textSize("p"),
  },
  textAlignCenter: {
    textAlign: "center",
  },
  text_BLUE_LEVEL1: {
    color: colors.BLUE.PRIMARY,
  },
  text_BLACK_LEVEL1: {
    color: colors.BLACK,
  },
  text_WHITE_LEVEL1: {
    color: colors.WHITE,
  },
  mt1: {
    marginTop: "2%",
  },

  mt2: {
    marginTop: "4%",
  },
  mt3: {
    marginTop: "6%",
  },
  mt4: {
    marginTop: "8%",
  },

  mt5: {
    marginTop: "12%",
  },
  inputContainer: { flexDirection: "row", width: "90%" },
  input: {
    paddingLeft: 0.5,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  btnPimary: {
    backgroundColor: "#24a0ed",
    height: 50,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  Line: {
    height: 1,
    width: 30,
    backgroundColor: "grey",
  },
  btnSecondry: {
    height: 50,
    borderWidth: 1,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 5,
    flexDirection: "row",
  },
  btnImage: {
    height: 20,
    width: 20,
    marginLeft: 5,
  },
  ml1: {
    marginLeft: "2%",
  },

  ml2: {
    marginLeft: "4%",
  },
  ml3: {
    marginLeft: "6%",
  },
  ml4: {
    marginLeft: "8%",
  },
  mb1: {
    marginBottom: "2%",
  },
  mb2: {
    marginBottom: "4%",
  },
  mb3: {
    marginBottom: "6%",
  },
  mb4: {
    marginBottom: "8%",
  },

  w100: {
    width: "100%",
  },
  flex1: {
    flex: 1,
  },
  textBold: {
    fontFamily: "Poppins-SemiBold",
  },
  textItalic: {
    fontStyle: "italic",
  },
});
