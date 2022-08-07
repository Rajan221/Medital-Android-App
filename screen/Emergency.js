import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import { NativeBaseProvider, HStack, Avatar, Button, Box } from "native-base";

import React from "react";

const win = Dimensions.get("window");

const Emer = () =>
  Alert.alert(
    "Are you Sure?",
    "This will send an Alert to the nearest Hospital  ",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]
  );

export default function Emergency() {
  return (
    <View>
      <View style={styles.top}>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            justifyContent: "center",
            marginLeft: 20,
          }}
        >
          List of the Available hospitals
        </Text>
      </View>

      {/* card 1 */}
      <View style={styles.cards}>
        <NativeBaseProvider>
          <HStack>
            <View>
              <Text
                style={{
                  color: "white",
                  marginLeft: 30,
                  fontSize: 20,
                  marginTop: 10,
                  maxWidth: 180,
                }}
              >
                Bir Hospital
              </Text>
              <Text
                style={{
                  color: "white",
                  marginLeft: 30,
                  fontSize: 15,
                  marginBottom: 30,
                  maxWidth: 200,
                }}
              >
                100m far from you
              </Text>
            </View>

            <Button
              style={{
                height: 40,

                marginTop: 20,
                position: "absolute",
                right: 10,
                borderRadius: 4,

                backgroundColor: "red",
              }}
              onPress={() => Emer()}
            >
              <Text style={{ color: "white" }}>Send Alert</Text>
            </Button>
          </HStack>
        </NativeBaseProvider>
      </View>

      {/* card 2 */}
      <View style={styles.cards}>
        <NativeBaseProvider>
          <HStack>
            <View>
              <Text
                style={{
                  color: "white",
                  marginLeft: 30,
                  fontSize: 20,
                  marginTop: 10,
                  maxWidth: 200,
                }}
              >
                Grande Hospital
              </Text>
              <Text
                style={{
                  color: "white",
                  marginLeft: 30,
                  fontSize: 15,
                  marginBottom: 30,
                  maxWidth: 200,
                }}
              >
                500m far from you
              </Text>
            </View>
            <Button
              style={{
                height: 40,

                marginTop: 20,
                position: "absolute",
                right: 10,
                borderRadius: 4,

                backgroundColor: "red",
              }}
              onPress={() => Emer()}
            >
              <Text style={{ color: "white" }}>Send Alert</Text>
            </Button>
          </HStack>
        </NativeBaseProvider>
      </View>

      {/* card 3 */}
      <View style={styles.cards}>
        <NativeBaseProvider>
          <HStack>
            <View>
              <Text
                style={{
                  color: "white",
                  marginLeft: 30,
                  fontSize: 20,
                  marginTop: 10,
                  maxWidth: 180,
                }}
              >
                Green City Hospital
              </Text>
              <Text
                style={{
                  color: "white",
                  marginLeft: 30,
                  fontSize: 15,
                  marginBottom: 30,
                  maxWidth: 200,
                }}
              >
                2km far from You
              </Text>
            </View>
            <Button
              style={{
                height: 40,

                marginTop: 30,
                position: "absolute",
                right: 10,
                borderRadius: 4,

                backgroundColor: "red",
              }}
              onPress={() => Emer()}
            >
              <Text style={{ color: "white" }}>Send Alert</Text>
            </Button>
          </HStack>
        </NativeBaseProvider>
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
  cards: {
    backgroundColor: "#222",
    height: 100,
    width: 350,
    marginTop: 37,
    marginLeft: 20,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },

  text: {
    fontSize: 80,
    textAlign: "center",
  },

  user: {
    marginTop: 10,
    marginLeft: 10,
  },
});
