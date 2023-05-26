export const CLEAR_LIST = "Clear List";
//Still working out how this will work
//Current best theroy is a function call from the random Anime function
//that will pass a single list and all the NEW_RANDOM s' will be changed into a single set List
//
//Another solution is to change a "type" variable to Full, mixed, watched, and set both in here
export const FULL_NEW_RANDOM = "Full New Random";
export const MIXED_NEW_RANDOM = "Mixed New Random";
export const WATCHED_NEW_RANDOM = "Watched New Random";
export const SET_LIST = "Set List";
export const INITAL_LIST_STATE = [];

export function randomAnimeReducer(state, action){
    switch(action.type){
        case CLEAR_LIST:
           return [];
        case SET_LIST:
            return action.payload;
        default:
            return state;
    }
}