export const ADD_FAVORITE = "Add Favorite";
export const REMOVE_FAVORITE = "Remove Favorite";
//Clears all user favorites
export const CLEAR_FAVORITE = "Clear Favorites";

export const INITIAL_FAVORITES_STATE = [];

export function favoritesReducer(state, action) {
    switch (action.type) {
      case ADD_FAVORITE:
        return [...state, action.payload];
  
      case REMOVE_FAVORITE:
        return state.filter((val) => val.gif_id !== action.payload);
  
      case CLEAR_FAVORITE:
        return [];
  
      default:
        throw new Error("Invalid action");
    }
  }