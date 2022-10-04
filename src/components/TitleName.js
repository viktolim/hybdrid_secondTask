import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TitleName = ({ children, style }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginHorizontal: 15,
  },
  text: {
    color: "#68A7AD",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default TitleName;
