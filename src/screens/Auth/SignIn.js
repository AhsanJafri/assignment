import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { readData, getAllUser } from "./firebase";
import { Container, InputBox, ButtonFull } from "../../components/common";
import { updateRecord } from "../../Reducer/action";
import { STYLES } from "../../styles/styleSheet";

const { height, width } = Dimensions.get("screen");

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "bilal@sindh.com",
    password: "bilal1234",
  });
  const [isLoading, setLoading] = useState(false);

  React.useEffect(() => {
    getAllUser();
  }, []);

  const handleClick = () => {
    setLoading(true);
    const { email, password } = data;
    const auth = getAuth();
    console.log(auth, email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const data = readData(email);
        dispatch(updateRecord(readData(email)));
        setLoading(false);
        alert("Successfully Signed");
        if (data.isStudent) {
          navigation.navigate("TeacherSelect");
        } else {
          navigation.navigate("TeacherScreen");
        }
      })
      .catch((error) => {
        setLoading(false);
        alert(error.message);
      });
  };
  return (
    <Container alignItems={"center"} isLoading={isLoading}>
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
        <ScrollView
          style={{ width: width - 50 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>SIGN IN</Text>
          <View style={[STYLES.mt5]}>
            <InputBox
              value={data.email}
              placeholder={"Email"}
              autoCapitalize={false}
              onChangeText={(e) => setData({ ...data, email: e })}
            />
          </View>
          <View style={[STYLES.mt4]}>
            <InputBox
              value={data.password}
              placeholder={"Password"}
              autoCapitalize={false}
              onChangeText={(e) => setData({ ...data, password: e })}
              secureTextEntry
            />
          </View>

          <View style={[STYLES.mt5]}>
            <ButtonFull title={"SUBMIT"} onAction={() => handleClick()} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={[STYLES.para, STYLES.text_BLUE_LEVEL1, STYLES.mt4]}>
              Don't have an account? Sign up
            </Text>
          </TouchableOpacity>
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
export default SignIn;
