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
import { getDatabase, ref, set, onValue } from "firebase/database";

import { AddTeacher } from "../Reducer/action";

const { height, width } = Dimensions.get("screen");

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.users.name);
  const [selected, setSelected] = useState("");
  const [list, setList] = useState([]);

  React.useEffect(() => {
    AllBatches();
  }, []);

  const AllBatches = () => {
    const db = getDatabase();
    let temp = [];
    const starCountRef = ref(db, `assignment/${userName}`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data && Object.keys(data).length > 0) {
        Object.keys(data).map((item) => {
          temp.push(item);
        });
      }
      setList(temp);
    });
    console.log("[TEACHER SCREEN]", temp);
  };

  const onClick = (i) => {
    navigation.navigate("TeacherTopic", {
      batch: i,
    });
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
              STYLES.mt1,
              STYLES.textAlignCenter,
              { marginBottom: "4%" },
            ]}
          >
            Batches Column
          </Text>
          {list.map((item) => {
            return (
              <TouchableOpacity
                style={styles.list}
                onPress={() => onClick(item)}
              >
                <Text
                  style={[
                    STYLES.para,
                    STYLES.text_BLACK_LEVEL1,
                    STYLES.textBold,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
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
  list: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: "3%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
export default SignIn;
