import React, { useState } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { useSelector, useDispatch } from "react-redux";
import { STYLES } from "../styles/styleSheet";
import { Container, InputBox, ButtonFull } from "../components/common";
import { writeAssignMentData } from "./Auth/firebase";
import { getAuth, signOut } from "firebase/auth";
import { CommonActions } from "@react-navigation/native";
import { reset } from "../Reducer/action";
const { height, width } = Dimensions.get("screen");
const Upload = (props, { navigation }) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  const teacher = useSelector((state) => state.teacher);
  const users = useSelector((state) => state.users);

  React.useEffect(() => {
    _pickDocument();
  }, []);

  const _pickDocument = async () => {
    setLoading(true);
    const { data } = props.route.params;
    const storage = getStorage();
    let result = await DocumentPicker.getDocumentAsync({});
    const response = await fetch(result.uri);
    const blob = await response.blob();
    const path = `assignment/${teacher.name.trim()}/${data.trim()}/${
      users.roll
    }`;
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, blob);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        setLoading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log("File available at", downloadURL);
          writeAssignMentData(
            teacher.name,
            users.name,
            users.roll,
            users.batch,
            downloadURL,
            data
          );
          setLoading(false);
        });
      }
    );
    console.log("Test", response);
  };

  const handleExit = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(reset());
        props.navigation.dispatch(
          CommonActions.navigate({
            name: "SignIn",
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container
      alignItems={"center"}
      alignItems={"center"}
      isLoading={isLoading}
    >
      <Text style={[STYLES.h2, STYLES.text_BLACK_LEVEL1, STYLES.mt4]}>
        ASSIGNMENT
      </Text>

      <Text
        style={[
          STYLES.h3,
          STYLES.text_BLACK_LEVEL1,
          STYLES.mt4,
          STYLES.textAlignCenter,
        ]}
      >
        {isLoading ? "Wait we're submitting documents" : "Document Submitted"}
      </Text>
      {!isLoading && (
        <View
          style={[
            STYLES.mt5,
            { width, alignItems: "center", justifyContent: "center" },
          ]}
        >
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2020/12/27/20/24/smile-5865208_960_720.png",
            }}
            style={{ height: width / 2, width: width / 2 }}
            resizeMode="stretch"
          />
          <View style={[STYLES.mt4, { width: "80%" }]}>
            <ButtonFull title={"Exit"} onAction={() => handleExit()} />
          </View>
        </View>
      )}
    </Container>
  );
};

export default Upload;
