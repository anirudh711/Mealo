import React from "react";
import { Platform } from "react-native";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";

const defaultNavigationOptions = {
  //put all repeating configurations here
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? COLORS.primaryColor : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : COLORS.primaryColor,
};
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
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

const FavNavigator= createStackNavigator(
  {
    Favorities: FavouritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  }
);
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: "Meals!",
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: COLORS.primaryColor,
    },
  },
  Favorities: {
    screen: FavNavigator, //can use a screen or a navigator here
    navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: COLORS.accentColor,
    },
  },
};
const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
        // barStyle:{} use this if you dont want shifitng of colors
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: COLORS.accentColor,
        },
      });
export default createAppContainer(MealsFavTabNavigator);
