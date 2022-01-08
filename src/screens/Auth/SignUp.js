import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { writeUserData, writeTeacherData } from "./firebase";
import { Container, InputBox, ButtonFull } from "../../components/common";
import { STYLES } from "../../styles/styleSheet";

const { height, width } = Dimensions.get("screen");

const SignUp = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    rollnum: "",
    batch: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    const { email, password, rollnum, batch, name } = data;
    if (name !== "" && batch !== "" && rollnum !== "") {
      const auth = getAuth();
      console.log(auth, email, password);
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          writeUserData(name, email, rollnum, batch);
          setLoading(false);
          alert("Successfully Created");
          navigation.navigate("SignIn");
        })
        .catch((error) => {
          alert(error.message);
          setLoading(false);
        });
    } else {
      alert("Please Fill All The Field");
      setLoading(false);
    }
  };
  return (
    <Container alignItems={"center"} isLoading={loading}>
      <Text
        style={[
          STYLES.h3,
          STYLES.text_BLACK_LEVEL1,
          STYLES.mt4,
          STYLES.textAlignCenter,
          STYLES.ml2,
          STYLES.textBold,
        ]}
      >
        Document Submission System Using QR Code
      </Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView style={{ width: width - 50 }}>
          <Text style={styles.title}>SIGN UP</Text>
          <View style={[STYLES.mt5]}>
            <InputBox
              value={data.name}
              placeholder={"Name"}
              autoCapitalize={false}
              onChangeText={(e) => setData({ ...data, name: e.trim() })}
            />
          </View>
          <View style={[STYLES.mt5]}>
            <InputBox
              value={data.email}
              placeholder={"Email"}
              autoCapitalize={false}
              onChangeText={(e) => setData({ ...data, email: e.trim() })}
            />
          </View>
          <View style={[STYLES.mt4]}>
            <InputBox
              value={data.password}
              placeholder={"Password"}
              autoCapitalize={false}
              onChangeText={(e) => setData({ ...data, password: e.trim() })}
              secureTextEntry
            />
          </View>
          <View style={[STYLES.mt5]}>
            <InputBox
              value={data.rollnum}
              placeholder={"Full Rollnumber"}
              autoCapitalize={false}
              onChangeText={(e) => setData({ ...data, rollnum: e.trim() })}
            />
          </View>
          <View style={[STYLES.mt4]}>
            <InputBox
              value={data.batch}
              placeholder={"Batch (Ex: 2K18,2K19,2K20)"}
              autoCapitalize={false}
              onChangeText={(e) =>
                setData({ ...data, batch: e.toUpperCase().trim() })
              }
            />
          </View>

          <Text
            style={[STYLES.text_BLACK_LEVEL1, STYLES.mt3, STYLES.textItalic]}
          >
            Note: Please fill every column carefully
          </Text>
          <View style={[STYLES.mt5]}>
            <ButtonFull title={"SUBMIT"} onAction={() => handleClick()} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    ...STYLES.h3,
    ...STYLES.text_BLACK_LEVEL1,
    ...STYLES.mt4,
    ...STYLES.textAlignCenter,
  },
});
export default SignUp;
