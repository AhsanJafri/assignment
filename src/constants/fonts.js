import {Dimensions} from "react-native";

const {height} = Dimensions.get("screen");

export function textSize(type) {
  switch (type) {
    case "H1":
      return height * 0.07;
      break;
    case "H2":
      return height * 0.05;
      break;
    case "H3":
      return height * 0.03;
      break;
    case "p":
      return height * 0.02;
      break;
    default:
      break;
  }
}
