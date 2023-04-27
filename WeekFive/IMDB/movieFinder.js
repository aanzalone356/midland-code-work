//html and css
// Come up with layout
// Come up with breakpoints
// Build form elements / containers / etc
// Event listener to submit button to do the things

//js
// Count amount of letters they input and do appropriate action
// Read API Documentation to see what format you will get a response in / what you need to send
// Fetch data from the API
// Display error message to DOM if something went wrong
// Use data to display to DOM

function searchValue(url){
try{        
    fetch(url)
        .then((response) => {
            if(!response.ok){
                console.log(response.status);
            }
            return response.json();
        })
        .then((res) => {
        try{
            if(res.Title.length > 0)
            title = res.Title;
            year = res.Year;
            rated = res.Rated;
            runtime = res.Runtime;
            Director = res.Director;
            metascore = res.Metascore;
            let count = 0;
            for(let prop in res) {
                if(res.hasOwnProperty(prop))
                ++count;
            }
            console.log(count);
            document.getElementById("infoLoader").innerHTML = `Title: ${title} <br> Year: ${year} <br> 
                        Rated: ${rated} <br> Runtime: ${runtime} <br> Director: ${Director} <br> 
                        Metascore: ${metascore} <br> Total Unseen Elements: ${count - 6}`;

        }
        catch(error){
            document.getElementById("infoLoader").innerHTML = "We couldn't find that movie please try again!";
            console.error(error);
        }
    });
}
catch(error){
            document.getElementById("infoLoader").innerHTML = "We couldn't find that movie please try again!";
            console.error(error);
}
}

function urlBuilder(){
    reset();
    let url = "http://www.omdbapi.com/?&apikey=136a0db1";
    title = document.getElementById('searchBox').value;
    let year = document.getElementById('yearBox').value;
    let format = document.getElementById('showFormat').value;
    while(title.length < 2){
        title = prompt("Please enter a proper title or ID");
        console.log(title);
    }
    console.log(title.replace(/\s+/g, '+'));
    console.log(url)
    url = url + `&t=${title}`;
    console.log(url)
    if(year !== ""){
        url = url + `&y=${year}`;
    }
    if(format !== ''){
        url = url + `&type=${format}`;
    }
    console.log(url)
    searchValue(url);

    return false;
}

function reset(){
    var title = "";
    var year = 0;
    var rated = "";
    var runtime = 0;
    var Director = "";
    var metascore = 0;
}