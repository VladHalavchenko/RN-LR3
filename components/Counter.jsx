import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Button title="Decrement" onPress={decrement} />
      <Text>{count}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    gap: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 8,
    minWidth: 270,
  },
});
