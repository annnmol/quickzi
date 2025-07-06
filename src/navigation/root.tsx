import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//custom imports
import AuthNavigator from "./auth/auth-navigator";
import ProtectedNavigator from "./protected/protected-navigator";
import { navigationRef } from "@app/src/lib/navigation";

// For now, we'll use a simple boolean to simulate authentication state
const isAuthenticated = false; // This should come from your auth state

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="protected" component={ProtectedNavigator} />
        <Stack.Screen name="auth" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
