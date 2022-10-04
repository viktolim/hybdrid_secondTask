import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import CategoryButton from "../components/CategoryButton";
import TitleName from "../components/TitleName";
import MealContext from "../context/MealContext";
const MealScreen = ({ navigation }) => {
  const { getFood: value, addComment } = useContext(MealContext);
  const [meal, setMeal] = useState([]);
  const clickedCategory = (title) => {
    navigation.navigate("Recipe", {
      name: value.filter(({ category }) => category == title),
    });
  };

  // useEffect(() => {
  //   const info = {
  //     category: null,
  //     food: null,
  //   };
  //   addComment(null, info, () => {});
  // }, []);
  return (
    <View style={styles.container}>
      <TitleName>Category</TitleName>

      <FlatList
        horizontal
        data={value}
        renderItem={({ item }) => {
          return (
            <CategoryButton
              title={item.category}
              color="#68A7AD"
              clickedCategory={clickedCategory}
            />
          );
        }}
        keyExtractor={(_, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default MealScreen;
