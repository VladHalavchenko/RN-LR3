import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import { addTask, deleteTask } from "../actions/taskActions";
import Database from "../store/database";
import { Task } from "./Task";

const TaskList = ({ tasks, onDeleteTask, onAddTask }) => {
  const width = Dimensions.get("window").width;
  const containerStyle = width < 500 ? styles.mobile : styles.desktop;
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
        contentContainerStyle={containerStyle}
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
  mobile: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  desktop: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
