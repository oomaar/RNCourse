import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [value, onChangeValue] = useState("");
  const [state, onChangeState] = useState(false);
  console.log("🚀 ~ file: App.js ~ line 7 ~ App ~ value", value);
  console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ state", state)

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <Text style={!state ? styles.textInputLabelHide : styles.textInputLabel}>What Todo ?</Text>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={(e) => {
            onChangeValue(e);
            onChangeState(true);

            if (value === "") {
              onChangeState(false);
            }
          }}
        />
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
  textInputLabelHide: {
    width: "0%"
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
