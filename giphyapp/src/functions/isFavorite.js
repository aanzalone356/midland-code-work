
export default async function isFavorite(url, favorites){
    // favorite.map((val) => {
    // if(val.url === url){
    //     return true;}
    // else{
    //     return false;}})
    return favorites.some((val) => val.url === url)
}