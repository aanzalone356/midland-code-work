import {React, useContext, createContext, useReducer, useCallback} from "react";
import{
    ADD_ANIME,
    REMOVE_ANIME,
    CHANGE_RATING,
    CHANGE_RANKING,
    INITAL_LIST_STATE,
    animeListReducer,
} from '../reducers/animeListReducer';

const animeListContext = createContext(null);

export function useAnimeListContext(){
    return useContext(animeListContext);
}

export function AnimeListProvider(props){
    //
    const [myList, dispatch] = useReducer(animeListReducer, INITAL_LIST_STATE);

    const addAnime = useCallback((anime) => {
        dispatch({type: ADD_ANIME, payload: anime})}, [dispatch]
    );

    const removeAnime = useCallback((anime_id) => {
        dispatch({type: REMOVE_ANIME, payload: anime_id})}, [dispatch]
    );

    const changeRating = useCallback((anime_id, rating) => {
        dispatch({type: CHANGE_RATING, payload: {anime_id, rating}})}, [dispatch]
    );

    const changeRanking = useCallback((anime_id) => {
        dispatch({type: CHANGE_RANKING, payload: anime_id})}, [dispatch]
    );
    return(
        <animeListContext.Provider value={{myList, addAnime, removeAnime, changeRanking, changeRating}}>
            {props.children}
        </animeListContext.Provider>
    )
}