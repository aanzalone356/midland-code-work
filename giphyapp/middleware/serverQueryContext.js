import React, {
    useReducer,
    useContext,
    createContext,
    useCallback,
  } from "react";

import {
    QueryHandler,
    QUERY_FAVORITES,
    QUERY_USERS
} from "./serverQueryReducer";

const ServerQueryContext = createContext(null);

export function useServerQueryContext() {
    return useContext(ServerQueryContext);
};

export function serverQueryProvider(props) {
    const [serverQueryResults, dispatch] = useReducer(
        QueryHandler,
        INITIAL_QUERY_STATE,
    );

    const queryFavorites = useCallback(
        (serverQueryResults) => {
            dispatch({type: QUERY_FAVORITES, payload: serverQueryResults})
    }, [dispatch]);

    const queryUsers = useCallback(
        (serverQueryResults) => {
            dispatch({type: QUERY_USERS, payload: serverQueryResults})
        }, [dispatch]);

    return(
        <ServerQueryContext.Provider value={{serverQueryResults, queryFavorites, queryUsers}}>
            {props.children}
        </ServerQueryContext.Provider>
    )
}