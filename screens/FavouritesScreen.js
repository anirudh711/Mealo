import React from 'react'
import MealList from '../components/MealList';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import COLORS from '../constants/colors'
import {MEALS} from '../data/dummy-data'
const FavouritesScreen = (props) => {
    const favMeals =MEALS.filter(meal=>meal.id==='m1'|| meal.id==='m2')
    return <MealList listData={favMeals} navigation={props.navigation} />
}

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
export default FavouritesScreen
