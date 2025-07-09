import React from "react";
import Example from "../components/example";
import { Redirect } from "expo-router";
import useAuthStore from "../store/slices/auth";
import { useShallow } from "zustand/react/shallow";

const Index = () => {
  const authSession = useAuthStore(useShallow((state) => state.authSession));

  if (authSession?.email) {
    return <Redirect href="/(protected)/home" />;
  }

  return <Redirect href="/(auth)/sign-in" />;
};

export default Index;
