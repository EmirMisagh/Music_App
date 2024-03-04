import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  FontAwesome,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import HomeScreen from "../screen/HomeScreen";
import Topbar from "../components/home/Topbar";
import SingelScreen from "../screen/SingelScreen";
import MusicPlayer from "../components/MusicPlayer"


function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <MusicPlayer />
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "white",
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
              display: "flex",
              position: "absolute",
              elevation: 5,
              backgroundColor: "rgba(0,0,0,0.6)",
              borderRadius: 0,
              borderWidth: 0,
              borderColor: "#000",
              flexDirection: "column",
              height: 80,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <View style={{ borderWidth: 0 }}>
                  <Entypo name="home" size={size} color={color} />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="search" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Singl"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons
                  name="video-collection"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Shopping"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Feather name="shopping-bag" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="profile"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <View>
                  <Feather name="shopping-bag" size={size} color={color} />
                  <Text style={{ color: color }}>Home</Text>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
    </>
  );
}

export default TabNavigator;
