import React, { useEffect, useRef } from "react";
import { Text, Button, StyleSheet, Animated } from "react-native";

export const Task = ({ deleteTask, item }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.taskContainer, { opacity: fadeAnim }]}>
      <Text style={styles.taskName}>{item.title}</Text>
      <Text style={styles.taskDesc}>{item.description}</Text>
      <Button title="Done" onPress={() => deleteTask(item.id)} />
    </Animated.View>
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
    maxWidth: 350,
    minWidth: 250,
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
