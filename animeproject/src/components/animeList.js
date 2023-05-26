import {React, useRef} from "react";
import { useLoginContext } from "../context/loginContext";
import { useAnimeListContext } from '../context/animeListContext';

const handleSearch = (e, title) => {
    //
}

const handleAnime = (e, animeId) => {
    //
}

const handleInfoChange = (e, animeId, stat) => {
    //
}

export const UserAnimeList = (props) => {
    //
    const {myList} = useAnimeListContext();
    const newAnime = useRef('');
    const animeTitle = useRef('');
    return(
        <div></div>
    )
}