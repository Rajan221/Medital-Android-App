import { HStack, NativeBaseProvider } from "native-base";
import { Text, View } from "react-native";
import { Image } from "react-native-svg";

export default function Lnfo() {
  return (
    <View>
      <View
        style={{
          backgroundColor: "black",
          height: 100,
          width: "auto",
          marginTop: 37,

          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 25,
            justifyContent: "center",
            marginLeft: 20,
            marginTop: 30,
          }}
        >
          Patient Info
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",

          marginTop: 40,
          borderWidth: 1,
          display: "flex",
        }}
      >
        <View>
          <Text>Name: Kishan Thapa Magar</Text>
          <Text>Patient ID: # 64646</Text>
          <Text>Registered From: Bir Hospital</Text>
          <Text>Address: Goldhunga, KTM</Text>
          <Text>DOB: 2068/11/04</Text>
          <Text>Blood Group: A-</Text>
          <Text>Ph_No: 9712345678</Text>
          <Text>Citizenship No: 0312030120312</Text>
        </View>
      </View>
    </View>
  );
}
