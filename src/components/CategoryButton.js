import { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CategoryButton = ({ title, color = "#D0C9C0", clickedCategory }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        clickedCategory(title);
        return clickedCategory;
      }}
    >
      <View style={[styles.button, { backgroundColor: color }]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 15,
  },
  text: {
    color: "white",
    alignSelf: "center",
    paddingHorizontal: 20,
  },
});

export default CategoryButton;
