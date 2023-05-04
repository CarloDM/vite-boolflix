import {reactive} from 'vue';

export const store = reactive ({
  apiUrl : 'https://api.themoviedb.org/3/',
  daySearch : 'trending/movie/day?',
  apiKey : 'api_key=d321c7f6f9c8f4981d9b27438164a67b',
  searchpat:'https://api.themoviedb.org/3/search/keyword?api_key=<<api_key>>&page=1',
  lang:'en',
  films:[],

})