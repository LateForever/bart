import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import LoginHeader from "../components/LoginHeader/LoginHeader";
import TransferSuccess from "../components/TransferSuccess/TransferSuccess";

export default function TransferSuccessScreen({ navigation }) {
  return (
    <View>
      <LoginHeader navigation={navigation} />
      <TransferSuccess navigation={navigation} />
    </View>
  );
}
