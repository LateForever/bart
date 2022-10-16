import React from "react";
import { View } from "react-native";
import LoginHeader from "../components/LoginHeader/LoginHeader";
import Main from "../components/Main/Main";

export default function MainScreen({ navigation }) {
  return (
    <View>
      <LoginHeader navigation={navigation} />
      <Main navigation={navigation} />
    </View>
  );
}
