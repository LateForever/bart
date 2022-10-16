import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Image, Button } from "react-native";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { sha256 } from "js-sha256";
import ColorContainer from "../UI/ColorContainer";
import { tokenContext } from "../../context/token.context";

require("dotenv").config();

export default function Login({ navigation }) {
  const TokenContext = useContext(tokenContext);

  const colors = {
    off: "#808080",
    on: "#21a148",
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [buttonColor, setButtonColor] = useState(colors.off);
  const [displayEroor, setDisplayError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (login.length > 4 && password.length > 4) {
      setButtonColor(colors.on);
    } else {
      setButtonColor(colors.off);
    }
  }, [login, password]);

  async function handleLogin() {
    const loginSalt =
      "812883901290d902hj90hr09h901h9803rh8903h809rfh89h8791ghf89071g98f7";
    const passwordSalt =
      "182h8dfh89021h8f901h80r9fgh207892g7983gfb097832gb1798fg34b27890fg24798";

    const Login = sha256(login + loginSalt);
    const Password = sha256(password + passwordSalt);
    if (buttonColor === colors.on) {
      const response = await axios.post("http://localhost:3001/api/login", {
        Login,
        Password,
      });
      console.log(response.data);
      if (response.data.message === "Wrong login or password") {
        const adminLogin = await axios.post(
          "http://localhost:3001/api/admin/login",
          {
            Login,
            Password,
          }
        );

        if (adminLogin.data.accessToken) {
          TokenContext.setToken(adminLogin.data.accessToken);
          navigation.navigate("AdminPanel");
        }
      } else {
        TokenContext.setToken(response.data.accessToken);
        setDisplayError(false);

        navigation.navigate("Main");
      }
    }
  }

  return (
    <View style={styles.container}>
      <ColorContainer />
      <Text style={styles.loginText}>Zaloguj się</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://online.mbank.pl/contentcache/logon/responsive_logon_retail/avatar_retail",
        }}
      />
      <TextInput
        placeholder="Login"
        style={styles.form}
        value={login}
        onChangeText={(value) => setLogin(value)}
      />
      <TextInput
        placeholder="Password"
        style={styles.form}
        value={password}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
      />
      {displayEroor ? (
        <View style={styles.error}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}
      <View style={styles.buttonContainer}>
        <Button
          title="Zaloguj"
          color={buttonColor}
          onPress={handleLogin}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    marginTop: 50,
    width: "80%",
    height: 400,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  loginText: {
    fontSize: 20,
    margin: 20,
  },
  form: {
    width: "80%",
    height: 35,
    marginTop: 30,
    borderWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  buttonContainer: {
    width: "80%",
    height: 40,
    marginTop: 30,
  },
  error: {
    position: "absolute",
    height: 20,
    top: 310,
    width: "80%",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});
