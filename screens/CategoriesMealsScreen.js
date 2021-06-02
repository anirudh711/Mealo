import React from "react";
import { useSelector } from "react-redux"
import {View,Text,StyleSheet} from 'react-native'
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText"
const CategoriesMealsScreen = (props) => {
 
  let catId = props.navigation.getParam("categoryId"); //coming from category screen navigator
  const availableMeals=useSelector(state=> state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter((meal) =>
    meal.categoryIds.includes(catId)
  );
  if(displayedMeals.length===0 ){
    return <View style={styles.content}>
      <Text>No meals found, maybe check your filters?</Text>
    </View>
  }
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

const styles=StyleSheet.create({
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
export default CategoriesMealsScreen;
