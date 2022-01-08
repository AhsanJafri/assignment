import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";
import { useFonts } from "expo-font";
import { Container } from "../../components/common";
import { STYLES } from "../../styles/styleSheet";
import { getAllTeacher, getAllUser } from "./firebase";

const { height, width } = Dimensions.get("screen");

const cleaning = require("../../assets/images/cleaning.mp4");

const splash = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  React.useEffect(() => {
    getAllTeacher();
    getAllUser();
    setTimeout(() => {
      navigation.navigate("IntroVideo");
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return (
      <Container justify={"center"} alignItems={"center"}>
        <ActivityIndicator color="red" size={33} />
      </Container>
    );
  }
  return (
    <Container justify={"center"} alignItems={"center"}>
      <Text
        style={[
          STYLES.h3,
          STYLES.text_BLUE_LEVEL1,
          STYLES.mt4,
          STYLES.textAlignCenter,
          STYLES.textBold,
          STYLES.ml2,
        ]}
      >
        Document Submission System Using QR Code
      </Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  video: {
    width: width / 1.5,
    height: height / 2,
  },
});
export default splash;
