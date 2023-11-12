import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export const AdaptiveComponent = () => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const updateLayout = () => {
      setScreenWidth(Dimensions.get("window").width);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  }, []);

  const example1Styles =
    screenWidth > 600 ? styles.example1Wide : styles.example1Narrow;
  const example3Styles = {
    backgroundColor: screenWidth > 600 ? "lightblue" : "lightcoral",
  };

  return (
    <View style={styles.container}>
      <View style={[styles.example, example1Styles]}>
        <Text>Example 1</Text>
      </View>

      <View style={[styles.example]}>
        <Text>Example 2</Text>
      </View>

      <View style={[styles.example, example3Styles]}>
        <Text>Example 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  example: {
    padding: 20,
    marginBottom: 20,
    borderRadius: 8,
  },
  example1Wide: {
    flexDirection: "row",
  },
  example1Narrow: {
    flexDirection: "column",
  },
});

export default AdaptiveComponent;
