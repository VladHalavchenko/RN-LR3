// src/screens/AddContactScreen.js
import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import AddContact from "../components/AddContact";

const AddContactScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AddContact />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    maxWidth: 300,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    maxHeight: 200,
    margin: "auto",
  },
});
export default AddContactScreen;
