import QRCode from "react-native-qrcode-svg";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Qr({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom: 50 }}>
        Scan this:
      </Text>
      <QRCode value="kishan ho mah" size={300} />
      <TouchableOpacity
        onPress={() => navigation.goBack("Home")}
        style={styles.loginBtn}
      >
        <Text style={styles.loginText}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    width: "80%",
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
