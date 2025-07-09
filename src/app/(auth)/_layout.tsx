import React, { useEffect } from "react";
import { router, Stack } from "expo-router";
import useAuthStore from "@app/src/store/slices/auth";
import { useShallow } from "zustand/react/shallow";

const AuthLayout = () => {
  const authSession = useAuthStore(useShallow((state) => state.authSession));

  useEffect(() => {
    if (authSession?.email) {
      // If user is already authenticated, redirect to home
      router.replace("/(protected)/home");
    }
  }, [authSession]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
    </Stack>
  );
};

export default AuthLayout;
