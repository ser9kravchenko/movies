import {search} from "./search";

export const onSearch =() => {
    try{
        const searchInput = document.querySelector('.search .search__input');
        searchInput.oninput= () =>{
            search(searchInput.value)
        };
    } catch(err){
        throw new Error(err.message);
    }

};
