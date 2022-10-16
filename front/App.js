import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignInScreen from "./screens/SignInScreen";
import SecondSignInScreen from "./screens/SecondSignInScreen";
import SignInCredentialsContextProvider from "./context/signinform.context";
import TokenContextProvider from "./context/token.context";
import InformationScreen from "./screens/InformationScreen";
import MainScreen from "./screens/MainScreen";
import DoTransferScreen from "./screens/DoTransferScreen";
import TransferSuccessScreen from "./screens/TransferSuccessScreen";
import AdminPanelScreen from "./screens/AdminPanelScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View>
      <TokenContextProvider>
        <SignInCredentialsContextProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="AdminPanel" component={AdminPanelScreen} />
              <Stack.Screen name="Main" component={MainScreen} />
              <Stack.Screen
                name="TransferSuccess"
                component={TransferSuccessScreen}
              />
              <Stack.Screen name="DoTransfer" component={DoTransferScreen} />

              <Stack.Screen
                name="SecondSignIn"
                component={SecondSignInScreen}
              />
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Information" component={InformationScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SignInCredentialsContextProvider>
      </TokenContextProvider>
    </View>
  );
}
