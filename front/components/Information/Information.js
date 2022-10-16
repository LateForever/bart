import { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
} from "react-native";
import ColorContainer from "../UI/ColorContainer";
import { SignInCredentialsContext } from "../../context/signinform.context";

export default function InformationScreen({ navigation }) {
  const CredetialsContext = useContext(SignInCredentialsContext);

  function navigateToLoginPage() {
    navigation.navigate("Login");
  }

  useEffect(() => {
    setTimeout(navigateToLoginPage, 4000);
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <ColorContainer />
        <Text style={styles.title}>Konto zostało utworzone</Text>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn1.iconfinder.com/data/icons/color-bold-style/21/34-512.png",
          }}
        />
        <Text style={styles.emailText}>
          Dane do logowania zostały wysłane na email:
        </Text>

        <Text style={styles.email}> {CredetialsContext.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "84.5%",
    margin: 30,
    marginTop: 50,
    height: 320,
    backgroundColor: "#f5f5f5",
    textAlign: "center",
  },
  image: {
    width: 140,
    height: 140,
    marginTop: 15,
    marginLeft: 90,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  emailText: {
    marginTop: 20,
    fontSize: 15,
  },
  email: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: "bold",
  },
});
