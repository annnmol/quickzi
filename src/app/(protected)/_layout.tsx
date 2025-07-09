import useAuthStore from "@app/src/store/slices/auth";
import { router, Stack } from "expo-router";
import React, { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

const ProtectedLayout = () => {
    const authSession = useAuthStore(useShallow((state) => state.authSession));
  
    useEffect(() => {
      if (!authSession?.email) {
        // If user is already authenticated, redirect to home
        router.replace("/(auth)/sign-in");
      }
    }, [authSession]);
  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="home" />
      <Stack.Screen name="search" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="settings" />
    </Stack>
  );
};

export default ProtectedLayout;

export const unstable_settings = {
  // Ensure that the root layout is always mounted
  initialRouteName: "/(tabs)",
  // Use the new Expo Router API
  rootNavigation: true,
};
