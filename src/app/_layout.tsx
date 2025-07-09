import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return <Stack />;
};

export default Layout;

export const unstable_settings = {
  // Ensure that the root layout is always mounted
  initialRouteName: "/",
  // Use the new Expo Router API
  rootNavigation: true,
};