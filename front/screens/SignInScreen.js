import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header/Header";
import SignIn from "../components/SignIn/SignIn";

export default function SignInScreen({ navigation }) {
  return (
    <View>
      <Header navigation={navigation} />
      <SignIn navigation={navigation} />
    </View>
  );
}
