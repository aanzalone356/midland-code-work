import {React, useRef, useState} from "react";
import { useLoginContext } from "../context/loginContext";
import { useSearchContext } from "../context/searchContext"
import { useAnimeListContext } from '../context/animeListContext';
import onList from '../function/onList';
import AnimeDisplay from "./AnimeDisplay";


export const UserAnimeList = (props) => {
    //
    // Build out the API access to fix this problem
    // It should pull down the missing info to fill in for AnimeDisplay
    // 
    // Also build out the SQL server connection
    //
    // OF course CSS
    const {myList} = useAnimeListContext();
    const [animeTitle, setAnimeTitle] = useState('');
    const {searchResults, setSearchResults } = useSearchContext();
    const newAnime = useRef('');
    return(
        <div>
            {myList?.map((value) => {
                return(
                    <AnimeDisplay
                        url={value.url}
                        title={value.title}
                        addFavorite={value.addFavorite}
                        onList={value.onList}
                    />
                )
            })}
        </div>
    )
}