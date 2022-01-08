import React from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { themes } from "../../constants/themes";

const { height, width } = Dimensions.get("screen");
const Container = (props) => {
  return (
    <SafeAreaView
      style={[
        styles.Container,
        {
          justifyContent: props.justify ? props.justify : "flex-start",
          alignItems: props.alignItems ? props.alignItems : "flex-start",
        },
      ]}
    >
      {props.isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator color={"red"} />
        </View>
      )}

      <StatusBar backgroundColor={themes.BLUE.SECONDARY} />
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: themes.LIGHT.PRIMARY,
  },
  loading: {
    position: "absolute",
    backgroundColor: "grey",
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
    height,
    width,
    zIndex: 1,
  },
});

export default Container;
