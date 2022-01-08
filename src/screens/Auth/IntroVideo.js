import * as React from "react";
import { View, StyleSheet, Button, Dimensions } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import { CommonActions } from "@react-navigation/native";
import { ButtonFull } from "../../components/common";

const { height, width } = Dimensions.get("screen");
export default function App(props, { navigation }) {
  const video = React.useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      props.navigation.dispatch(
        CommonActions.navigate({
          name: "SignIn",
        })
      );
    }, 28000);
  }, []);
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("../../assets/images/intro.mp4")}
        useNativeControls={false}
        resizeMode="contain"
        shouldPlay
      />
      <View style={{ position: "absolute", right: 20, bottom: 100 }}>
        <ButtonFull
          title={"Skip"}
          onAction={() =>
            props.navigation.dispatch(
              CommonActions.navigate({
                name: "SignIn",
              })
            )
          }
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    width: 90,
  },
  video: {
    height,
    width,
  },
});
