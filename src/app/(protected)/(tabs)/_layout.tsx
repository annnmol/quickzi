import { Tabs } from "expo-router";
import React from "react";

// Custom imports
import AppTabBar from "@app/src/components/navigation/tabbar";

const ProtectedLayout = () => {
  return (
    <Tabs tabBar={(props) => <AppTabBar {...props} />}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />
    </Tabs>
  );
};

export default ProtectedLayout;
