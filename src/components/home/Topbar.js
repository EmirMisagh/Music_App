import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Topbar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logo}>KurdiSong</Text>
      </View>
      <View style={styles.search}>
        <Text>Search</Text>
      </View>
    </View>
  );
};

export default Topbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    paddingVertical: 20,
    fontWeight: 800,
  },
});
