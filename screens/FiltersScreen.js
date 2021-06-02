import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {useDispatch} from 'react-redux'
import HeaderButton from "../components/HeaderButton";
import COLORS from "../constants/colors";
import {setFilters} from "../store/actions/meals"
const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: COLORS.primaryColor }}
        thumbColor={COLORS.primaryColor}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};
const FiltersScreen = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVeg, setIsVeg] = useState(false);
const dispatch=useDispatch()
  const saveFilters = useCallback(() => {
    //this recreates the function only if these 4 states change, and caches it.
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isGlutenFree,
      vegetarian: isVegan,
      vegan: isVegan,
    };
    dispatch(setFilters(appliedFilters))
  }, [isGlutenFree, isGlutenFree, isVegan, isVeg,dispatch]);
  useEffect(() => {
    navigation.setParams({ save: saveFilters }); //to update the params currently loaded in this screen so that the header right can access this
  }, [saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters/Restrictions</Text>
      <FilterSwitch
        label={"Gluten Free"}
        state={isGlutenFree}
        onChange={() => setIsGlutenFree((v) => !v)}
      />
      <FilterSwitch
        label={"Lactose Free"}
        state={isLactoseFree}
        onChange={() => setIsLactoseFree((v) => !v)}
      />
      <FilterSwitch
        label={"Vegan"}
        state={isVegan}
        onChange={() => setIsVegan((v) => !v)}
      />
      <FilterSwitch
        label={"Vegetarian"}
        state={isVeg}
        onChange={() => setIsVeg((v) => !v)}
      />
    </View>
  );
};

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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        ></Item>
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default FiltersScreen;
