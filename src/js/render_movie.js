export const renderMovie = (movieData) => {
    const movieHolder = document.querySelector('.movie-holder');
    const posterUrl = 'https://image.tmdb.org/t/p/w500';
    const imdbUrl = 'https://www.imdb.com/title/';
    const placeholderSrc = 'images/placeholder.png';
    try {
        movieHolder.innerHTML =  `
            <div class="movie col-12">
                <div class="row">
                    <div class="col-md-5 col-12">
                        <img src="${movieData.poster_path ? posterUrl+movieData.poster_path : placeholderSrc}" alt="" class="movie-card__poster img-fluid">
                    </div>
                    <div class="col-md-7 col-12">
                        <h1 class="movie__title">${movieData.original_title}</h1>
                        <div class="movie__rating rating">
                            <div class="rating__stars rating__stars_active" style="width: ${movieData.vote_average * 10}%">
                                <img src="images/yellow_stars.svg" alt="">
                            </div>
                            <div class="rating__stars">
                                <img src="images/grey_stars.svg" alt="">
                            </div>
                        </div>
                        <div class="movie__budget" style="display: ${movieData.budget ? 'block' : 'none'}">
                            <span>Budget:</span>
                            <span>${movieData.budget} $</span>
                        </div>
                        <div class="movie__imdb" style="display: ${movieData.imdb_id ? 'block' : 'none'}">
                            <a href="${imdbUrl}${movieData.imdb_id}/" target="_blank">imdb</a>
                        </div>
                        <div class="movie__runtime" style="display: ${movieData.runtime ? 'block' : 'none'}">
                            <span>Runtime:</span>
                            <span>${movieData.runtime} min</span>
                        </div>
                        <div class="movie__overview overview" style="display: ${movieData.overview ? 'block' : 'none'}">
                            <span class="overview__title">Overview</span>
                            <span class="overview__text">${movieData.overview}</span>
                        </div>
                    </div>
                </div>
            </div>  
    `;
    } catch(err) {
        throw new Error(err.message);
    }
};
