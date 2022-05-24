import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.textInputLabel}>What Todo ?</Text>
        <TextInput style={styles.textInput} />
        <Button title="Add Todo" />
      </View>
      <View style={styles.todosContainer}>
        <Text>List of Todoos...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flex: 1,
  },
  textInputLabel: {
    position: "absolute",
    top: "43%",
    left: "2%",
    margin: 1,
    color: "#ccc"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  todosContainer: {
    flex: 5,
  },
});
