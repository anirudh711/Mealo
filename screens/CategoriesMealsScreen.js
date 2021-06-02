import React from "react";
import { useSelector } from "react-redux"
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
const CategoriesMealsScreen = (props) => {
 
  let catId = props.navigation.getParam("categoryId"); //coming from category screen navigator
  const availableMeals=useSelector(state=> state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter((meal) =>
    meal.categoryIds.includes(catId)
  );
  return <MealList listData={displayedMeals} navigation={props.navigation}/>
};

CategoriesMealsScreen.navigationOptions = (navigationData) => {
  //you do this when you have to do it dynamically and not static data
  let catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title, //to dynamically asssign header title
  };
};


export default CategoriesMealsScreen;
