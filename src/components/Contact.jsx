import React, { useEffect, useRef } from "react";
import { Text, Button, StyleSheet, Animated } from "react-native";

export const Contact = ({ item, deleteContact }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.contactContainer, { opacity: fadeAnim }]}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Button title="Delete" onPress={() => deleteContact(item.id)} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 8,
  },
  contactName: {
    fontSize: 16,
  },
});
