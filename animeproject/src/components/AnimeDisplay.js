import { useEffect } from "react";
import React from "react";
import Button from "../styled/elements/Button";

const AnimeDisplay = ({url, title, addFavorite, removeFavorite, onList, animeId}) => {
    useEffect(() => {
        console.log(onList);
      },[onList])

    
    // CSS :)
    return (
        <div>
            <h4>
                {title}
            </h4>
            <img src={url} alt={title} title={title} />
            {!onList && (<Button onClick={() => addFavorite(animeId, url, title)}>Add Favorite</Button>)}
            {onList && (<Button onClick={() => removeFavorite(animeId, url, title)}>Remove Favorite</Button>)}
        </div>
    )
}

export default AnimeDisplay;