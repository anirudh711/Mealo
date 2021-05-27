import React from 'react'
import MealList from '../components/MealList'
import COLORS from '../constants/colors'
import {MEALS} from '../data/dummy-data'
const FavouritesScreen = (props) => {
    const favMeals =MEALS.filter(meal=>meal.id==='m1'|| meal.id==='m2')
    return <MealList listData={favMeals} navigation={props.navigation} />
}

FavouritesScreen.navigationOptions={
    headerTitle:'Your Favorites',
}

export default FavouritesScreen
