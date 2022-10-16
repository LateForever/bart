import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";
import Header from "../components/Header/Header";
import Information from "../components/Information/Information";

export default function InformationScreen({ navigation }) {
  return (
    <View>
      <Header navigation={navigation}></Header>
      <Information navigation={navigation}></Information>
    </View>
  );
}
