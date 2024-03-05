import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Entypo,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  EvilIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const MusicPlayer = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate('Single')}>
      <View style={styles.imageContainer}>
        <View>
          <Image
            source={require("../../assets/1691764825164-919422011.jpg")}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={{ color: "#fff" }}>Yak</Text>
          <Text style={{ color: "#bababa" }}>Ahsen Almaz</Text>
        </View>
      </View>
      </Pressable>
      <View style={styles.icons}>
        <MaterialIcons name="cast" size={23} color={"#fff"} />
        <AntDesign name="hearto" size={23} color={"#fff"} />
        <FontAwesome5 name="play" size={23} color={"#fff"} />
      </View>
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "96%",
    justifyContent: "space-between",
    backgroundColor: "#454547",
    position: "absolute",
    borderRadius: 9,
    bottom: 80,
    left: 7,
    zIndex: 999999,
    flexDirection: "row",
    padding: 6,
  },
  imageContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 6,
  },
  icons: {
    flexDirection: "row",
    gap: 22,
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
