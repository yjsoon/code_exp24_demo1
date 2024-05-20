import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* // Help me style the Hello World text to be large and red and centered */}
      <Text style={{ fontSize: 50, color: "red", textAlign: "center" }}>
        Hello World
      </Text>
      <Text>Does this work???</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
