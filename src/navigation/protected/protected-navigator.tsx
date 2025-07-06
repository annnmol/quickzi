import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNavigator from "./tabs-navigator";
import ProfileStack from "../../components/protected/profile-stack";
import SettingsDetail from "../../components/protected/settings-detail";
import SearchDetail from "../../components/protected/search-detail";
import EditProfile from "../../components/protected/edit-profile";

const Stack = createNativeStackNavigator();

const ProtectedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Main tabs navigator */}
      <Stack.Screen name="tabs" component={TabsNavigator} />
      
      {/* Stack screens without tabs */}
      <Stack.Screen 
        name="profile-stack" 
        component={ProfileStack}
        options={{
          headerShown: true,
          title: "Profile",
        }}
      />
      <Stack.Screen 
        name="settings-detail" 
        component={SettingsDetail}
        options={{
          headerShown: true,
          title: "Settings Detail",
        }}
      />
      <Stack.Screen 
        name="search-detail" 
        component={SearchDetail}
        options={{
          headerShown: true,
          title: "Search Results",
        }}
      />
      <Stack.Screen 
        name="edit-profile" 
        component={EditProfile}
        options={{
          headerShown: true,
          title: "Edit Profile",
        }}
      />
    </Stack.Navigator>
  );
};

export default ProtectedNavigator;
