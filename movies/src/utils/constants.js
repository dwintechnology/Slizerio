const API_PATH = 'https://api.themoviedb.org/3';
const API_PATHS = 'https://api.themoviedb.org/3/discover'
const API_KEY =  'e81b5d12d52c0de91f235d90e155683c';
const API_KEYS =  'e366d974f73ae203397850eadc7bce1f';

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
        action:{
            route: 'action',
            title: 'Action',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=28&sort_by=popularity.desc&page=`
        },
        adventure:{
            route: 'adventure',
            title: 'Adventure',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=12&sort_by=popularity.desc&page=`
        },
        animation:{
            route: 'animation',
            title: 'Animation',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=16&sort_by=popularity.desc&page=`
         },
         comedy:{
            route: 'comedy',
            title: 'Comedy',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=35&sort_by=popularity.desc&page=`
         },
         crime:{
            route: 'crime',
            title: 'Crime',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=80&sort_by=popularity.desc&page=`
         },
         documentary:{
            route: 'documentary',
            title: 'Documentary',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=99&sort_by=popularity.desc&page=`
         },
         drama:{
            route: 'drama',
            title: 'Drama',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=18&sort_by=popularity.desc&page=`
         },
         family:{
            route: 'family',
            title: 'Family',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=10751&sort_by=popularity.desc&page=`
         },
         fantasy:{
            route: 'fantasy',
            title: 'Fantasy',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=14&sort_by=popularity.desc&page=`
         },
         history:{
            route: 'history',
            title: 'History',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=36&sort_by=popularity.desc&page=`
         },
         horror:{
            route: 'horror',
            title: 'Horror',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=27&sort_by=popularity.desc&page=`
         },
         music:{
            route: 'music',
            title: 'Music',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=10402&sort_by=popularity.desc&page=`
         },
         mystery:{
            route: 'mystery',
            title: 'Mystery',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=9648&sort_by=popularity.desc&page=`
         },
         romance:{
            route: 'romance',
            title: 'Romance',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=10749&sort_by=popularity.desc&page=`
         },
         science_fiction:{
            route: 'science_fiction',
            title: 'Science Fiction',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=878&sort_by=popularity.desc&page=`
         },
         tv_movie:{
            route: 'tv_movie',
            title: 'TV Movie',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=10770&sort_by=popularity.desc&page=`
         },
         thriller:{
            route: 'thriller',
            title: 'Thriller',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=53&sort_by=popularity.desc&page=`
         },
         war:{
            route: 'war',
            title: 'War',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=10752&sort_by=popularity.desc&page=`
         },
         western:{
            route: 'western',
            title: 'Western',
            url : `${API_PATHS}/movie?api_key=${API_KEYS}&with_genres=37&sort_by=popularity.desc&page=`
         },
    },
}