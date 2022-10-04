import { useContext } from "react";
import { StyleSheet, FlatList } from "react-native";
import FoodImageBox from "../components/FoodImageBox";

const FoodScreen = ({ navigation }) => {
  const meal = navigation.getParam("name")[0];
  console.log(
    meal,
    "----------------------------------------------------------------------"
  );
  return (
    <>
      <FlatList
        data={meal.foods}
        renderItem={({ item, index }) => (
          <FoodImageBox
            index={index}
            imageUrl={item.imageUrl}
            title={item.name}
            pressed={async (value) => {
              console.log({
                category: meal.category,
                food: meal.foods.filter((val) => {
                  return val.id == value;
                }),
              });
              navigation.navigate("Comments", {
                category: meal.category,
                food: meal.foods.filter((val, index) => {
                  return index == value;
                }),
              });
            }}
          />
        )}
        keyExtractor={(_, index) => index}
      />
    </>
  );
};
FoodScreen.navigationOptions = ({ navigation }) => {
  const { category } = navigation.getParam("name")[0];
  return {
    title: category,
  };
};

export default FoodScreen;
