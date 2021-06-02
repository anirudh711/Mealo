import React from "react";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import HeaderButton from "../components/HeaderButton";
import COLORS from "../constants/colors";
import { MEALS } from "../data/dummy-data";
const FavouritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favouriteMeals);
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favourites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    ),
  };
};
export default FavouritesScreen;
