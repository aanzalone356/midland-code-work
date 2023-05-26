import {React, useContext, createContext, useReducer, useCallback} from "react";
import{
    CLEAR_LIST,
    FULL_NEW_RANDOM,
    MIXED_NEW_RANDOM,
    WATCHED_NEW_RANDOM,
    INITAL_LIST_STATE,
    SET_LIST,
    randomAnimeReducer,
} from '../reducers/randomAnimeReducer';

const randomAnimeContext = createContext(null);

export function useRandomAnimeContext() {
    return useContext(randomAnimeContext);
}

export function RandomAnimeProvider(props){
    //
    const [randomList, dispatch] = useReducer(randomAnimeReducer, INITAL_LIST_STATE);
    
    //Make check user list a function this way we can keep all reducers and context on the same branch

    const clearList = useCallback(() => {
        dispatch({type: CLEAR_LIST})},[dispatch]
    );

    const setList = useCallback((list) => {
        dispatch({type: SET_LIST, payload: list})}, [dispatch]
    );

    const fullNewRandom = useCallback((list) => {
        dispatch({type: FULL_NEW_RANDOM, payload: list})}, [dispatch]
    );

    const mixedNewRandom = useCallback((list) => {
        dispatch({type: MIXED_NEW_RANDOM, payload: list})}, [dispatch]
    );

    const watchNewRandom = useCallback((list) => {
        dispatch({type: WATCHED_NEW_RANDOM, payload: list})}, [dispatch]
    );

    return(
        <randomAnimeContext.Provider value = {{randomList, clearList, setList, fullNewRandom, mixedNewRandom, watchNewRandom}}>
            {props.children}
        </randomAnimeContext.Provider>
    )
}