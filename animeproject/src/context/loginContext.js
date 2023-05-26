import {React, useContext, createContext, useReducer, useCallback} from "react";
import {
    CLEAR_USER,
    SET_USER,
    INTIAL_USER_STATE,
    userReducer,
} from '../reducers/userReducer';

const LoginContext = createContext(null);

export function useLoginContext(){
    return useContext(LoginContext);    
};

export const LoginProvider = (props) => {
    //
    const [user, dispatch] = useReducer(userReducer, INTIAL_USER_STATE);

    const setUser = useCallback(
        (user) => dispatch({type: SET_USER, payload: user}),
        [dispatch]
    );

    const clearUser= useCallback(() => {
        dispatch({type: CLEAR_USER})},
        [dispatch]
    );

    return(
        <LoginContext.Provider value={{user, setUser, clearUser}}>
            {props.children}
        </LoginContext.Provider>
    )
};