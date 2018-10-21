import {renderMovie} from "./render_movie";

export const getMovie = () => {

    const movieId = location.hash.split('/')[1];

    const apiKey = '145bcb3478db0e44194593b2b53f60a9';
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
    fetch(url)
        .then(response => {
            return response.json();
        }).then(data => {
            renderMovie(data);
        }).catch(err => {
            console.error(err.message)
    });

};
