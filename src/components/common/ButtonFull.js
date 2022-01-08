import React from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { themes } from "../../constants/themes";
import { STYLES } from "../../styles/styleSheet";
const ButtonFull = ({ title, onAction }) => {
  return (
    <TouchableOpacity style={styles.FullBtn} onPress={() => onAction()}>
      <Text style={[STYLES.para, STYLES.text_WHITE_LEVEL1, { padding: 10 }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  FullBtn: {
    alignSelf: "center",
    width: "100%",
    backgroundColor: themes.BLUE.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ButtonFull;
