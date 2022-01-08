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
import { useSelector, useDispatch } from "react-redux";
import { Container, InputBox, ButtonFull } from "../components/common";
import { ListBox } from "../components";
import { STYLES } from "../styles/styleSheet";
import { getAllTeacher } from "./Auth/firebase";
import { AddTeacher } from "../Reducer/action";

const { height, width } = Dimensions.get("screen");

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [selected, setSelected] = useState("");
  const [list, setList] = useState(getAllTeacher());

  const handleClick = (id) => {
    setSelected(id);
  };

  const submit = () => {
    if (selected) {
      dispatch(AddTeacher(list.filter((item) => item.id === selected)[0]));
      navigation.navigate("Main");
    } else {
      alert("Select Teacher First");
    }
  };
  const handleSearch = (e) => {
    let temp = [...teachers];
    console.log(temp.filter((i) => i.name.indexOf(e) > 0));
  };
  return (
    <Container alignItems={"center"} isLoading={false}>
      <Text style={[STYLES.h2, STYLES.text_BLACK_LEVEL1, STYLES.mt4]}>
        ASSIGNMENT
      </Text>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        style={[{ height: height / 1.3 }, STYLES.mt2]}
      >
        <ScrollView
          style={{ width: width - 50 }}
          showsVerticalScrollIndicator={false}
        >
          <Text
            style={[
              STYLES.h3,
              STYLES.text_BLACK_LEVEL1,
              STYLES.mt4,
              STYLES.textAlignCenter,
            ]}
          >
            Select Your Teacher
          </Text>
          {/* <InputBox
            placeholder={"Search Teacher"}
            onChangeText={handleSearch}
          /> */}
          {list && list.length > 0 && (
            <ListBox value={selected} list={list} onClick={handleClick} />
          )}
        </ScrollView>
        <View style={[STYLES.mt2]}>
          <ButtonFull
            title={"UPLOAD DOCS"}
            onAction={() => {
              submit();
            }}
          />
        </View>
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
