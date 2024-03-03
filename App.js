import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigators/StackNavigator";
import Topbar from "./src/components/home/Topbar";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <StatusBar style="light" animated={true} />
    </NavigationContainer>
  );
}
