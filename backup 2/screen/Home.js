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

export default function Home({ navigation }) {
  return (
    // main body

    <View>
      <View style={styles.top}>
        <NativeBaseProvider>
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
                fontSize: 30,
                marginTop: 25,
                maxWidth: 200,
              }}
            >
              Kishan Blood Groop
            </Text>

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
            >
              Show Qr
            </Button>
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
                      Bengaluru (also called Bangalore) is the center of India's
                      high-tech industry. The city is also known for its parks
                      and nightlife.
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
                        The Silicon Valley of India.
                      </Text>
                    </Stack>
                    <Text fontWeight="400">
                      Bengaluru (also called Bangalore) is the center of India's
                      high-tech industry. The city is also known for its parks
                      and nightlife.
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
                        See Your Medical Performance
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
                        The Silicon Valley of India.
                      </Text>
                    </Stack>
                    <Text fontWeight="400">
                      Bengaluru (also called Bangalore) is the center of India's
                      high-tech industry. The city is also known for its parks
                      and nightlife.
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
            <TouchableOpacity onPress={() => navigation.navigate("Doctor")}>
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
                        See Available Doctors for Online Consultations
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
                        The Silicon Valley of India.
                      </Text>
                    </Stack>
                    <Text fontWeight="400">
                      Bengaluru (also called Bangalore) is the center of India's
                      high-tech industry. The city is also known for its parks
                      and nightlife.
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
