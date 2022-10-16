import { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { SignInCredentialsContext } from "../../context/signinform.context";
import ColorContainer from "../UI/ColorContainer";
import ProgressBar from "../UI/ProgressBar";
import axios from "axios";

export default function SecondSignIn({ navigation }) {
  const CredetialsContext = useContext(SignInCredentialsContext);

  const [living_address, setLivingAddress] = useState("");
  const [living_city, setLivingCity] = useState("");
  const [living_postal_code, setLivingPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [displayEroor, setDisplayError] = useState(false);
  const [error, setError] = useState("");

  async function handleSingIn() {
    if (
      living_address.length > 10 &&
      living_city.length > 3 &&
      living_postal_code.length === 6 &&
      email.length > 6 &&
      email.includes("@")
    ) {
      CredetialsContext.addSecondFormCredentials(
        living_address,
        living_city,
        living_postal_code,
        email
      );

      const data = {
        birthDate: CredetialsContext.Birthdate,
        email: email,
        firstName: CredetialsContext.name,
        lastName: CredetialsContext.surname,
        age: CredetialsContext.age,
        living_address: living_address,
        living_city: living_city,
        living_postal_code: living_postal_code,
      };

      await axios
        .post("http://localhost:3001/api/create/user", data)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      navigation.navigate("Information");
      console.log(CredetialsContext);
    } else {
      setError("Wprowadź poprawne dane");
      setDisplayError(true);
    }
  }

  return (
    <View>
      <View style={styles.container}>
        <ColorContainer />
        <Text style={styles.upTitle}>Uzupełnj proszę</Text>
        <Text style={styles.title}>ostatnie potrzebne nam dane</Text>
        <ProgressBar width="70%" />
        <View style={styles.form}>
          <TextInput
            style={styles.nameInput}
            placeholder="Adres zamieszkania"
            value={living_address}
            onChangeText={(value) => setLivingAddress(value)}
          />
          <TextInput
            style={styles.nameInput}
            placeholder="Miasto"
            value={living_city}
            onChangeText={(value) => setLivingCity(value)}
          />
          <TextInput
            style={styles.nameInput}
            placeholder="Kod pocztowy"
            autoComplete="postal-code"
            maxLength={6}
            value={living_postal_code}
            onChangeText={(value) => setLivingPostalCode(value)}
          />
          <TextInput
            style={styles.nameInput}
            placeholder="Email"
            autoComplete="email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          {displayEroor ? <Text style={styles.error}>{error}</Text> : null}
          <TouchableHighlight onPress={handleSingIn}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Stwórz konto</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "84.5%",
    height: 460,
    backgroundColor: "#f5f5f5",
    marginLeft: 30,
    marginTop: 50,
    textAlign: "center",
  },
  upTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  form: {
    width: "90%",
    marginLeft: 15,
    marginTop: 15,
    height: 300,
  },
  nameInput: {
    width: "100%",
    height: 40,
    marginTop: 16,
    borderWidth: 1,
  },
  buttonContainer: {
    height: 40,
    marginTop: 30,
    backgroundColor: "#ae0000",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    marginTop: 7,
  },
  error: {
    top: 226,
    color: "red",
    fontSize: 15,
    position: "absolute",
  },
});
