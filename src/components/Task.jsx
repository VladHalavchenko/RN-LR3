import { View, Text, Button, StyleSheet } from "react-native";

export const Task = ({ deleteTask, item }) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>{item.title}</Text>
      <Text style={styles.taskDesc}>{item.description}</Text>
      <Button title="Done" onPress={() => deleteTask(item.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    padding: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 8,
  },
  taskName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  taskDesc: {
    marginBottom: 10,
  },
});
