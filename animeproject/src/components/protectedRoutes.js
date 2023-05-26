import React, {useMemo} from "react";
import { MainPage } from "./mainPage";
import { RandomAnime } from "./randomAnime";
import { UserAnimeList } from "./animeList";
import { useLoginContext } from "../context/loginContext";
import { Navigate } from "react-router-dom";

const withAuthentication = (WrappedComponent, requiresUser) => {
    return(props) => {
        const {user} = useLoginContext();

        const redirectTo = useMemo(() => (requiresUser ? '/login' : '/animeList'), []);

        const authorized = useMemo(() => {
            return (!requiresUser && !user) || (requiresUser && user);}, [user]);

        if(authorized) {
            return <WrappedComponent {...props} />
        }

        return <Navigate to={redirectTo} />
    }
}

export const MainPageWithAuth = withAuthentication(MainPage, false);
export const AnimeListWithAuth = withAuthentication(UserAnimeList, true);
export const RandomAnimeWithAuth = withAuthentication(RandomAnime, false);