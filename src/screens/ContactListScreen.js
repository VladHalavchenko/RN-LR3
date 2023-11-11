// src/screens/ContactListScreen.js
import React from "react";
import { StyleSheet } from "react-native";
import { View, Button } from "react-native";
import { connect } from "react-redux";
import ContactList from "../components/ContactList";

const ContactListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ContactList />
      <Button
        title="Add Contact"
        onPress={() => navigation.navigate("AddContact")}
      />
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
    borderRadius: 30,
  },
});

export default connect(null, null)(ContactListScreen);
