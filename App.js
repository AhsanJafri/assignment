import React, { Component } from "react";
import { View } from "react-native";
import StackRoute from "./src/navigation/StackRoute";
import store from "./src/store";
import { Provider } from "react-redux";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCo3gUjRae761ye4TCH4Ny76tPG6uHsGqQ",
  authDomain: "store-2ecb3.firebaseapp.com",
  databaseURL: "https://store-2ecb3-default-rtdb.firebaseio.com",
  projectId: "store-2ecb3",
  storageBucket: "store-2ecb3.appspot.com",
  messagingSenderId: "353392836660",
  appId: "1:353392836660:web:9abd46295a98e209478a61",
};

console.disableYellowBox = true;
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackRoute />
      </Provider>
    );
  }
}

export default App;
