import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
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

export default Header;

const styles = StyleSheet.create({});
