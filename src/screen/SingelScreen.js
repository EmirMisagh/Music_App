import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Topbar from "../components/home/Topbar";
import Header from "../components/home/Header";
import { LinearGradient } from "expo-linear-gradient";
import {
  Entypo,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  EvilIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const SingelScreen = () => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={[
        "rgba(255,255,255,0.4)",
        "rgba(255,255,255,0.3)",
        "rgba(255,255,255,0.2)",
        "rgba(0,0,0,0.8)",
        "rgba(0,0,0,0.8)",
      ]}
      style={styles.container}
    >
      <Header />
      <Image
        source={require("../../assets/1691764825164-919422011.jpg")}
        style={{
          width: "100%",
          height: 320,
          borderRadius: 2,
          marginVertical: 42,
        }}
      />
      <View style={styles.player}>
        <View>
          <Text style={{ color: "#fff" }}>Yak</Text>
          <Text style={{ color: "#bababa" }}>Ahsen Almaz</Text>
        </View>
        <View></View>
        <View style={styles.play}>
          <View>
            <AntDesign name="hearto" size={20} color={"#fff"} />
          </View>
          <View>
            <AntDesign name="stepbackward" size={30} color={"#fff"} />
          </View>
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome5 name="play" size={20} color={"#000"} />
          </View>
          <View>
            <AntDesign name="stepforward" size={30} color={"#fff"} />
          </View>
          <View>
            <Entypo name="add-to-list" size={20} color={"#fff"} />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <View>
            <MaterialIcons name="cast" size={20} color={"#fff"} />
          </View>
          <View>
            <EvilIcons name="share-google" size={25} color={"#fff"} />
          </View>
        </View>
      </View>
      <StatusBar style="light" backgroundColor="black" animated={true} />
    </LinearGradient>
  );
};

export default SingelScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: "#000",
    flex: 1,
  },
  player: {
    marginTop: 50,
  },
  play: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
