import { Text, StyleSheet, Dimensions, View, Alert } from "react-native";
import { NativeBaseProvider, HStack, Avatar, Button, Box } from "native-base";

import React from "react";
const DocAlert = () =>
  Alert.alert(
    "Are you Sure?",
    "This will Fix an Appointment with the Doctor  ",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]
  );

const win = Dimensions.get("window");
const Butt = () => {
  const myRef = React.useRef({});
  React.useEffect(() => {
    const styleObj = {
      backgroundColor: "#15ccfa",
      borderColor: "#048Aca",
      borderWidth: 1,
      borderRadius: 4,
      height: 40,
    }; //@ts-ignore

    myRef.current.setNativeProps({
      style: styleObj,
    });
  }, [myRef]);
  return (
    <Box alignItems="center">
      <Button
        size="sm"
        variant={"solid"}
        _text={{
          color: "#1F2937",
        }}
        ref={myRef}
        px="3"
      >
        Buy Ticket
      </Button>
    </Box>
  );
};

export default function Doctor() {
  return (
    <View>
      <View style={styles.top}>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            justifyContent: "center",
            marginLeft: 20,
          }}
        >
          Doctors
        </Text>
      </View>

      {/* card 1 */}
      <View style={styles.cards}>
        <NativeBaseProvider>
          <HStack>
            <Avatar
              size={"lg"}
              source={{
                uri: "https://imageio.forbes.com/specials-images/imageserve/469368746/African-Female-doctor-with-annotation-table/960x0.jpg?fit=bounds&format=jpg&width=960",
              }}
              style={styles.user}
            >
              User
              <Avatar.Badge bg="green.500" />
            </Avatar>
            <View>
              <Text
                style={{
                  color: "white",
                  marginLeft: 30,
                  fontSize: 20,
                  marginTop: 20,
                  maxWidth: 160,
                }}
              >
                Dr. Roshana Acharya
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
                Neurologist
              </Text>
              <Text
                style={{
                  color: "white",
                  marginLeft: 30,
                  fontSize: 15,
                  marginBottom: 30,
                  maxWidth: 200,
                  marginTop: -30,
                }}
              >
                (Free untill 4pm)
              </Text>
            </View>

            <View
              style={{
                height: 40,
                marginTop: 30,
                position: "absolute",
                right: 10,
              }}
            >
              <Button
                size="sm"
                style={{
                  height: 40,
                  marginTop: 0,
                  position: "absolute",
                  right: 0,
                }}
                _text={{ color: "#fff" }}
                variant="outline"
                onPress={() => DocAlert()}
              >
                Buy Ticket
              </Button>
            </View>
          </HStack>
        </NativeBaseProvider>
      </View>

      {/* card 2 */}
      <View style={styles.cards}>
        <NativeBaseProvider>
          <HStack>
            <Avatar
              size={"lg"}
              source={{
                uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
              style={{ marginTop: 0, marginLeft: 10 }}
            >
              User
              <Avatar.Badge bg="green.500" />
            </Avatar>
            <View>
              <Text
                style={{
                  color: "white",
                  marginLeft: 30,
                  fontSize: 20,

                  maxWidth: 160,
                }}
              >
                Dr. Shawn Murphy
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
                General Surgeon
              </Text>
              <Text
                style={{
                  color: "white",
                  marginLeft: 30,
                  fontSize: 15,
                  marginTop: -20,
                  maxWidth: 200,
                }}
              >
                Free untill 6pm
              </Text>
            </View>
            <View
              style={{
                height: 40,
                marginTop: 30,
                position: "absolute",
                right: 10,
              }}
            >
              <Button
                size="sm"
                style={{
                  height: 40,
                  marginTop: -20,
                  position: "absolute",
                  right: 0,
                }}
                _text={{ color: "#fff" }}
                variant="outline"
              >
                Buy Ticket
              </Button>
            </View>
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
    paddingTop: 20,
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
    marginTop: 20,
    marginLeft: 10,
  },
});
