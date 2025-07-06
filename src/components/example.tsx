import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../lib/theme";
import useSystemStore from "../store/slices/system";
import { useShallow } from "zustand/react/shallow";
import { tokens } from "../lib/tokens";
import AppText from "./ui/text";
import AppButton from "./ui/button";

const Example = () => {
  const theme = useSystemStore(useShallow((state) => state.colorScheme));
  const setTheme = useSystemStore(useShallow((state) => state.setColorScheme));
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Quickzi!</Text>
      <Text style={styles.text}>Theme: {theme}</Text>
      <Button
        title="Switch Theme"
        onPress={() => {
          // alert("Button Pressed!");
          setTheme((prev) => {
            if (prev === "light") return "dark";
            if (prev === "dark") return "system";
            return "light";
          });
        }}
      />
      <View style={styles.card} />

      <AppText>Fruits & Vegetables</AppText>
      <AppText variant="title">Fruits & Vegetables</AppText>
      <AppText variant="heading" style={{fontWeight:"700"}}>Fruits & Vegetables</AppText>
      <AppText style={styles.text}>Fruits & Vegetables</AppText>
<AppButton>Continue</AppButton>
      <AppButton variant="ghost" textThemeKey="primary">Skip</AppButton>
      <AppButton variant="outline">Cancel</AppButton>
      <AppButton variant="danger">Delete</AppButton>
      <AppButton variant="danger-outline" textThemeKey="red">Remove</AppButton>
      <AppButton textVariant="heading" variant="outline">Login</AppButton>
    </View>
  );
};

export default Example;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.tabIconSelected,
  },

  card: {
    height: 200,
    width: 200,
    backgroundColor: theme.card,
    padding: tokens.spacing16,
    borderRadius: tokens.radius8,
    ...tokens.shadow4,
  },
});
