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

export default function Appointment() {
  return (
    <View>
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
            Appointments
          </Text>
        </View>

        <ScrollView>
          {/* present Appointment */}
          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              fontWeight: "bold",
              marginLeft: 20,
            }}
          >
            Upcomming Appointments:
          </Text>
          <ScrollView style={styles.container}>
            {/* Present Appointments*/}
            <NativeBaseProvider>
              <View>
                <Box alignItems="center">
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
                    <Stack p="4" space={3}>
                      <Stack space={2}>
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
                          Date: 2022/May/10
                        </Text>
                      </Stack>
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
                        Time of Appointment: 6AM and 6PM
                      </Text>
                      <Text fontWeight="400">
                        Appointment Managed with Dr. Kamala Ghimire for the
                        complaint of Back pain and Spinal checkup.
                      </Text>

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
              </View>
            </NativeBaseProvider>

            {/* button for alert */}
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Book An Appointment</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 20, marginTop: 20, fontWeight: "bold" }}>
              Previous Appointments:
            </Text>
            {/* Previous Appointments*/}
            <NativeBaseProvider>
              <View>
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
                    <Stack p="4" space={3}>
                      <Stack space={2}>
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
                          Date: 2022/April/31
                        </Text>
                      </Stack>
                      <Text fontWeight="400">
                        Appointment Managed with Dr. Kamala Ghimire for the
                        complaint of Diabetes and Blood Pressure.
                      </Text>
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
              </View>
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
  loginBtn: {
    width: "100%",
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
});
