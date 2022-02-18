const API_PATH = 'https://api.themoviedb.org/3';
const API_KEY =  'e81b5d12d52c0de91f235d90e155683c';


export default {
    API_PATH: API_PATH,
    API_KEY: API_KEY,
    BIG_IMG_PATH: 'https://image.tmdb.org/t/p/w780',
    SMALL_IMG_PATH: 'https://image.tmdb.org/t/p/w342',
    PAGES: {
        popular : {
            route: 'popular',
            title: 'Popular',
            url : `${API_PATH}/movie/popular?api_key=${API_KEY}&page=`
        },
        rated : {
            route: 'top_rated',
            title: 'Top Rated',
            url : `${API_PATH}/movie/top_rated?api_key=${API_KEY}&page=`
        },
        upcoming : {
            route: 'upcoming',
            title: 'Upcoming',
            url : `${API_PATH}/movie/upcoming?api_key=${API_KEY}&page=`
        },
    },
}