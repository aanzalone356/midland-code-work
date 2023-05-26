import React, { useState, useEffect} from "react";
import InfoBox from '../styled/elements/InfoBox';
import Button from '../styled/elements/Button';
import Container from '../styled/elements/Container';
import Text from "../styled/elements/Text";
import getGifs from "../functions/getMyGifs";
import { useQuery } from "react-query";
import { useSearchContext } from "../context/SearchContext";
import { useFavoritesContext} from '../context/FavoritesContext';
import GifDisplay from "./GifDisplay";
import isFavorite from '../functions/isFavorite';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [url, setUrl] = useState('');
    const [ran, setRan] = useState('');
    const {searchResults, setSearchResults } = useSearchContext();
    const { favorites, addFavorite, removeFavorite} = useFavoritesContext();

    //This pulls just the info requested
    //Right side is the program name and the data we need to use
    //followed by the use of the prior exported function
    //Set up DisplayGifs
    const {isLoading, error, isSuccess} = useQuery(["getGifs", url, ran], () => getGifs(url, ran), {
      enabled: !!url,
      onSuccess: (data) => setSearchResults(data),
    })

    useEffect(() => {
      console.log(favorites);
    },[favorites])


    return (
      <Container>
          <Text>What Gif are you looking for?</Text>
          <Container>
              <InfoBox id="searchBox" placeholder="Search a Gif!" onChange={(e) => {setSearchTerm(e.target.value)}}></InfoBox>
              <Button data-testid="Search" onClick={() => {setUrl(`q=${searchTerm}&rating=g&lang=en`)}}>Search</Button>
              <Button onClick={() => {
                setUrl(`q=${searchTerm}&rating=g&lang=en`);
                setRan(true);
                }}>Random-Search</Button>
          </Container>
          {isLoading && <p>Loading...</p>}
          {error && <p>An error has occured:{error.message}</p>}
          {isSuccess && 
            searchResults.map((val) => (
              <GifDisplay 
                key={val.gif_id} 
                {...val}
                addFavorite={() => addFavorite({image: val, gif_id: val.gif_id, url: val.url, title: val.title})} 
                removeFavorite={removeFavorite}
                isFavorite={() => {isFavorite(val.url, favorites)}}
                />
            ))}
      </Container>
    )
};

export default Search;