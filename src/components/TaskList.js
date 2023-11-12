import React, { useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addTask, deleteTask } from "../actions/taskActions";
import Database from "../store/database";
import { Task } from "./Task";

const TaskList = ({ tasks, onDeleteTask, onAddTask }) => {
  useEffect(() => {
    Database.getAllElements().then((result) => {
      result.forEach(onAddTask);
    });
  }, []);

  const deleteTask = (id) => {
    Database.removeElementByID(id);
    onDeleteTask(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Task item={item} deleteTask={deleteTask} />}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
});

const mapDispatchToProps = {
  onDeleteTask: deleteTask,
  onAddTask: addTask,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 8,
  },
  taskName: {
    fontSize: 16,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
