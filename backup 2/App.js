import { StatusBar } from "expo-status-bar";

const source = "./screen/Index";
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
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./screen/Index";
import { Home } from "./screen/Index";
import { Qr } from "./screen/Index";
import { Prescription } from "./screen/Index";
import { Appointment } from "./screen/Index";
import { Stats } from "./screen/Index";
import { Doctor } from "./screen/Index";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Login"}
      >
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Qr" component={Qr}></Stack.Screen>
        <Stack.Screen
          name="Prescription"
          component={Prescription}
        ></Stack.Screen>
        <Stack.Screen name="Appointment" component={Appointment}></Stack.Screen>
        <Stack.Screen name="Stats" component={Stats}></Stack.Screen>
        <Stack.Screen name="Doctor" component={Doctor}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
