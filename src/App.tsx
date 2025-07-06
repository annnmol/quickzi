import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Example from './components/example';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Quickzi!</Text>
      <Example />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
