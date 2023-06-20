export const QUERY_FAVORITES = "Query Favorites";
export const QUERY_USERS = "Query Users";
export const INITIAL_QUERY_STATE = null;

export function QueryHandler(state, query){
    //
    switch(query.type){
        case QUERY_FAVORITES:
            return query.payload;
        case QUERY_USERS:
            return query.payload;
        default:
            return state
    }
};