import axios from "axios";

const baseURL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25&offset=0&`;
const baseURLRan = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=100&offset=0&`;

export default async function getGifs(searchString, random){
    if(!!random){
        const response = await axios.get(baseURLRan + searchString)
        const gifs = response.data.data;
        console.log(baseURLRan + searchString);
        return gifs.map((val) => ({
            gif_id: val.id,
            title: val.title,
            url: val.images.original.url
        })) 
    }
    else{
        const response = await axios.get(baseURL + searchString)
        const gifs = response.data.data;
        console.log(baseURL + searchString);
        return gifs.map((val) => ({
            gif_id: val.id,
            title: val.title,
            url: val.images.original.url
        })) 
    }
}
