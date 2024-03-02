import React from "react";
import { View, StyleSheet, Text } from "react-native";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <View>
          <Text style={styles.remember}>Remember</Text>
          <Text style={styles.remember}>Last music</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.button}>Random</Text>
          <Text style={styles.button}>Loop</Text>
          <Text style={styles.button}>More</Text>
        </View>
      </View>
      <View style={styles.postContainer}>

      </View>
      <Text style={{ color: "black" }}>amir hello hhjghg</Text>
    </View>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  label: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  remember: {
    color: "#fff",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 25,
  },
  button: {
    color: "red",
  },
  postContainer: {
    display: "flex",
    
  }
});
