import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import ColorContainer from "../UI/ColorContainer";
import { useEffect } from "react";

export default function TransferSuccess({ navigation }) {
  function navigateToLoginPage() {
    navigation.navigate("Main");
  }

  useEffect(() => {
    setTimeout(navigateToLoginPage, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ColorContainer />
      <Text style={styles.title}>Przelew Wykonano pomyślnie</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://cdn1.iconfinder.com/data/icons/color-bold-style/21/34-512.png",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "84.5%",
    height: 350,
    backgroundColor: "#f4f4f4",
    margin: 30,
    textAlign: "center",
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 140,
    height: 140,
    marginTop: 15,
    marginLeft: 90,
  },
});
