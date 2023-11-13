// src/screens/TaskListScreen.js
import React from "react";
import { StyleSheet } from "react-native";
import { View, Button } from "react-native";
import { connect } from "react-redux";
import TaskList from "../components/TaskList";

const TaskListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TaskList />
      <Button title="Add Task" onPress={() => navigation.navigate("AddTask")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    minWidth: 300,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    margin: 50,
    maxHeight: 500,
  },
});

export default connect(null, null)(TaskListScreen);
