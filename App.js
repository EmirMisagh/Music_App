import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { getUserAll } from "./src/config/API";
import { useState, useEffect, useCallback } from "react";

export default function App() {
  const [user, setUsers] = useState([]);

  const getUser = useCallback(async () => {
    const userData = await getUserAll();
    console.log(userData.data);
    setUsers(userData.data);
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <View style={styles.container}>
      <View>
        {user.map((item, index) => (
          <View>
            <Image
              source={{ uri: item.avatar }}
              style={{ width: 100, height: 100 }}
            />
            <Text key={index}>{item.name}</Text>
          </View>
        ))}
        <FlatList aria-valuemax={3} />
      </View>
      <Text>Open up App.js to start working on your</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
