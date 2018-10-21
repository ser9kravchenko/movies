const addClickListeners = () => {
    const movieLink = document.querySelectorAll('.movie-card .movie-card__link');
    movieLink.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            location.hash = `movie/${link.getAttribute('href')}`;
        });
    });
};

export const renderFilms = (filmsData) => {
    const moviesHolder = document.querySelector('.movies-holder');
    const placeholderSrc = 'images/placeholder.png';
    const posterUrl = 'https://image.tmdb.org/t/p/w500';

    try {
        const films = filmsData.map(film => {
            return {
                id: film.id,
                title: film.original_title,
                poster: film.poster_path,
                releaseDate: film.release_date,
                rating: film.vote_average
            }
        });

        moviesHolder.innerHTML = films.map(film => {
            return `
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <div class="movie-card">
                    <a href="${film.id}" class="movie-card__link">
                        <img src="${film.poster ? posterUrl+film.poster : placeholderSrc}" alt="" class="movie-card__poster img-fluid">
                    </a>
                    <span class="movie-card__title">
                        <a href="${film.id}" class="movie-card__link">
                            ${film.title}
                        </a>
                    </span>
                    <span class="movie-card__release-date">${film.releaseDate}</span>
                    <div class="rating">
                        <div class="rating__stars rating__stars_active" style="width: ${film.rating * 10}%">
                            <img src="images/yellow_stars.svg" alt="">
                        </div>
                        <div class="rating__stars">
                            <img src="images/grey_stars.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        `;
        }).join('');
        addClickListeners();

    } catch (err){
        throw new Error(err.message);
    }

};
