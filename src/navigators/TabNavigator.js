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

function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "white",
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "black",
        height: 65
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="home" size={size} color={color} />
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
      name="Reels"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="video-collection" size={size} color={color} />
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
      component={LoginScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="shopping-bag" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
  )
}

export default TabNavigator