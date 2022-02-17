export default {
    API_PATH: 'https://api.themoviedb.org/3',
    API_KEY: 'e81b5d12d52c0de91f235d90e155683c',
    BIG_IMG_PATH: 'https://image.tmdb.org/t/p/w780',
    SMALL_IMG_PATH: 'https://image.tmdb.org/t/p/w342',
    PAGES: {
        popular : {
            route: 'popular',
            title: 'Popular',
            url : `https://api.themoviedb.org/3/movie/popular?api_key=e366d974f73ae203397850eadc7bce1f&page=`
        },
        rated : {
            route: 'top_rated',
            title: 'Top Rated',
            url : `https://api.themoviedb.org/3/movie/top_rated?api_key=e366d974f73ae203397850eadc7bce1f&page=`
        },
        upcoming : {
            route: 'upcoming',
            title: 'Upcoming',
            url : `https://api.themoviedb.org/3/movie/upcoming?api_key=e366d974f73ae203397850eadc7bce1f&page=`
        },
    },
}