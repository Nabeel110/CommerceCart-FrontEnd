import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
//Navigators
import Main from "./Navigators/Main";

LogBox.ignoreAllLogs(true);
// Importing Screens
import Header from "./Screens/Shared/Header";
import ProductContainer from "./Screens/Products/ProductContainer";

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <Header /> */}
        <Main />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
