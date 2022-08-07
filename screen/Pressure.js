import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

const win = Dimensions.get("window");

export default function Sugar() {
  return (
    <View>
      <View>
        {/* top part */}
        <View style={styles.top}>
          <Text
            style={{
              color: "white",
              fontSize: 30,
              justifyContent: "center",
              marginLeft: 20,
            }}
          >
            Sugar
          </Text>
        </View>

        <Image
          resizeMode="cover"
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/2111_Blood_Pressure_Graph.jpg/800px-2111_Blood_Pressure_Graph.jpg?20131214101129",
          }}
          alt="image"
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: "black",
    height: 100,
    width: win.widhth,
    marginTop: 37,
    alignItems: "center",

    flexDirection: "row",
  },
  image: {
    height: 300,
    width: win.width,
  },
});
