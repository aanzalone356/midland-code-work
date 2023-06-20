import React from "react";

const AnimeDisplay = ({url, title, addFavorite, removeFavorite, onList}) => {
    useEffect(() => {
        console.log(onList);
      },[onList])

    return (
        <div>
            <h4>
                {title}
            </h4>
            <img src={url} alt={title} title={title} />
            {!onList && (<Button onClick={() => addFavorite(image, gif_id, url, title)}>Add Favorite</Button>)}
            {onList && (<Button onClick={() => removeFavorite(gif_id, url, title)}>Remove Favorite</Button>)}
        </div>
    )
}

export default AnimeDisplay;