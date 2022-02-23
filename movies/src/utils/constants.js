const API_PATH = 'https://api.themoviedb.org/3';
const API_KEY =  'e81b5d12d52c0de91f235d90e155683c';
const API_KEY_Genres =  'e366d974f73ae203397850eadc7bce1f';

export default {
    API_PATH: API_PATH,
    API_KEY: API_KEY,
    API_KEYS: API_KEY_Genres,
    BIG_IMG_PATH: 'https://image.tmdb.org/t/p/w780',
    SMALL_IMG_PATH: 'https://image.tmdb.org/t/p/w342',
    PAGES: {
        popular : {
            route: '/Popular',
            title: 'Popular',
            url : `${API_PATH}/movie/popular?api_key=${API_KEY}&page=`
        },
        rated : {
            route: '/Top%20Rated',
            title: 'Top Rated',
            url : `${API_PATH}/movie/top_rated?api_key=${API_KEY}&page=`
        },
        upcoming : {
            route: '/Upcoming',
            title: 'Upcoming',
            url : `${API_PATH}/movie/upcoming?api_key=${API_KEY}&page=`
        },
        action:{
            route: '/Action',
            title: 'Action',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=28&sort_by=popularity.desc&page=`
        },
        adventure:{
            route: '/Adventure',
            title: 'Adventure',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=12&sort_by=popularity.desc&page=`
        },
        animation:{
            route: '/Animation',
            title: 'Animation',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=16&sort_by=popularity.desc&page=`
         },
         comedy:{
            route: '/Comedy',
            title: 'Comedy',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=35&sort_by=popularity.desc&page=`
         },
         crime:{
            route: '/Crime',
            title: 'Crime',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=80&sort_by=popularity.desc&page=`
         },
         documentary:{
            route: '/Documentary',
            title: 'Documentary',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=99&sort_by=popularity.desc&page=`
         },
         drama:{
            route: '/Drama',
            title: 'Drama',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=18&sort_by=popularity.desc&page=`
         },
         family:{
            route: '/Family',
            title: 'Family',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=10751&sort_by=popularity.desc&page=`
         },
         fantasy:{
            route: '/Fantasy',
            title: 'Fantasy',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=14&sort_by=popularity.desc&page=`
         },
         history:{
            route: '/History',
            title: 'History',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=36&sort_by=popularity.desc&page=`
         },
         horror:{
            route: '/Horror',
            title: 'Horror',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=27&sort_by=popularity.desc&page=`
         },
         music:{
            route: '/Music',
            title: 'Music',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=10402&sort_by=popularity.desc&page=`
         },
         mystery:{
            route: '/Mystery',
            title: 'Mystery',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=9648&sort_by=popularity.desc&page=`
         },
         romance:{
            route: '/Romance',
            title: 'Romance',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=10749&sort_by=popularity.desc&page=`
         },
         science_fiction:{
            route: '/Science%20Fiction',
            title: 'Science Fiction',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=878&sort_by=popularity.desc&page=`
         },
         tv_movie:{
            route: '/TV%20Movie',
            title: 'TV Movie',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=10770&sort_by=popularity.desc&page=`
         },
         thriller:{
            route: '/Thriller',
            title: 'Thriller',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=53&sort_by=popularity.desc&page=`
         },
         war:{
            route: '/War',
            title: 'War',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=10752&sort_by=popularity.desc&page=`
         },
         western:{
            route: '/Western',
            title: 'Western',
            url : `${API_PATH}/discover/movie?api_key=${API_KEY_Genres}&with_genres=37&sort_by=popularity.desc&page=`
         },
    },
}