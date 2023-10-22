import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import SuperHero from "../SuperHero/SuperHero";
import { searchHero } from "../../services/heroApi";
const SuperheroComponent = () => {
  const [superhero, setSuperhero] = useState(null);
  const [name, setName] = useState("");

  const onSearchBtnClick = async () => {
    const hero = await searchHero(name);
    setSuperhero(hero);
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          value={name}
          style={styles.input}
          placeholder="SuperHero"
          onChangeText={(text) => setName(text)}
        />
        <Button title="Search Hero" onPress={onSearchBtnClick} />
      </View>
      <View>
        <SuperHero hero={superhero}></SuperHero>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 50,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  form: {
    width: "100%",
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    maxWidth: 300,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
  },
});

export default SuperheroComponent;
