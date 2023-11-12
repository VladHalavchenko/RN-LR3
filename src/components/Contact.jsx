import { View, Text, Button, StyleSheet } from "react-native";

export const Contact = ({ item, deleteContact }) => {
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Button title="Delete" onPress={() => deleteContact(item.id)} />
    </View>
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
