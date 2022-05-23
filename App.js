import { StyleSheet, Text, View, Button } from "react-native";
import { TestComponent } from "./components";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Hello World</Text>
      </View>
      <Text style={styles.dummyText}>Hello World Two</Text>
      <Button title="Click Me !" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: "blue",
    padding: 16,
  },
});
