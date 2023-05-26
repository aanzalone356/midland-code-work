export const ADD_ANIME = "Add Anime";
export const REMOVE_ANIME = "Remove Anime";
export const CHANGE_RANKING = "Change Ranking";
export const CHANGE_RATING = "Change Rating";
export const INITAL_LIST_STATE = [];

export function animeListReducer(state, action){
    switch(action.type){
        case ADD_ANIME:
            return [...state, action.payload];
        case REMOVE_ANIME:
            return state.filter((val) => val.anime_id !== action.payload);
        case CHANGE_RANKING:
            return {...state, ranking: action.payload};
        case CHANGE_RATING:
            return {...state, rating: action.payload};
        default:
            return state
    }
}