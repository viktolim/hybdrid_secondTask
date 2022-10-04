import { useContext, useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import InputPlace from "../components/InputPlace";
import MealContext from "../context/MealContext";
import FoodImageBox from "../components/FoodImageBox";
import TitleName from "../components/TitleName";

const AboutFoodScreen = ({ navigation }) => {
  const { deleteComment, getComments, addComment } = useContext(MealContext);
  const food = navigation.getParam("food")[0];
  const categor = navigation.getParam("category");

  const pressed = (number) => {
    const info = {
      category: categor,
      food: food.id,
      id: number,
    };
    deleteComment(info);
  };

  const { comments } = getComments(categor, food.id);

  const add = (comment) => {
    const info = {
      category: categor,
      food: food.id,
    };
    addComment(comment, info, () => {});
  };
  return (
    <>
      <View>
        <TitleName>Komentarai</TitleName>
        <InputPlace add={add} />
        <ScrollView style={{ marginBottom: 200 }}>
          {comments.map((item, index) => {
            return (
              <FoodImageBox
                key={index}
                imageUrl={
                  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/768c0794907611.5e8ac6a7a12dc.jpg"
                }
                title={item.comment}
                index={index}
                pressed={pressed}
              />
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "#68A7AD",
    fontWeight: "bold",
    fontSize: 20,
  },
  input: {},
});

export default AboutFoodScreen;
