import React from 'react'
import {View,Text,StyleSheet} from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import COLORS from '../constants/colors'
 const FiltersScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Details Screen!</Text>
        </View>
    )
}

FiltersScreen.navigationOptions = (navData) => {
    return {
      headerTitle: "Filters",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Filters"
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
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default FiltersScreen