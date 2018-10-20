export const renderFilms = (filmsData) => {
    const films = filmsData.map(film => {
        return {
            id: film.id,
            title: film.title,
            poster: film.poster_path,
            releaseDate: film.release_date,
            rating: film.vote_average
        }
    });

    const filmsHtml = films.map(film => {
        const posterUrl = 'https://image.tmdb.org/t/p/w500';
        return `
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <div class="movie-card">
                    <a href="${film.id}" class="movie-card__link">
                        <img src="${posterUrl}${film.poster}" alt="" class="movie-card__poster img-fluid">
                    </a>
                    <span class="movie-card__title">${film.title}</span>
                    <span class="movie-card__release-date">${film.releaseDate}</span>
                    <div class="movie-card__rating rating">
                        <div class="rating__stars rating__stars_active"></div>
                        <div class="rating__stars"></div>
                    </div>
                </div>
            </div>
        `;
    });

    $('.movies-content').html(filmsHtml);
};
