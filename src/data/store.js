import {reactive} from 'vue';

export const store = reactive ({
  apiUrl : 'https://api.themoviedb.org/3/',
  daySearch : 'https://api.themoviedb.org/3/trending/movie/day?',
  apiKey : 'api_key=d321c7f6f9c8f4981d9b27438164a67b',

  searchMovie:'https://api.themoviedb.org/3/search/movie?',
  searchTv:'https://api.themoviedb.org/3/search/tv?',
  searchWord:'&query=',
  page:'&page=',
  pageNumb: '1',
  getTraslationsUrl : 'https://api.themoviedb.org/3/movie/{movie_id}/translations?api_key=<<api_key>>',

  traslation:'translations?',
  lang:'&language=it-en',
  selectedLang: 'it' ,
  films:[],
  tv:[],
  inputSearch: '',
  research :'rest'

})