import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logo} onPress={() => navigation.goBack()}>
          <Entypo name="chevron-thin-down" size={19} color={"#fff"} />
        </Text>
      </View>
      <View style={styles.search}>
        <Text>
          {" "}
          <Entypo name="dots-three-vertical" size={19} color={"#fff"} />
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 35,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 40,
  },
  logo: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
  },
});
