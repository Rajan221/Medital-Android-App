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

import {
  Avatar,
  NativeBaseProvider,
  Center,
  Container,
  Heading,
  Button,
  HStack,
  Box,
  AspectRatio,
  Stack,
} from "native-base";

const win = Dimensions.get("window");

export default function Stats({ navigation }) {
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
            Medical Tests and Statistics
          </Text>
        </View>

        <ScrollView>
          <ScrollView style={styles.container}>
            {/* cards part */}
            <NativeBaseProvider>
              <TouchableOpacity onPress={() => navigation.navigate("Sugar")}>
                <Box alignItems="center" style={{ marginTop: 20 }}>
                  <Box
                    maxW="80"
                    rounded="lg"
                    overflow="hidden"
                    borderColor="coolGray.200"
                    borderWidth="1"
                    _dark={{
                      borderColor: "coolGray.600",
                      backgroundColor: "gray.700",
                    }}
                    _web={{
                      shadow: 2,
                      borderWidth: 0,
                    }}
                    _light={{
                      backgroundColor: "gray.50",
                    }}
                  >
                    <Box>
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                          source={{
                            uri: "https://binaries.templates.cdn.office.net/support/templates/en-us/lt03986892_quantized.png",
                          }}
                          alt="image"
                        />
                      </AspectRatio>
                    </Box>
                    <Stack p="4" space={3}>
                      <Stack space={2}>
                        <Heading size="md" ml="-1">
                          Blood Sugar Statistics
                        </Heading>
                        <Text
                          fontSize="xs"
                          _light={{
                            color: "violet.500",
                          }}
                          _dark={{
                            color: "violet.400",
                          }}
                          fontWeight="500"
                          ml="-0.5"
                          mt="-1"
                        >
                          See the Details of your Blood Sugar Statistics.
                        </Text>
                      </Stack>

                      <HStack
                        alignItems="center"
                        space={4}
                        justifyContent="space-between"
                      >
                        <HStack alignItems="center"></HStack>
                      </HStack>
                    </Stack>
                  </Box>
                </Box>
              </TouchableOpacity>
            </NativeBaseProvider>
            {/* cards part */}
            <NativeBaseProvider>
              <TouchableOpacity onPress={() => navigation.navigate("Pressure")}>
                <Box alignItems="center" style={{ marginTop: 20 }}>
                  <Box
                    maxW="80"
                    rounded="lg"
                    overflow="hidden"
                    borderColor="coolGray.200"
                    borderWidth="1"
                    _dark={{
                      borderColor: "coolGray.600",
                      backgroundColor: "gray.700",
                    }}
                    _web={{
                      shadow: 2,
                      borderWidth: 0,
                    }}
                    _light={{
                      backgroundColor: "gray.50",
                    }}
                  >
                    <Box>
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                          source={{
                            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/2111_Blood_Pressure_Graph.jpg/800px-2111_Blood_Pressure_Graph.jpg?20131214101129",
                          }}
                          alt="image"
                        />
                      </AspectRatio>
                    </Box>
                    <Stack p="4" space={3}>
                      <Stack space={2}>
                        <Heading size="md" ml="-1">
                          Blood Pressure Statistics
                        </Heading>
                        <Text
                          fontSize="xs"
                          _light={{
                            color: "violet.500",
                          }}
                          _dark={{
                            color: "violet.400",
                          }}
                          fontWeight="500"
                          ml="-0.5"
                          mt="-1"
                        >
                          See the Details of your Blood Pressure Statistics.
                        </Text>
                      </Stack>

                      <HStack
                        alignItems="center"
                        space={4}
                        justifyContent="space-between"
                      >
                        <HStack alignItems="center"></HStack>
                      </HStack>
                    </Stack>
                  </Box>
                </Box>
              </TouchableOpacity>
            </NativeBaseProvider>

            <View style={{ height: 150 }}></View>
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  top: {
    backgroundColor: "black",
    height: 100,
    width: win.widhth,
    marginTop: 37,
    alignItems: "center",

    flexDirection: "row",
  },

  text: {
    fontSize: 80,
    textAlign: "center",
  },

  user: {
    marginTop: 20,
    marginLeft: 10,
  },
  bi: {
    width: win.width,

    height: win.height / 1.2,
  },
});
