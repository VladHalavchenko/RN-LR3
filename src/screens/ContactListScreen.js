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
      <View style={styles.btn}>
        <Button
          style={styles.btn}
          title="Add Contact"
          onPress={() => navigation.navigate("AddContact")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
    minWidth: 300,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    margin: 20,
    maxHeight: 500,
  },
  btn: {
    margin: "auto",
    minWidth: 200,
  },
});

export default connect(null, null)(ContactListScreen);
