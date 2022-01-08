import React from "react";
import { Text, StyleSheet, TextInput } from "react-native";
import { themes } from "../../constants/themes";
import { STYLES } from "../../styles/styleSheet";
const InputBox = ({ ...props }) => {
  return <TextInput {...props} style={[STYLES.para, styles.input]} />;
};

const styles = StyleSheet.create({
  input: { width: "100%", borderWidth: 1, height: 50, padding: 10 },
});

export default InputBox;
