import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { useState, useContext } from "react";
import ColorContainer from "../UI/ColorContainer";
import ProgressBar from "../UI/ProgressBar";
import { SignInCredentialsContext } from "../../context/signinform.context";

export default function SignIn({ navigation }) {
  const CredetialsContext = useContext(SignInCredentialsContext);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [displayEroor, setDisplayError] = useState(false);
  const [error, setError] = useState("");

  async function handleSingIn() {
    if (
      name.length > 2 &&
      surname.length > 2 &&
      (date.length === 10 || date.length === 8)
    ) {
      const year = new Date();
      let age = date.substring(0, 4);
      age = year.getFullYear() - age;
      console.log(age);

      CredetialsContext.addFirstFormCredentials(name, surname, date, age);

      navigation.navigate("SecondSignIn");
    } else {
      setError("Wprowadź poprawne dane");
      setDisplayError(true);
    }
  }

  return (
    <View>
      <View style={styles.container}>
        <ColorContainer />
        <Text style={styles.upTitle}>Dzień dobry</Text>
        <Text style={styles.title}>za chwilę otworzysz konto</Text>
        <ProgressBar width="15%" />
        <View style={styles.form}>
          <TextInput
            style={styles.nameInput}
            placeholder="Imię"
            value={name}
            onChangeText={(value) => setName(value)}
          />
          <TextInput
            style={styles.nameInput}
            placeholder="Naziwsko"
            value={surname}
            onChangeText={(value) => setSurname(value)}
          />
          <TextInput
            style={styles.nameInput}
            placeholder="Data urodzenia rrrr-mm-dd"
            value={date}
            onChangeText={(value) => setDate(value)}
            autoComplete="birthdate-year"
            maxLength={10}
          />
          {displayEroor ? <Text style={styles.error}>{error}</Text> : null}
          <TouchableHighlight onPress={handleSingIn}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Przejdź dalej</Text>
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
    height: 420,
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
    height: 260,
  },
  nameInput: {
    width: "100%",
    height: 35,
    marginTop: 20,
    borderWidth: 1,
  },
  buttonContainer: {
    marginTop: 30,
    height: 40,
    backgroundColor: "#ae0000",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    marginTop: 7,
  },
  error: {
    top: 170,
    color: "red",
    fontSize: 15,
    position: "absolute",
  },
});
