import React,{useMemo} from "react";
import FavoritesPage from "./FavoritesPage";
import Login from "./Login";
import Search from "./Search";
import { useUserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import HomePage from "./HomePage";

const withAuthentication = (WrappedComponent, requiresUser) => {
    return (props) => {
        const {user} = useUserContext();

        const redirectTo = useMemo(() => (requiresUser ? "/login" : "/search"), []);
        
        const authorized = useMemo(() => {
            return (!requiresUser && !user) || (requiresUser && user);
        },[user]);

        if(authorized) {
            return <WrappedComponent {...props} />
        }

        return <Navigate to={redirectTo} />
    }
}

export const HomePageWithAuth = withAuthentication(HomePage, false);
export const LoginPageWithAuth = withAuthentication(Login, false);
export const SearchPageWithAuth = withAuthentication(Search, true);
export const FavoritesPageWithAuth = withAuthentication(FavoritesPage, true);