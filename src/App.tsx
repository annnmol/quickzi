import { StyleSheet } from "react-native";
import GlobalContextProvider from "./components/providers/global-providers";

// Custom imports
import RootNavigator from "@app/src/navigation/root";

export default function App() {
  return (
    <GlobalContextProvider>
      <RootNavigator />
    </GlobalContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
