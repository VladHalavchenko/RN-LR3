import { View, StyleSheet } from "react-native";
export const Block = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 12,
    gap: 10,
  },
});
