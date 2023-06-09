import {reactive} from 'vue';

export const store = reactive ({
  apiUrl : 'https://api.themoviedb.org/3/',
  apiKey : '?api_key=d321c7f6f9c8f4981d9b27438164a67b',

  daySearch : 'https://api.themoviedb.org/3/trending/movie/day',
  daySearchTv : 'https://api.themoviedb.org/3/trending/tv/day',

  searchMovie:'https://api.themoviedb.org/3/search/movie',
  searchIdMovie:'https://api.themoviedb.org/3/movie/',

  searchGenreMovieList:'https://api.themoviedb.org/3/genre/movie/list',
  searchGenreTvList:'https://api.themoviedb.org/3/genre/tv/list',

  searchTv:'https://api.themoviedb.org/3/search/tv',
  searchIdTv:'https://api.themoviedb.org/3/tv/',
  searchWord:'&query=',

  // imgUrl : 'https://image.tmdb.org/t/w300',

  // getTraslationsUrl : 'https://api.themoviedb.org/3/movie/{movie_id}/translations?api_key=<<api_key>>',

  selectedLang: 'it' ,
  lang:'&language=',

  films:[],
  filmsGeneres:[],
  filmsRuntimes:[],
  tv:[],
  tvGeneres:[],
  tvRuntimes:[],

  listGenresMovie:[],
  listGenresTv:[],

  inputSearch: 'cerca',
  research :'',

  pageInfo: 1,

})