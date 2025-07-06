import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../lib/theme";
import useSystemStore from "../store/slices/system";
import { useShallow } from "zustand/react/shallow";

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
    color: theme.primary,
  },
});
