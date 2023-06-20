import React, {useContext, useEffect} from "react";
import Text from "../styled/elements/Text";
import Container from "../styled/elements/Container";
import GifDisplay from "./GifDisplay";
import { useFavoritesContext } from '../context/FavoritesContext';
import axios from "axios";

const FavoritesPage = (props) => {
    const {favorites, removeFavorite} = useFavoritesContext();
    const [favoritesList, setFavoritesList] = useContext('');

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
    }

    useEffect(() => {
        console.log(favorites);
      },[favorites])

    return(
    <Container>
        <Container>
            <Text>List Title</Text>
        </Container>
        <Container>
            {favorites?.map((value) => {
                return(
                <GifDisplay
                    key={value.gif_id} 
                    title={value.title} 
                    gif_id={value.gif_id} 
                    url={value.url} 
                    removeFavorite={removeFavorite}                    
                    isFavorite={true}
                    data-testid='favorites'
                />)
            })}
        </Container>
    </Container>
    )
};

export default FavoritesPage;