// src/screens/AddTaskScreen.js
import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import AddTask from "../components/AddTask";

const AddTaskScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AddTask />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    maxWidth: 300,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    maxHeight: 200,
    margin: "auto",
  },
});
export default AddTaskScreen;
