import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";

export default function Transfer({ transfer }) {
  return (
    <View style={styles.container}>
      <View style={styles.displayRow}>
        <Text style={styles.title}>Przelew: </Text>
        <Text>{transfer.transfer_title}</Text>
      </View>
      <View style={styles.displayRow}>
        <Text>Na konto: </Text>
        <Text>{transfer.to_account}</Text>
      </View>
      <View style={styles.displayRow}>
        <Text>Kwota: </Text>
        <Text>{transfer.ammount}</Text>
      </View>
      <View style={styles.displayRow}>
        <Text>Data wykonania: </Text>
        <Text>{transfer.transfer_date.slice(0, 10)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "85%",
    marginLeft: 30,
    height: 90,
    backgroundColor: "#fff",
    marginBottom: 20,
    paddingTop: 7,
    paddingLeft: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  displayRow: {
    flexDirection: "row",
  },
});
