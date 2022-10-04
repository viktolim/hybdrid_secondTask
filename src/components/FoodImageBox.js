import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import TitleName from "./TitleName";
import ButtonNext from "./ButtonNext";
import CategoryButton from "./CategoryButton";

const FoodImageBox = ({ imageUrl, title, pressed, index }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        pressed(index);
        return pressed;
      }}
    >
      <View style={[styles.container, { flexWrap: "wrap" }]}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.textArea}>
          <TitleName style={styles.title}>{title}</TitleName>
          <View style={styles.textAreaInside}></View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 7,
    backgroundColor: "white",
    borderRadius: 8,
    width: "90%",
    marginVertical: 10,
    elevation: 20,
    shadowColor: "#68A7AD",
    alignSelf: "center",
    flexDirection: "row",
  },
  image: {
    flex: 1,
    height: 150,
    borderRadius: 15,
  },
  title: {
    flexWrap: "wrap",
    alignSelf: "flex-start",
  },
  textArea: {
    flex: 1.5,
    flexDirection: "column",
  },
  textAreaInside: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default FoodImageBox;
