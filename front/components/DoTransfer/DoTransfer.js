import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TextInput,
} from "react-native";
import ColorContainer from "../UI/ColorContainer";
import { useContext, useState } from "react";
import axios from "axios";
import { tokenContext } from "../../context/token.context";

export default function DoTransfer({ navigation }) {
  const [description, setDescription] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [countryTransfer, setCountryTransfer] = useState("Przelew krajowy");
  const [displayError, setDisplayError] = useState(false);

  const TokenContext = useContext(tokenContext);

  function nav() {
    navigation.navigate("TransferSuccess");
  }

  function transfer() {
    console.log(description, accountNumber, amount, currency, countryTransfer);

    const data = {
      description: description,
      accountNumber: accountNumber,
      amount: 0,
      currency: currency,
      countryTransfer: 0,
    };

    if (
      description === "" ||
      accountNumber === "" ||
      amount === "" ||
      currency === ""
    ) {
      setDisplayError(true);
    } else {
      if (countryTransfer === "Przelew krajowy") {
        const countryT = 0;
        const ammount = parseInt(amount);

        data.amount = ammount;
        data.countryTransfer = countryT;
      }

      const headers = {
        Authorization: `Bearer ${TokenContext.token}`,
      };

      const result = axios
        .post("http://localhost:3001/api/transfer", data, {
          headers: headers,
        })
        .then((res) => {
          if (res.data.message === "Transfer done") {
            nav();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <View style={styles.container}>
      <ColorContainer />
      <Text style={styles.title}>Tworzenie przelewu</Text>
      <TextInput
        style={styles.input}
        placeholder="Tytuł przelewu"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Numer konta"
        keyboardType="numeric"
        value={accountNumber}
        onChangeText={(text) => setAccountNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Kwota xxxx.xx"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Wpisz walutę PLN, USD, EUR"
        value={currency}
        onChangeText={(text) => setCurrency(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Czy przelew krajowy ?"
        value={countryTransfer}
        onChangeText={(text) => setCountryTransfer(text)}
      />
      {displayError ? (
        <Text style={styles.error}>Wypełnij poprawnie wszytskie pola</Text>
      ) : null}
      <TouchableHighlight onPress={transfer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Wyślij</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "84.5%",
    height: 430,
    backgroundColor: "#f4f4f4",
    margin: 30,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    width: "90%",
    height: 35,
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 15,
    fontSize: 16,
  },
  button: {
    marginTop: 30,
    marginLeft: 14,
    height: 45,
    width: "90%",
    backgroundColor: "#A40810",
  },
  buttonText: {
    color: "#fff",
    fontSize: 19,
    marginTop: 7,
  },
  error: {
    color: "red",
    position: "absolute",
    fontSize: 16,
    top: 336,
    left: 15,
  },
});
