import {getFilms} from "./get_films";
import {renderFilms} from "./render_films";

export const search = (searchText) => {
    const apiKey = '145bcb3478db0e44194593b2b53f60a9';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`;

    if(searchText.length){
        fetch(url)
            .then(response => {
                return response.json();
            }).then(data => {
            renderFilms(data.results);
        });
    } else {
        getFilms();
    }
};
