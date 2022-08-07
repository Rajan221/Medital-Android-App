import { Text, View, StyleSheet, ScrollView } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from "react-native-table-component";

const Data1 = (
  <View>
    <Text style={{ fontWeight: "bold" }}>Disease:</Text>
    <Text> -Gastritics</Text>
    <Text style={{ fontWeight: "bold" }}>Symptoms:</Text>
    <Text> -Nausea</Text>
    <Text> -Vomiting</Text>
    <Text style={{ fontWeight: "bold" }}>Tests:</Text>
    <Text>
      -blood pressure: normal (a systolic pressure of less than 120 and a
      diastolic pressure of less than 80)
    </Text>

    <Text style={{ fontWeight: "bold" }}>Suggestions:</Text>
    <Text> -Diureties like thiazide , spirondactone.</Text>
    <Text> -monitor blood pressure peridically</Text>
    <Text> -avoid smoking</Text>
    <Text> -Do exercise</Text>
    <Text style={{ fontWeight: "bold" }}>Medication:</Text>
    <Text> -Pantoprazole (Protonix)</Text>
  </View>
);

const Data2 = (
  <View>
    <Text style={{ fontWeight: "bold" }}>Disease:</Text>
    <Text> -Hypertension</Text>
    <Text style={{ fontWeight: "bold" }}>Symptoms:</Text>
    <Text> -Fatigue, Tiredness</Text>
    <Text> -Nose bleeding</Text>
    <Text> -Blurred vison</Text>
    <Text style={{ fontWeight: "bold" }}>Tests:</Text>
    <Text>
      -blood pressure: ㅤㅤ systolic: 120–139 mm Hg diastolic: 80–89 mm Hg
    </Text>
    <Text>-electrocardiagram(ECG) ㅤㅤ normal</Text>

    <Text style={{ fontWeight: "bold" }}>Suggestions:</Text>
    <Text> -Diureties like thiazide , spirondactone.</Text>
    <Text> -monitor blood pressure peridically</Text>
    <Text> -avoid smoking</Text>
    <Text> -Do exercise</Text>
    <Text style={{ fontWeight: "bold" }}>Medication:</Text>
    <Text> -Pantoprazole (Protonix)</Text>
  </View>
);

const CONTENT = {
  tableHead: ["Date", "Visited", "Results"],
  tableTitle: ["Row 2", "Row 3"],
  tableData: [
    ["2079/03/20", "Bir-Hospital", Data1],
    ["2079/04/20", "Binayak-Hospital", Data2],
  ],
};

export default function History({ navigation }) {
  return (
    <ScrollView>
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
          Your Medical History
        </Text>
      </View>

      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={CONTENT.tableHead}
            flexArr={[2, 2.5, 4]}
            style={styles.head}
          />
          <TableWrapper style={styles.wrapper}>
            <Rows
              data={CONTENT.tableData}
              flexArr={[2, 2.5, 4]}
              style={styles.row}
            />
          </TableWrapper>
        </Table>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "grey" },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#2ecc71" },
  row: { height: 400 },
  text: { textAlign: "center" },
});
