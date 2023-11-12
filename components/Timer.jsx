import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
export const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <View style={styles.container}>
      <Text>Time: {time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 12,
    gap: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    minWidth: 270,
  },
});
