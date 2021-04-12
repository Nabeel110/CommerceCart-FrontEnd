import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import Error from "../Shared/Error";
import { Container } from "native-base";
import { TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const user = {
      email,
      password,
    };

    if (email === "" || password === "") {
      setError("Please fill in your credentials.");
    } else {
      console.log("Success");
    }
  };

  const showAlert = () => {
    Alert.alert("Successfully Logged In", `Welcome ${email} to CommerceCart`);
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <TextInput
          style={styles.inputView}
          label="Email"
          value={email}
          onChangeText={(text) => onChangeEmail(text.toLowerCase())}
          mode="outlined"
          theme={{
            colors: { primary: "orange", underlineColor: "transparent" },
          }}
        />
        <TextInput
          style={styles.inputView}
          label="Password"
          value={password}
          onChangeText={(text) => onChangePassword(text)}
          mode="outlined"
          theme={{
            colors: { primary: "orange", underlineColor: "transparent" },
          }}
          secureTextEntry
        />
      </View>
      {error ? <Error message={error} /> : null}
      <TouchableOpacity style={styles.loginBtn} onPress={() => handleSubmit()}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupBtn}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: "center",
    // alignItems: "center",
  },
  form: {
    marginTop: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 14,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 90,
  },
  itemInput: {
    width: 300,
  },
  inputView: {
    // width: "90%",
    borderRadius: 20,
    borderColor: "white",
    backgroundColor: "white",
    // borderRadius: 25,
    // marginTop: 20,
    height: 50,
    marginHorizontal: 10,
    marginBottom: 30,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    marginTop: 10,
    // paddingLeft: 10,
    // paddingLeft: 35,
    color: "blue",
    fontSize: 12,
    marginHorizontal: 120,
    marginVertical: 10,
  },
  loginText: {
    paddingLeft: 5,
    color: "white",
    fontSize: 18,
    // fontWeight: "bold",
  },
  loginBtn: {
    width: 200,
    // backgroundColor: "#EE3625",
    backgroundColor: "orange",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 10,
    marginHorizontal: 70,
  },
  signupBtn: {
    width: 200,
    borderWidth: 2,
    borderColor: "#EE3625",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 40,
    // marginLeft: 20,
    marginBottom: 10,
    marginHorizontal: 70,
  },
  signupText: {
    color: "black",
    fontSize: 18,
  },
});
export default Login;
