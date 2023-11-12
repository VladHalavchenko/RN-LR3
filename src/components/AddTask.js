// src/components/AddTask.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addTask } from "../actions/taskActions";
import Database from "../store/database";

const AddTask = ({ onAddTask }) => {
  const [name, setName] = useState("");

  const handleAddTask = () => {
    if (name.trim() !== "") {
      Database.saveToDB({ name }).then((res) => {
        onAddTask(res);
      });
      setName("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button
        title="Add Task"
        onPress={handleAddTask}
        style={styles.addButton}
      />
    </View>
  );
};

const mapDispatchToProps = {
  onAddTask: addTask,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    color: "white",
  },
});

export default connect(null, mapDispatchToProps)(AddTask);
