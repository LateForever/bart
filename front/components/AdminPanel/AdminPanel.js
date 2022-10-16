import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import { tokenContext } from "../../context/token.context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function AdminPanel({ navigation }) {
  const [transfers, setTransfers] = useState();
  const TokenContext = useContext(tokenContext);

  function logout() {
    TokenContext.setToken("");
    navigation.navigate("Home");
  }

  useEffect(() => {
    async function transfers() {
      const transfer = await axios.get(
        "http://localhost:3001/api/admin/transfers",
        {
          headers: {
            Authorization: `Bearer ${TokenContext.token}`,
          },
        }
      );

      setTransfers(transfer.data);
      console.log(transfer.data);
    }

    transfers();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AdminPanel</Text>
        <TouchableHighlight onPress={logout}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Wyloguj</Text>
          </View>
        </TouchableHighlight>
      </View>
      {transfers
        ? transfers.map((item) => {
            return (
              <View style={styles.transfer} key={item.id}>
                <Text style={styles.transferTitle}>
                  Tytuł przelewu: {item.transfer_title}
                </Text>
                <Text style={styles.transferDate}>
                  Kwota przelewu: {item.ammount}
                </Text>
                <Text style={styles.transferAmmount}>
                  Czy krajowy: {item.national}
                </Text>
                <Text style={styles.transferCurrency}>
                  Numer konta: {item.to_account}
                </Text>
                <Text style={styles.transferCurrency}>
                  Data przelewu: {item.transfer_date}
                </Text>
                <View style={styles.c}>
                  <View style={styles.delete}>
                    <Text style={styles.text}>Usuń</Text>
                  </View>
                  <View style={styles.update}>
                    <Text style={styles.text}>Edytuj</Text>
                  </View>
                </View>
              </View>
            );
          })
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 2000,
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginTop: 20,
  },
  transfer: {
    width: "80%",
    height: 140,
    marginTop: 20,
    backgroundColor: "#fff",
  },
  c: {
    width: "100%",
    height: 50,
    flexDirection: "row",
  },
  delete: {
    marginTop: 7,
    width: "40%",
    height: 35,
    backgroundColor: "red",
    marginLeft: 20,
  },
  update: {
    marginTop: 7,
    width: "40%",
    height: 35,
    backgroundColor: "orange",
    marginLeft: 20,
  },
  text: {
    fontSize: 15,
    marginTop: 5,
  },
  header: {
    flexDirection: "row",
  },
  button: {
    marginTop: 10,
    marginLeft: 20,
    height: 40,
    width: 100,
    backgroundColor: "red",
  },
  buttonText: {
    fontSize: 15,
    marginTop: 10,
  },
});
