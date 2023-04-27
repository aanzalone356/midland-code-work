
export default async function isFavorite(url, favorite){
    favorite.map((val) => {
    if(val.url === url){
        return true;}
    else{
        return false;}})
}