import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import FoodScreen from "../sreens/FoodScreen";

const MealContext = React.createContext();

export const MealProvider = ({ children }) => {
  console.log("context");

  const [Foods, setFood] = useState({
    data: null,
    changed: false,
  });

  const getComments = (categor, id) => {
    console.log(categor, Foods.data);
    console.log(
      "1**********",
      Foods.data
        .filter(({ category }) => category == categor)[0]
        .foods.filter((smth, index) => {
          console.log("1/////", smth);
          return id == index;
        })
    );
    return Foods.data
      .filter(({ category }) => category == categor)[0]
      .foods.filter((smth, index) => id == index)[0];
  };

  useEffect(() => {
    (async () => {
      console.log("useEfect");
      try {
        const value = JSON.parse(await AsyncStorage.getItem("mealList"));
        console.log("....");
        if (value !== null) {
          setFood({
            data: value,
            changed: true,
          });
        } else {
          return null;
        }
      } catch (error) {
        return null;
      }
    })();
  }, []);

  const deleteComment = async ({
    category: chosenCategory,
    food,
    id: chosenComment,
    callback,
  }) => {
    const array = [];

    setFood(({ data }) => {
      data.filter((item) => {
        if (item.category == chosenCategory) {
          array.push({
            category: item.category,
            description: item.description,
            foods: item.foods.map((info, index) => {
              if (index == food) {
                return {
                  id: index,
                  name: info.name,
                  imageUrl: info.imageUrl,
                  comments: info.comments.filter(
                    (_, index) => chosenComment != index
                  ),
                };
              }
              return { ...info };
            }),
          });
        } else array.push(item);
      });
      return { data: array, changed: true };
    });
    try {
      await AsyncStorage.setItem("mealList", JSON.stringify(array));
      callback(() => "finished");
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const addComment = async (
    comment,
    { category: chosenCategory, food },
    callback
  ) => {
    const array = [];
    setFood(({ data }) => {
      data.filter((item) => {
        if (item.category == chosenCategory) {
          array.push({
            category: item.category,
            description: item.description,
            foods: item.foods.map((info, index) => {
              if (index == food) {
                return {
                  id: index,
                  name: info.name,
                  imageUrl: info.imageUrl,
                  comments: [
                    ...info.comments,
                    {
                      username: "Nojus",
                      comment: comment,
                      data: new Date(),
                      rating: "5",
                    },
                  ],
                };
              }
              return { ...info };
            }),
          });
        } else array.push(item);
      });
      return { data: array, changed: true };
    });

    try {
      await AsyncStorage.setItem("mealList", JSON.stringify(array));
      callback();
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  console.log(Foods);
  return Foods.changed ? (
    <MealContext.Provider
      value={{
        getFood: Foods.data,
        deleteComment,
        getComments,
        addComment,
      }}
    >
      {children}
    </MealContext.Provider>
  ) : null;
};

export default MealContext;
