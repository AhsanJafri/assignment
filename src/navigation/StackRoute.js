import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../screens/Auth/Splash";
import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";
import IntroVideo from "../screens/Auth/IntroVideo";

import Main from "../screens/Main";
import TeacherSelect from "../screens/TeacherSelect";
import Upload from "../screens/Upload";

import TeacherScreen from "../screens/TeacherScreen";
import TeacherTopic from "../screens/TeacherTopic";
import Assignment from "../screens/Assignment";

const Stack = createNativeStackNavigator();

const options = {
  headerShown: false,
  animationEnabled: false,
};

function StackRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={options} />
        <Stack.Screen
          name="IntroVideo"
          component={IntroVideo}
          options={options}
        />
        <Stack.Screen name="SignIn" component={SignIn} options={options} />
        <Stack.Screen name="SignUp" component={SignUp} options={options} />
        <Stack.Screen name="Main" component={Main} options={options} />
        <Stack.Screen
          name="TeacherSelect"
          component={TeacherSelect}
          options={options}
        />
        <Stack.Screen name="Upload" component={Upload} options={options} />
        <Stack.Screen
          name="TeacherScreen"
          component={TeacherScreen}
          options={options}
        />
        <Stack.Screen
          name="TeacherTopic"
          component={TeacherTopic}
          options={options}
        />
        <Stack.Screen
          name="Assignment"
          component={Assignment}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackRoute;
