import {React, useRef, useState} from "react";
import { useLoginContext } from "../context/loginContext";
import { useSearchContext } from "../context/searchContext"
import { useAnimeListContext } from '../context/animeListContext';
import onList from '../function/onList';


export const UserAnimeList = (props) => {
    //
    const {myList} = useAnimeListContext();
    const [animeTitle, setAnimeTitle] = useState('');
    const {searchResults, setSearchResults } = useSearchContext();
    const newAnime = useRef('');
    return(
        <div></div>
    )
}