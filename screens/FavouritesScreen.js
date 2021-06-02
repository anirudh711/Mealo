import React from "react";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {View,Text,StyleSheet} from 'react-native'
import { useSelector } from "react-redux";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText"
const FavouritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favouriteMeals);
  if(favMeals.length===0 || !favMeals){
    return <View style={styles.content}>
      <DefaultText>No Favourite meals found.Start adding some!</DefaultText>
    </View>
  }
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
const styles=StyleSheet.create({
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
export default FavouritesScreen;
