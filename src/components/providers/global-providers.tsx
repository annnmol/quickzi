import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { PropsWithChildren, createContext, useMemo } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated"; //do not remove this

//custom imports
import { isDarkTheme, theme } from "@app/src/lib/theme";

interface IGlobalContext {}

export const GlobalContext = createContext({} as IGlobalContext);

const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const isDark = useMemo(() => isDarkTheme(), []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GlobalContext.Provider value={{}}>
        <StatusBar
          style={isDark ? "light" : "dark"}
          backgroundColor={theme.card}
        />
        <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
          {children}
        </ThemeProvider>
      </GlobalContext.Provider>
    </GestureHandlerRootView>
  );
};

export default GlobalContextProvider;
