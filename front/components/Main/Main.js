import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import Transfer from "../Transfer/Transfer";
import { useContext } from "react";
import { tokenContext } from "../../context/token.context";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Main({ navigation }) {
  const [money, setMoney] = useState(0);
  const [accountNumber, setAccountNumber] = useState("");
  const [transfers, setTransfers] = useState([]);
  const TokenContext = useContext(tokenContext);

  console.log(TokenContext.token);

  useEffect(() => {
    const getUserData = async () => {
      const result = await axios.get("http://localhost:3001/api/auth/user", {
        headers: {
          Authorization: `Bearer ${TokenContext.token}`,
        },
      });
      console.log(result);
      console.log(result.data.message);

      if (result.data.message === "Invalid token") {
        navigation.navigate("Home");
      }
    };

    const getUser = async () => {
      const result = await axios.get("http://localhost:3001/api/getUser", {
        headers: {
          Authorization: `Bearer ${TokenContext.token}`,
        },
      });
      const { account_number, balance } = result.data;

      setMoney(balance);
      setAccountNumber(account_number);
    };

    const getTransfers = async () => {
      const result = await axios.get("http://localhost:3001/api/getTransfers", {
        headers: {
          Authorization: `Bearer ${TokenContext.token}`,
        },
      });
      setTransfers(result.data.reverse());
      console.log(result);
      return result;
    };

    getUserData();
    getUser();
    getTransfers();
  }, []);

  useEffect(() => {
    const getTransfers = async () => {
      const result = await axios.get("http://localhost:3001/api/getTransfers", {
        headers: {
          Authorization: `Bearer ${TokenContext.token}`,
        },
      });
      setTransfers(result.data.reverse());
      console.log(result);
      return result;
    };

    getTransfers();
  }, [money]);

  function doTransfer() {
    navigation.navigate("DoTransfer");
  }

  return (
    <View>
      <View style={styles.container}>
        <TouchableHighlight onPress={doTransfer}>
          <View style={styles.creditCard}>
            <Image
              style={styles.cardImage}
              source={{
                uri: "https://www.mbank.pl/grafiki/inne/indywidualni/mbank_young_visa_paywave_transparent_900x566.jpg",
              }}
            />
            <Text style={styles.cardNumberText}>{accountNumber}</Text>
          </View>
        </TouchableHighlight>
        <View>
          <Text style={styles.balanceText}>Saldo: {money} zł</Text>
        </View>
        <View style={styles.allTransfers}>
          <Text style={styles.allTransfersText}>Wszystkie przelewy</Text>
        </View>
        {transfers.map((element) => {
          return <Transfer transfer={element} key={element.id} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 800,
    backgroundColor: "#f5f5f5",
  },
  creditCard: {
    margin: 30,
    width: "85%",
    height: 180,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  allTransfers: {
    height: 40,
    backgroundColor: "#A40810",
    width: "85%",
    margin: 30,
    textAlign: "center",
    borderRadius: 10,
  },
  allTransfersText: {
    color: "#fff",
    fontSize: 18,
    marginTop: 7,
  },
  balanceText: {
    fontSize: 20,
    marginLeft: 30,
    fontWeight: "bold",
  },
  cardNumberText: {
    position: "absolute",
    top: 140,
    left: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
