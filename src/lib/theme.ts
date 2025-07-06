import { Appearance } from "react-native";

// custom imports
import useSystemStore from "@app/src/store/slices/system";
import colorTokens from "../../tokens/colors.json";

type ThemeMode = "light" | "dark";

// 👇 Helper to flatten design tokens
const getFlattenedColors = <T extends Record<string, { value: string }>>(
  palette: T
) => {
  return Object.fromEntries(
    Object.entries(palette).map(([key, val]) => [key, val.value])
  ) as {
    [K in keyof T]: T[K]["value"];
  };
};

// 👇 Detect current theme
const userPreference = useSystemStore.getState().colorScheme ?? "light";
const systemPreference = Appearance.getColorScheme() ?? "light";

const colorScheme: ThemeMode =
  userPreference === "system" ? systemPreference : userPreference;

// 👇 Flattened color theme with full TS support
export const theme = getFlattenedColors(colorTokens[colorScheme]);

export type ThemeTypeMap = typeof theme;
export type ThemeKeys = keyof ThemeTypeMap;

export const isDarkTheme = (): boolean => colorScheme === "dark";
