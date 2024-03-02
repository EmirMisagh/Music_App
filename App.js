import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { getUserAll } from "./src/config/API";
import { useState, useEffect, useCallback } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import StackNavigator from "./src/navigators/StackNavigator";
import HomeScreen from "./src/screen/HomeScreen";
import Topbar from "./src/components/home/Topbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Topbar />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
