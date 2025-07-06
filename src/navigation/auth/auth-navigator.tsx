import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../../components/auth/sign-in";
import SignUp from "../../components/auth/sign-up";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="sign-in" component={SignIn} />
      <Stack.Screen name="sign-up" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
