import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addContact, deleteContact } from "../actions/contactActions";
import Database from "../store/database";
import { Contact } from "./Contact";

const ContactList = ({ contacts, onDeleteContact, onAddContact }) => {
  useEffect(() => {
    Database.getAllElements().then((result) => {
      result.forEach(onAddContact);
    });
  }, []);

  const deleteContact = (id) => {
    Database.removeElementByID(id);
    onDeleteContact(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact List</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Contact item={item} deleteContact={deleteContact} />
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts,
});

const mapDispatchToProps = {
  onDeleteContact: deleteContact,
  onAddContact: addContact,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
