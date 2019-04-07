import React from "react";
import HomeScreen from "./src/HomeScreen";
import * as firebase from "firebase";
import MainTabNavigator from "./navigation/MainTabNavigator";
import AppNavigator from "./navigation/AppNavigator";
import LoginScreen from "./authentication/LoginScreen"

const config = {
  apiKey: "AIzaSyB5OTFxrmsLItoxP6ISO9gxTtjcSN9FlXQ",
  authDomain: "phone-login-536c9.firebaseapp.com",
  databaseURL: "https://phone-login-536c9.firebaseio.com",
  projectId: "phone-login-536c9",
  storageBucket: "phone-login-536c9.appspot.com",
  messagingSenderId: "305382960164"
};
firebase.initializeApp(config);

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
