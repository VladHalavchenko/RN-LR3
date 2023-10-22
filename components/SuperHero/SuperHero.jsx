import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SuperheroComponent = ({ hero }) => {
  if (!hero) return <></>;
  const {
    name,
    biography: { fullName },
    images: { lg },
  } = hero;
  const avatar = lg.replace(
    "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/",
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.2.0/"
  );
  // console.log(lg,avatar);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: avatar }} alt="#" />
      </View>
      <View style={styles.heroBody}>
        <Text style={styles.heroName}>{fullName}</Text>
        <Text style={styles.heroBio}>
          {name} - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Libero vero aperiam soluta eveniet ex dolore ipsa neque, excepturi
          fugit perferendis tempora veritatis similique, rerum repellat
          laboriosam nesciunt dolorum eum consectetur.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    paddingTop: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 300,
  },
  heroName: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  imageContainer: {
    borderRadius: "10px",
    width: "80%",
    height: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    objectFit: "contain",
    width: "100%",
    height: "auto",
    minHeight: 200,
    minWidth: 150,
  },
  heroBody: {
    margin: "20px",
  },
  heroBio: {
    height: "150px",
    overflow: "scroll",
  },
});

export default SuperheroComponent;
