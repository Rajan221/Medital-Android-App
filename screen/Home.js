import { StatusBar } from "expo-status-bar";
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
  Alert,
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

import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const win = Dimensions.get("window");

const Emergency = () =>
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

export default function Home({ navigation }) {
  return (
    // main body

    <View>
      <View style={styles.top}>
        <NativeBaseProvider>
          <HStack>
            <TouchableOpacity onPress={() => navigation.navigate("Lnfo")}>
              <HStack>
                <Avatar
                  source={{
                    uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                  }}
                  style={styles.user}
                >
                  User
                </Avatar>

                <Text
                  style={{
                    color: "white",
                    marginLeft: 30,
                    fontSize: 20,
                    marginTop: 25,
                    maxWidth: 150,
                  }}
                >
                  Kishan Thapa Magar
                </Text>
              </HStack>
            </TouchableOpacity>
            <Button
              size="sm"
              style={{
                height: 50,
                marginTop: 30,
                position: "absolute",
                right: 95,
                maxWidth: 80,
              }}
              _text={{ color: "#fff" }}
              variant="outline"
              onPress={() => navigation.navigate("Qr")}
            >
              My QR
            </Button>

            <TouchableOpacity
              onPress={() => navigation.navigate("Emergency")}
              style={{
                marginTop: 20,
                position: "absolute",
                right: 5,
                borderColor: "#f50",
              }}
            >
              <Image
                style={{ height: 50, width: 50 }}
                source={require("../assets/emergency.png")}
              ></Image>
              <Text style={{ color: "red" }}>Emergency</Text>
            </TouchableOpacity>
          </HStack>
        </NativeBaseProvider>
      </View>

      <ScrollView>
        <ScrollView style={styles.container}>
          {/* card 1 */}
          <NativeBaseProvider>
            <TouchableOpacity
              onPress={() => navigation.navigate("Prescription")}
            >
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
                          uri: "https://myrepublica.nagariknetwork.com/uploads/media/Medicine_20220108165714.jpg",
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                  </Box>
                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading size="md" ml="-1">
                        Prescription
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
                        See the Details of your Prescription.
                      </Text>
                    </Stack>
                    <Text fontWeight="400">
                      See the Presciptions Given by the doctors and set the
                      External Alarms if required.
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
            </TouchableOpacity>
          </NativeBaseProvider>

          {/* card 2 */}
          <NativeBaseProvider>
            <TouchableOpacity
              onPress={() => navigation.navigate("Appointment")}
            >
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
                          uri: "https://build-valderrama.s3.amazonaws.com/wp-content/uploads/2018/04/16151555/AdobeStock_118993522.jpeg",
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                  </Box>
                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading size="md" ml="-1">
                        Appointments
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
                        List of Upcomming and Previous Appointments
                      </Text>
                    </Stack>
                    <Text fontWeight="400">
                      See the list of Upcomming Appointments and Times of
                      Appointments for the Time Management.
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
            </TouchableOpacity>
          </NativeBaseProvider>

          {/* card 3 */}
          <NativeBaseProvider>
            <TouchableOpacity onPress={() => navigation.navigate("Stats")}>
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
                          uri: "https://thumbs.dreamstime.com/b/medical-graphic-healthcare-medical-infographic-doctor-health-stethoscope-analysis-vaccination-statistics-hospital-medical-214163716.jpg",
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                  </Box>
                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading size="md" ml="-1">
                        Your Medical Performance
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
                        See the details of Lab Reports
                      </Text>
                    </Stack>
                    <Text fontWeight="400">
                      See and Analyze the Lab Reports of Blood Sugar, Pressure
                      and others Lab Tests for the Detailed Analysis.
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
            </TouchableOpacity>
          </NativeBaseProvider>

          {/* card 4 */}
          <NativeBaseProvider>
            <TouchableOpacity onPress={() => navigation.navigate("Hospital")}>
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
                          uri: "https://www.optimahealth.com/_assets/images/smiling-male-dentist-card.jpg",
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                  </Box>
                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading size="md" ml="-1">
                        Add An Appointment
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
                        See the Available Doctors for Online Consultations
                      </Text>
                    </Stack>
                    <Text fontWeight="400">
                      Set the Meeting with the Doctors online and have speed
                      consultations online for minor problems.
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
            </TouchableOpacity>
          </NativeBaseProvider>

          {/* card 5 */}
          <NativeBaseProvider>
            <TouchableOpacity onPress={() => navigation.navigate("History")}>
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
                          uri: "https://hamiltonfraser.co.uk/cms/wp-content/uploads/2019/03/Medical-History.jpg ",
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                  </Box>
                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading size="md" ml="-1">
                        Medical History
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
                        See Your Medical History
                      </Text>
                    </Stack>
                    <Text fontWeight="400">
                      Get the List of all the Medical history such as tests and
                      Hospitals you have visited
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
            </TouchableOpacity>
          </NativeBaseProvider>

          <View style={{ height: 150 }}></View>
        </ScrollView>
      </ScrollView>
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
