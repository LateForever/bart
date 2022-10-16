import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import LoginHeader from "../components/LoginHeader/LoginHeader";
import DoTransfer from "../components/DoTransfer/DoTransfer";

export default function DoTransferScreen({ navigation }) {
  return (
    <View>
      <LoginHeader navigation={navigation} />
      <DoTransfer navigation={navigation} />
    </View>
  );
}
