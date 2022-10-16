import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function ColorContainer() {
  return (
    <View style={styles.colorContainer}>
    <View style={styles.colorChild1}></View>
    <View style={styles.colorChild2}></View>
    <View style={styles.colorChild3}></View>
    <View style={styles.colorChild4}></View>
    <View style={styles.colorChild5}></View>
    <View style={styles.colorChild6}></View>
  </View>
  )
}

const styles = StyleSheet.create({
    colorContainer: {
        backgroundColor: "red",
        width: "100%",
        height: 13,
        flexDirection: "row",
      },
      colorChild1: {
        width: "35%",
        backgroundColor: "red"
      },
      colorChild2: {
        width: "5%",
        backgroundColor: "black"
      },
      colorChild3: {
        width: "15%",
        backgroundColor: "orange"
      },
      colorChild4: {
        width: "10%",
        backgroundColor: "red"
      },
      colorChild5: {
        width: "5%",
        backgroundColor: "blue"
      },  
      colorChild6: {
        width: "30%",
        backgroundColor: "green"
      }
});