import { StyleSheet, Text, View, TextInput } from "react-native";

export default function ProgressBar({ width }) {
  return (
    <View style={styles.progressBarContainer}>
      <Text>{width}</Text>
      <View style={styles.progressBar}>
        <View style={styles.progressBarFill(width)}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressBarContainer: {
    marginTop: 20,
    width: "100%",
    height: 30,
  },
  progressBar: {
    marginTop: 3,
    width: "90%",
    height: 5,
    backgroundColor: "#B9C2B4",
    marginLeft: 15,
    borderRadius: 10,
  },
  progressBarFill: (width) => ({
    width: width,
    height: 5,
    backgroundColor: "#4AD7FC",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  }),
});
