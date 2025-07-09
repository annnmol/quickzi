import { Tabs } from "expo-router";
import React from "react";

const ProtectedLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen 
        name="home" 
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => null, // Add your icon here
        }}
      />
      <Tabs.Screen 
        name="search" 
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => null, // Add your icon here
        }}
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => null, // Add your icon here
        }}
      />
      <Tabs.Screen 
        name="settings" 
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => null, // Add your icon here
        }}
      />
      {/* <Tabs.Screen 
        name="settings-detail" 
        options={{
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen 
        name="search-detail" 
        options={{
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen 
        name="edit-profile" 
        options={{
          href: null, // Hide from tab bar
        }}
      /> */}
    </Tabs>
  );
};

export default ProtectedLayout;
