import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favouriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favouriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favouriteMeals: updatedFavMeals };
      } else {
        return {
          ...state,
          favouriteMeals: state.favouriteMeals.concat(
            state.meals.find((meal) => meal.id === action.mealId)
          ),
        };
      }
    default:
      return state;
  }
};

export default mealsReducer;
