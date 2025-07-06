import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//custom imports
import Example from "@app/src/components/example";
import Demo from "@app/src/components/demo";
import { navigationRef } from "@app/src/lib/navigation";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="example" component={Example} />
        <Stack.Screen name="demo" component={Demo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
