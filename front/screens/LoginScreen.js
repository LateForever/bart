import React from "react";
import { View } from "react-native";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <Header navigation={navigation} />
      <Login navigation={navigation} />
    </View>
  );
}
