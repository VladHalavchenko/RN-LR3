// src/components/ContactList.js
import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { deleteContact } from "../actions/contactActions";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact List</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.contactContainer}>
            <Text style={styles.contactName}>{item.name}</Text>
            <Button title="Delete" onPress={() => onDeleteContact(item.id)} />
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
