import {getFilms} from "./js/get_films";
import {search} from "./js/search";

$(function(){
    getFilms();


    $('.search .search__input').on('input', function(){
        search($(this).val())
    })
});