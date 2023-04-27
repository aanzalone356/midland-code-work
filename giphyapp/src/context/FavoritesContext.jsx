import React, { createContext, useCallback, useContext, useReducer, useEffect } from 'react';
import { 
  ADD_FAVORITE, 
  CLEAR_FAVORITE, 
  REMOVE_FAVORITE, 
  INITIAL_FAVORITES_STATE, 
  favoritesReducer 
} from '../reducers/favoritesReducer';

const FavoritesContext = createContext(null);

export function useFavoritesContext() {
    return useContext(FavoritesContext);
}

export function FavoritesProvider(props) {

    const [favorites, dispatch] = useReducer(favoritesReducer, INITIAL_FAVORITES_STATE);

    useEffect(() => {
      console.log(favorites);
    },[favorites])

    const addFavorite = useCallback(
        (gif) => dispatch({ type: ADD_FAVORITE, payload: gif}),
        [dispatch]
    );
    const removeFavorite = useCallback(
        (gif_id) => {dispatch({type: REMOVE_FAVORITE, payload: gif_id});
        }, [dispatch]
    );
    const clearFavorite = useCallback(() => {
        dispatch({type: CLEAR_FAVORITE});
        }, [dispatch]
    );

    return (
      <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, clearFavorite }}>
        {props.children}
      </FavoritesContext.Provider>
    )
  }
  