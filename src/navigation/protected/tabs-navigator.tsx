import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../components/protected/home";
import Search from "../../components/protected/search";
import Settings from "../../components/protected/settings";
import { theme } from "../../lib/theme";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.tabIconDefault,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: theme.border,
        },
      }}
    >
      <Tab.Screen 
        name="home" 
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            // You can replace this with proper icons from react-native-vector-icons or expo-icons
            <></>
          ),
        }}
      />
      <Tab.Screen 
        name="search" 
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <></>
          ),
        }}
      />
      <Tab.Screen 
        name="settings" 
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <></>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
