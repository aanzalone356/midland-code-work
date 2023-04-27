import axios from '/VS-Code/axios';

function searchValue(url){
        axios.get(url)
        .then((response) => {
            if(!response.ok){
                console.log(response.status);
            }
            return response.data;
        })
        .catch((error) =>{
            document.getElementById("infoLoader").innerHTML = "We couldn't find that movie please try again!";
            console.error(error);
        })
        .then((res) => {
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
    });
}