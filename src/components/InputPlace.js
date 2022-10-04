import { StyleSheet, TextInput, Keyboard } from "react-native";
import { useState, useContext } from "react";
import CategoryButton from "./CategoryButton";
import MealContext from "../context/MealContext";
const InputPlace = ({ add }) => {
  const [title, setTitle] = useState("");

  const clickedCategory = () => {
    console.log(title);
    add(title);
    setTitle("");
  };
  console.log(title);
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="comment"
        multiline={true}
        importantForAutofill={"yes"}
      />
      <CategoryButton
        title={"add comment"}
        color="#D0C9C0"
        clickedCategory={clickedCategory}
      ></CategoryButton>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});
5;
export default InputPlace;
