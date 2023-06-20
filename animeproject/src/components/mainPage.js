import React from 'react';
import Button from '../styled/elements/Button';
import Container from '../styled/elements/Container';
import Spacer from '../styled/elements/spacer';
import getJoke from '../function/getJoke';
import {useQuery} from 'react-query';
import {useSearchContext} from '../context/searchContext';
import { useState } from 'react';
import JokeDisplay from './DisplayJoke';

export const MainPage = () => {
    //
    const {jokeResults, setJokeResults } = useState('');
    const [jokeType, setJokeType] = useState('');
    const {isLoading, error, isSuccess} = useQuery(["getJoke",jokeType], () => getJoke(jokeType), {
      enabled: !!jokeType,
      onSuccess: (data) => setJokeResults(data),
    })
    console.log(jokeResults);
    //
    //TODO: Fill in image tags(Card Media) ad well as feed text to "Typography" tag
    //TODO:                               do this via API Functions making the calls
    return(
      <Container flexDirection='row'>
        <Container color='red'>
          <div>Hello Welcome to the page</div>
          {isLoading && <p>Loading...</p>}
          {error && <p>An error has occured:{error.message}</p>}
          {isSuccess && 
            jokeResults.map((val) => (
              <JokeDisplay
                joke={val.joke}
              />
            ))}
        </Container>
        <Spacer mt={40} mr={100} ml={100} mb={300}/>
        <Container color='blue' backgroundColor='lightgrey'>
          <div>Some info</div>
          <Button >Click</Button>
        </Container>
      </Container>
    );
};