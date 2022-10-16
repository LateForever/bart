import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import { useContext } from "react";
import { tokenContext } from "../../context/token.context";

export default function LoginHeader({ navigation }) {
  const TokenContext = useContext(tokenContext);

  function logoutHandler() {
    TokenContext.setToken("");
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.mbank.pl/mbank-news/materialy/nowe-logo-mbank.jpg",
          }}
        />
      </TouchableHighlight>
      <View style={styles.buttonContainer}>
        <Image
          style={styles.buttonImage}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/197/197572.png",
          }}
        />
        <Button
          title="Wyloguj"
          color={"#ae0000"}
          onPress={logoutHandler}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    marginLeft: 20,
    width: 150,
    height: 50,
    resizeMode: "cover",
  },
  buttonImage: {
    marginTop: 2,
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonContainer: {
    marginLeft: 85,
    flexDirection: "row",
  },
});
