import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header/Header";
import SecondSignIn from "../components/SecondSignIn/SecondSignIn";

export default function SecondSignInScreen({ navigation }) {
  return (
    <View>
      <Header navigation={navigation} />
      <SecondSignIn navigation={navigation} />
    </View>
  );
}
