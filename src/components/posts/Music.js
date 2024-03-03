import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Music = ({ music }) => {
  console.log(music);
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: music.image }}
          style={{
            width: 157,
            height: 160,
            objectFit: "cover",
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.3)",
          }}
        />
      </View>
      <View>
        <Text style={styles.title}>{music.name}</Text>
        <Text style={{ color: "#fff" }}>{music.name}</Text>
      </View>
    </View>
  );
};

export default Music;

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
  title: {
    color: "#fff",
    marginTop: 10,
  },
});
