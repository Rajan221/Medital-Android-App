import { Text, StyleSheet, Dimensions, View } from "react-native";
import { NativeBaseProvider, HStack, Avatar, Button, Box } from "native-base";

import React from "react";

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
          Doctor
        </Text>
      </View>

      {/* card 1 */}
      <View style={styles.cards}>
        <NativeBaseProvider>
          <HStack>
            <Avatar
              size={"lg"}
              source={{
                uri: "https://www.westend61.de/images/0001529324pw/male-handsome-doctor-with-arms-crossed-against-gray-wall-GIOF11521.jpg",
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
                  marginTop: 10,
                  maxWidth: 200,
                }}
              >
                Dr. Kamala Ghimire
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
            </View>

            <View
              style={{
                height: 40,
                marginTop: 30,
                position: "absolute",
                right: 10,
              }}
            >
              {Butt()}
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
                  marginTop: 10,
                  maxWidth: 200,
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
            </View>
            <View
              style={{
                height: 40,
                marginTop: 30,
                position: "absolute",
                right: 10,
              }}
            >
              {Butt()}
            </View>
          </HStack>
        </NativeBaseProvider>
      </View>

      {/* card 3 */}
      <View style={styles.cards}>
        <NativeBaseProvider>
          <HStack>
            <Avatar
              size={"lg"}
              source={{
                uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
              style={styles.user}
            >
              User
              <Avatar.Badge bg="gray.500" />
            </Avatar>
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
                Dr. Krishna Pd. Pyakurel
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
            </View>
            <Button
              size="sm"
              style={{
                height: 40,
                marginTop: 30,
                position: "absolute",
                right: 20,
              }}
              _text={{ color: "#fff" }}
              variant="outline"
              onPress={() => navigation.navigate("Qr")}
              isDisabled
            >
              Buy Ticket
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
    backgroundColor: "black",
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
