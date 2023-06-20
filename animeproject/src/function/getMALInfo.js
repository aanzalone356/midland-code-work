import React from "react";
//site url
const url = 'https://graphql.anilist.co';
var variables;
var query = `
query ($id: Int, $page: Int = 1, $perPage: Int = 10, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      title {
        romaji
        english
        native
      }
    }
  }
}
`;


const handleVariables = (id,search,page,perPage) => {
    variables = 
    {
        id: id,
        search: search,
        page: page,
        perPage: perPage
    };
}

export default async function getAnimeInfo(id,search,page,perPage) {
    
    handleVariables(id,search,page,perPage);
    //This is the body/fetch request for the site
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };

    fetch(url, options).then(handleResponse)
                    .then(handleData)
                    .catch(handleError);

    function handleResponse(response) {
        return response.json().then(function (json) {
            return response.ok ? json : Promise.reject(json);
        });
    }

    function handleData(data) {
        console.log(data);
    }

    function handleError(error) {
        alert('Error, check console');
        console.error(error);
    }

    const data = await response.json();
    const animes = data.data.page.media;
    return animes.map((val) => ({
        title: val.title.english,
        id: val.id,
    }))
}