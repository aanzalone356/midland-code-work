import React from "react";
import Button from "../styled/elements/Button";

const GifDisplay = ({url, title, gif_id, image, addFavorite, removeFavorite, isFavorite}) => {
    return (
        <div>
            <h4>
                {title}
            </h4>
            <img src={url} alt={title} title={title} />
            {isFavorite && (<Button onClick={() => addFavorite(image, gif_id, url, title)}>Add Favorite</Button>)}
            {!isFavorite && (<Button onClick={() => removeFavorite(image, gif_id, url, title)}>Remove Favorite</Button>)}
        </div>
    )
}

export default GifDisplay;