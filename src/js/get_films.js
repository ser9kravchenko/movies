import {renderFilms} from "./render_films";

export const getFilms = () => {

    const apiKey = '145bcb3478db0e44194593b2b53f60a9';
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
    fetch(url)
    .then(response => {
        return response.json();
    }).then(data => {
        renderFilms(data.results);
    });
};

