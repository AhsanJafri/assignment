import React from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { themes } from "../constants/themes";
import { STYLES } from "../styles/styleSheet";
const ButtonFull = ({ list, value, onClick }) => {
  return (
    <View style={[STYLES.mt3]}>
      {list.map((l) => {
        const selectedColor = value === l.id ? "lightblue" : "#fff";
        const selectedTextColor = value === l.id ? "#fff" : "black";
        return (
          <TouchableOpacity
            style={{
              height: 40,
              width: "100%",
              borderWidth: 1,
              borderRadius: 10,
              marginVertical: "2%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: selectedColor,
            }}
            onPress={() => onClick(l.id)}
          >
            <Text
              style={
                ([STYLES.para, STYLES.text_BLACK_LEVEL1, STYLES.textBold],
                { color: selectedTextColor })
              }
            >
              {l.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
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
