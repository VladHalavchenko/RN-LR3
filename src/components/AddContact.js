// src/components/AddContact.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addContact } from "../actions/contactActions";
import Database from "../store/database";

const AddContact = ({ onAddContact }) => {
  const [name, setName] = useState("");

  const handleAddContact = () => {
    if (name.trim() !== "") {
      Database.saveToDB({ name }).then((res) => {
        onAddContact(res);
      });
      setName("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter contact name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button
        title="Add Contact"
        onPress={handleAddContact}
        style={styles.addButton}
      />
    </View>
  );
};

const mapDispatchToProps = {
  onAddContact: addContact,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    color: "white",
  },
});

export default connect(null, mapDispatchToProps)(AddContact);
