import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
    Entypo,
    FontAwesome,
    Feather,
    MaterialIcons,
  } from "@expo/vector-icons";

function Topbar() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logo}>KurdiSong</Text>
      </View>
      <View style={styles.search}>
        <Text> <FontAwesome name="search" size={20} color={"#fff"} /></Text>
      </View>
    </View>
  )
}

export default Topbar;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        paddingTop: 35,
        justifyContent: "space-between",
        alignItems: "center"
    },
    logo: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "700",
    }
});
