import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MealScreen from "./src/sreens/MealScreen";
import FoodScreen from "./src/sreens/FoodScreen";
import { MealProvider } from "./src/context/MealContext";
import AboutFoodScreen from "./src/sreens/AboutFoodScreen";

const navigator = createStackNavigator(
  {
    Search: MealScreen,
    Recipe: FoodScreen,
    Comments: AboutFoodScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "MealSearch",
    },
  }
);
const App = createAppContainer(navigator);
export default () => {
  return (
    <MealProvider >
      <App />
    </MealProvider>
  );
};
