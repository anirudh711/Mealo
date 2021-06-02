import React, { useCallback, useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

import { toggleFavourite } from "../store/actions/meals";
const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};
const MealDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId"); //coming from categoryMeals navigator
  const currentMealIsFavourite = useSelector((state) =>
    state.meals.favouriteMeals.some((meal) => meal.id === mealId)
  );
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
  const dispatch = useDispatch();
  const toggleFavouriteHandler = useCallback(() => {
    console.log("disptahing..");
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId]); //using usecallback so that function isnt recreated and the side-effect is never rerun
  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavouriteHandler });
  }, [toggleFavouriteHandler]);
  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavourite });
  }, [currentMealIsFavourite]);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ing) => (
        <ListItem>{ing}</ListItem>
      ))}

      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((s) => (
        <ListItem>{s}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFav = navigationData.navigation.getParam("toggleFav");
  const isFavourite = navigationData.navigation.getParam("isFav");
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavourite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFav}
        ></Item>
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
export default MealDetailScreen;
