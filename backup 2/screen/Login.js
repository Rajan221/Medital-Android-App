import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
  Alert,
} from "react-native";

const win = Dimensions.get("window");

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formAction = () => {
    if (email == "kishan" && password == "kishan") {
      navigation.navigate("Home");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/doctor.gif")}
      style={styles.container}
    >
      <Text style={styles.head}>Login Page</Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#222"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#222"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          if (
            email.toLocaleLowerCase() == "kishan" &&
            password.toLocaleLowerCase() == "kishan"
          ) {
            navigation.navigate("Home");
          } else {
            Alert.alert("Not matched Successfully");
          }
        }}
        style={styles.loginBtn}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -100,
  },

  inputView: {
    backgroundColor: "#ddd",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "65%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#000",
  },

  loginText: {
    color: "#fff",
  },

  head: {
    fontSize: 40,
    marginBottom: 40,
    color: "#fff",
    backgroundColor: "#000",
    borderRadius: 30,
    padding: 30,
    width: 300,
    textAlign: "center",
  },
});
