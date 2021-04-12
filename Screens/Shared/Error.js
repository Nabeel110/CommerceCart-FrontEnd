import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Error = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{props.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "94%",
    // alignItems: "center",
    // justifyContent: "center",
    margin: 5,
    // marginRight: 250,
  },
  message: {
    color: "red",
    textAlign: "center",
  },
});

export default Error;
