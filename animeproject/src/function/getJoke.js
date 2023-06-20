const baseURL = 'https://v2.jokeapi.dev/';
const categories = ["Programming", "Misc", "Pun", "Spooky", "Christmas"];
const fullURL = 'https://v2.jokeapi.dev/joke/Any?type=single';

export default async function getJoke(jokeType) {
    //
    const searchQuery = jokeType ? (baseURL + jokeType) : fullURL;
    const response = await fetch(fullURL);

    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const joke = data.data;
    console.log(joke);
    console.log(data);
    return joke.map((val) => ({
        joke: val.joke
    }));
}