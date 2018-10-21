import {getFilms} from "./js/get_films";
import {getMovie} from "./js/get_movie";
import {Router} from "./js/router";
import {Route} from "./js/route";

document.addEventListener('DOMContentLoaded', () => {
    const routes = [
        new Route('', 'home.html', true, getFilms),
        new Route('movie/:id', 'movie.html', false, getMovie)
    ];
    new Router(routes);
});
