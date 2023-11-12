import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import { addContact, deleteContact } from "../actions/contactActions";
import Database from "../store/database";
import { Contact } from "./Contact";

const ContactList = ({ contacts, onDeleteContact, onAddContact }) => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const updateLayout = () => {
      setScreenWidth(Dimensions.get("window").width);
    };

    Database.getAllElements().then((result) => {
      result.forEach(onAddContact);
    });

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  }, []);

  const deleteContact = (id) => {
    Database.removeElementByID(id);
    onDeleteContact(id);
  };

  const container =
    screenWidth < 500 ? styles.mobileContainer : styles.tabletContainer;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact List</Text>
      <FlatList
        contentContainerStyle={container}
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

  mobileContainer: {
    flexDirection: "column",
  },

  tabletContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
