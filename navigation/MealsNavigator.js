import { Platform } from "react-native";
import COLORS from "../constants/colors";
import { createStackNavigator } from "react-navigation-stack";
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Favourites from "../screens/FavouritesScreen"
import FavouritesScreen from "../screens/FavouritesScreen";
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories",
      },
    },
    CategoryMeals: {
      screen: CategoriesMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: { //put all repeating configurations here
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? COLORS.primaryColor : "white",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : COLORS.primaryColor,
    },
  }
);

const MealsFavTabNavigator =createBottomTabNavigator({
  Meals:MealsNavigator,
  Favourties:FavouritesScreen
})
export default createAppContainer(MealsFavTabNavigator);
