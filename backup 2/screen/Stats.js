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

export default function Stats() {
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
          <ScrollView style={styles.container}>
            {/* card 1 */}
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
                        Bengaluru (also called Bangalore) is the center of
                        India's high-tech industry. The city is also known for
                        its parks and nightlife.
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
  bi: {
    width: win.width,

    height: win.height / 1.2,
  },
});
