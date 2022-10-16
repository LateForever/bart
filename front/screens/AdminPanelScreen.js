import { StyleSheet, Text, TextInput, View, Image, Button } from "react-native";
import AdminPanel from "../components/AdminPanel/AdminPanel";

export default function AdminPaneScreen({ navigation }) {
  return (
    <View>
      <AdminPanel navigation={navigation} />
    </View>
  );
}
