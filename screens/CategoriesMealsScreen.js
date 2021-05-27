import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
const CategoriesMealsScreen = (props) => {
 
  let catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );
  return <MealList listData={displayedMeals} navigation={props.navigation}/>
};

CategoriesMealsScreen.navigationOptions = (navigationData) => {
  //you do this when you have to do it dynamically and not static data
  let catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};


export default CategoriesMealsScreen;
