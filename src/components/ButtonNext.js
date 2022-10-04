import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ButtonNext = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        clickedCategory(title);
        return clickedCategory;
      }}
    >
      <View style={[styles.button, { backgroundColor: color }]}> 
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

export default ButtonNext;
