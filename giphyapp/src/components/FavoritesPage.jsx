import React, {useEffect} from "react";
import Text from "../styled/elements/Text";
import Container from "../styled/elements/Container";
import GifDisplay from "./GifDisplay";
import { useFavoritesContext } from '../context/FavoritesContext';

const {favorites, removeFavorite} = useFavoritesContext;

const FavoritesPage = () => {

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
                />)
            })}
        </Container>
    </Container>
    )
};

export default FavoritesPage;