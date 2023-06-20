import React, {useEffect, useContext} from "react";
import axios from "axios";
import Button from "../styled/elements/Button";

const GifDisplay = ({url, title, gif_id, image, addFavorite, removeFavorite, isFavorite}) => {
    const [currentGif, setCurrentGif] = useContext('');
    //should be brought to larger context
    const [favorites, setFavoritesList] = useContext('');

    const loadFavorites = async (e,props) => {
        e.preventDefault();

        try{
            const response = await axios.get('http://localhost:3006/favorites');

            if(response.status === 200) {
                setFavoritesList(response);
            } else{
                console.error("Error Loading Favorites");
            }

        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        console.log(isFavorite);
      },[isFavorite])

    return (
        <div>
            <h4>
                {title}
            </h4>
            <img src={url} alt={title} title={title} />
            {!isFavorite && (<Button onClick={() => addFavorite(image, gif_id, url, title)}>Add Favorite</Button>)}
            {isFavorite && (<Button onClick={() => removeFavorite(gif_id, url, title)}>Remove Favorite</Button>)}
        </div>
    )
}

export default GifDisplay;