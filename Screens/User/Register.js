import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput } from "react-native-paper";
import Error from "../Shared/Error";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

import axios from "axios";
import baseURL from "../../assets/Common/baseURL";
const Register = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const register = () => {
    console.log("In register");
    if (name === "" || email === "" || phone === "" || password === "") {
      setError("Please fill all fields");
    } else {
      let user = {
        email: email,
        name: name,
        phone: phone,
        password: password,
      };
      axios
        .post(`${baseURL}users/register`, user)
        .then((res) => {
          if (res.data.header.error === 0) {
            Toast.show({
              topOffset: 60,
              type: "success",
              text1: "Registeration Successful",
              text2: "Please Login into your account",
            });
            setTimeout(() => {
              props.navigation.navigate("Login");
            }, 500);
          } else if (res.status === 400) {
            console.log(res.status);
            Toast.show({
              topOffset: 60,
              type: "error",
              text1: "UnSuccessful",
              text2: "Please try Again",
            });
            setTimeout(() => {
              props.navigation.navigate("Login");
            }, 500);
          }
        })
        .catch((err) => {
          console.log(err.response);
          Toast.show({
            topOffset: 60,
            type: "error",
            text1:
              err.response.status === 400
                ? err.response.data.header.message
                : "User cannot be Registered",
            text2: "Please try again.",
          });
        });
    }
  };
  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableAutomaticScroll={true}
    >
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            margin: 10,
            fontWeight: "400",
          }}
        >
          {" "}
          Sign Up
        </Text>
        <TextInput
          style={styles.inputView}
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text.toLowerCase())}
          mode="outlined"
          theme={{
            colors: { primary: "orange", underlineColor: "transparent" },
          }}
          // placeholder="Email"
        />
        <TextInput
          style={styles.inputView}
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          mode="outlined"
          theme={{
            colors: { primary: "orange", underlineColor: "transparent" },
          }}
          // placeholder="Email"
        />
        <TextInput
          style={styles.inputView}
          label="Phone Number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          mode="outlined"
          keyboardType={"number-pad"}
          theme={{
            colors: { primary: "orange", underlineColor: "transparent" },
          }}
          // placeholder="Email"
        />
        <TextInput
          style={styles.inputView}
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          mode="outlined"
          secureTextEntry={true}
          theme={{
            colors: { primary: "orange", underlineColor: "transparent" },
          }}
          // placeholder="Email"
        />
      </View>
      <View>
        {error ? <Error message={error} /> : null}
        <TouchableOpacity style={styles.registerBtn} onPress={() => register()}>
          <Text
            style={{ textAlign: "center", marginVertical: 10, color: "white" }}
          >
            Create Account
          </Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>Already Registered?</Text>
        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={{ textAlign: "center", marginVertical: 10, color: "white" }}
            onPress={() => props.navigation.navigate("Login")}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: "center",
    // alignItems: "center",
  },
  logo: {
    width: 100,
    height: 50,
    // justifyContent: "center",
    // alignItems: "center",
    marginVertical: 2,
    marginHorizontal: 150,
  },
  inputView: {
    width: "90%",
    borderRadius: 20,
    borderColor: "orange",
    backgroundColor: "white",
    // borderRadius: 25,
    // marginTop: 20,
    height: 50,
    marginHorizontal: 20,
    marginBottom: 10,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 20,
  },
  registerBtn: {
    backgroundColor: "orange",
    width: 200,
    marginHorizontal: 70,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "orange",
  },
  loginBtn: {
    backgroundColor: "#BC4747",
    width: 200,
    marginHorizontal: 70,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#BC4747",
  },
});
export default Register;
